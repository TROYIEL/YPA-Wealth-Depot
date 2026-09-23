import { NextRequest, NextResponse } from "next/server";
import { ID, Permission, Role, Query } from "node-appwrite";
import { currentUser, adminDatabases, DB } from "@/lib/portal";

export async function POST(request: NextRequest) {
  const identity = await currentUser();
  if (!identity) return NextResponse.redirect(new URL("/portal/login", request.url), 303);
  const form = await request.formData();
  const amount = Number(form.get("amount"));
  const method = String(form.get("method") || "");
  const details = String(form.get("details") || "").trim();
  if (!Number.isSafeInteger(amount) || amount <= 0 || !["mobile", "bank"].includes(method) || !details || details.length > 500)
    return NextResponse.redirect(new URL("/portal?request=error", request.url), 303);
  try {
    const record = await identity.databases.listDocuments({ databaseId: DB, collectionId: "members", queries: [
      // A server-side membership link must exist before member requests are accepted.
      Query.equal("userId", identity.user.$id), Query.limit(1),
    ] });
    if (!record.documents.length) throw new Error("Member not linked");
    await adminDatabases().createDocument({ databaseId: DB, collectionId: "member_requests", documentId: ID.unique(), data: { userId: identity.user.$id, amount, method, details, status: "pending" }, permissions: [Permission.read(Role.user(identity.user.$id))] });
    return NextResponse.redirect(new URL("/portal?request=sent", request.url), 303);
  } catch { return NextResponse.redirect(new URL("/portal?request=error", request.url), 303); }
}
