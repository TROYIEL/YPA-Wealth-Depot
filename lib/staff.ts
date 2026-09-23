import "server-only";
import { redirect } from "next/navigation";
import { ID, Query, Storage } from "node-appwrite";
import { adminDatabases, client, currentUser, DB } from "./portal";

export const roles = {
  content: ["admin", "editor"],
  withdrawals: ["admin", "finance"],
  logs: ["admin"],
} as const;
export type Capability = keyof typeof roles;

export function allowed(labels: string[], capability: Capability) {
  return roles[capability].some(role => labels.includes(role));
}

export async function requireStaff(capability?: Capability) {
  const identity = await currentUser();
  if (!identity) redirect("/portal/login");
  const labels = identity.user.labels || [];
  if (!labels.some(label => ["admin", "editor", "finance"].includes(label)) || (capability && !allowed(labels, capability))) redirect("/portal");
  return { ...identity, labels };
}

export async function audit(actor: { $id: string; email: string }, action: string, target: string, details: string) {
  await adminDatabases().createDocument({ databaseId: DB, collectionId: "audit_logs", documentId: ID.unique(), data: { actorId: actor.$id, actorEmail: actor.email, action, target, details, happenedAt: new Date().toISOString() } });
}

export async function listContent(publishedOnly = false) {
  const result = await adminDatabases().listDocuments({ databaseId: DB, collectionId: "site_content", queries: [
    ...(publishedOnly ? [Query.equal("status", "published")] : []), Query.orderDesc("$createdAt"), Query.limit(100),
  ] });
  return result.documents;
}

export function mediaUrl(fileId: string) {
  if (!fileId) return "";
  const endpoint = process.env.APPWRITE_ENDPOINT;
  const project = process.env.APPWRITE_PROJECT_ID;
  if (!endpoint || !project) return "";
  return `${endpoint}/storage/buckets/site_media/files/${encodeURIComponent(fileId)}/view?project=${encodeURIComponent(project)}`;
}

export function adminStorage() {
  const key = process.env.APPWRITE_API_KEY;
  if (!key) throw new Error("Appwrite server key is not configured");
  return new Storage(client().setKey(key));
}
