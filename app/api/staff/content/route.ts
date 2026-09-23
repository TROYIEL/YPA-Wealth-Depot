import { NextRequest, NextResponse } from "next/server";
import { ID, Query } from "node-appwrite";
import { adminDatabases, currentUser, DB } from "@/lib/portal";
import { allowed, audit } from "@/lib/staff";

export async function POST(request: NextRequest) {
  const identity = await currentUser();
  if (!identity) return new NextResponse("Unauthorized", { status: 401 });
  if (!allowed(identity.user.labels || [], "content")) return new NextResponse("Forbidden", { status: 403 });
  const form = await request.formData();
  const id = String(form.get("id") || "");
  const title = String(form.get("title") || "").trim();
  const slug = String(form.get("slug") || "").trim();
  const category = String(form.get("category") || "");
  const summary = String(form.get("summary") || "").trim();
  const body = String(form.get("body") || "").trim();
  const status = String(form.get("status") || "");
  const eventDate = String(form.get("eventDate") || "");
  const coverFileId = String(form.get("coverFileId") || "").trim();
  if ((id && !/^[\w.-]{1,36}$/.test(id)) || !title || title.length > 180 || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug.length > 120 || !["news","blog","event"].includes(category) || !summary || summary.length > 500 || !body || body.length > 16000 || !["draft","published"].includes(status) || (coverFileId && !/^[\w.-]{1,36}$/.test(coverFileId)) || (eventDate && !/^\d{4}-\d{2}-\d{2}$/.test(eventDate))) return new NextResponse("Invalid content", { status: 400 });
  try {
    const db = adminDatabases();
    const duplicates = await db.listDocuments({ databaseId: DB, collectionId: "site_content", queries: [Query.equal("slug",slug), Query.limit(2)] });
    if (duplicates.documents.some(doc => doc.$id !== id)) return new NextResponse("This URL slug is already in use", { status: 409 });
    const data = { title, slug, category, summary, body, status, eventDate, coverFileId, updatedBy: identity.user.$id };
    const documentId = id || ID.unique();
    if (id) await db.updateDocument({ databaseId: DB, collectionId: "site_content", documentId, data });
    else await db.createDocument({ databaseId: DB, collectionId: "site_content", documentId, data });
    await audit(identity.user, id ? "content.updated" : "content.created", documentId, `${category}/${slug}; ${status}`);
    return NextResponse.redirect(new URL("/staff/content?result=saved", request.url), 303);
  } catch { return NextResponse.redirect(new URL("/staff/content?result=error", request.url), 303); }
}
