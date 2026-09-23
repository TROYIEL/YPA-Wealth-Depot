import "server-only";
import { cookies } from "next/headers";
import { Account, Client, Databases, Query, Models } from "node-appwrite";

export const SESSION_COOKIE = "ypa_portal_session";
export const DB = process.env.APPWRITE_DATABASE_ID || "ypa_portal";
type PortalDocument = Models.Document & Record<string, unknown>;

export function client(session?: string) {
  const endpoint = process.env.APPWRITE_ENDPOINT;
  const project = process.env.APPWRITE_PROJECT_ID;
  if (!endpoint || !project) throw new Error("Appwrite is not configured");
  const instance = new Client().setEndpoint(endpoint).setProject(project);
  if (session) instance.setSession(session);
  return instance;
}

export function adminDatabases() {
  const key = process.env.APPWRITE_API_KEY;
  if (!key) throw new Error("Appwrite server key is not configured");
  return new Databases(client().setKey(key));
}

export async function currentUser() {
  const session = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!session) return null;
  try {
    const sdk = client(session);
    const user = await new Account(sdk).get();
    return { user, databases: new Databases(sdk) };
  } catch {
    return null;
  }
}

export async function memberData() {
  const identity = await currentUser();
  if (!identity) return null;
  const { user, databases } = identity;
  // Every query also filters by owner; Appwrite document permissions provide a second boundary.
  const ids = ["members", "savings_accounts", "shares", "loans", "transactions", "notifications", "member_requests"] as const;
  const results = await Promise.all(ids.map(async id =>
    databases.listDocuments({ databaseId: DB, collectionId: id, queries: [Query.equal("userId", user.$id), Query.limit(100)] })
  ));
  return { user, ...Object.fromEntries(ids.map((id, i) => [id, results[i].documents])) } as {
    user: typeof user;
    members: PortalDocument[];
    savings_accounts: PortalDocument[];
    shares: PortalDocument[];
    loans: PortalDocument[];
    transactions: PortalDocument[];
    notifications: PortalDocument[];
    member_requests: PortalDocument[];
  };
}
