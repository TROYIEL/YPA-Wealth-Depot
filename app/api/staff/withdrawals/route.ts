import { NextRequest, NextResponse } from "next/server";
import { adminDatabases, currentUser, DB } from "@/lib/portal";
import { allowed, audit } from "@/lib/staff";

export async function POST(request: NextRequest) {
  const identity = await currentUser();
  if (!identity) return new NextResponse("Unauthorized", { status: 401 });
  const { user } = identity;
  if (!allowed(user.labels || [],"withdrawals")) return new NextResponse("Forbidden", { status: 403 });
  const form = await request.formData();
  const id = String(form.get("id") || "");
  const status = String(form.get("status") || "");
  const note = String(form.get("note") || "").trim();
  if (!/^[\w.-]{1,36}$/.test(id) || !["approved", "rejected"].includes(status) || !note || note.length > 500) return new NextResponse("Invalid request", { status: 400 });
  try {
    const db = adminDatabases();
    const item = await db.getDocument({ databaseId: DB, collectionId: "member_requests", documentId: id });
    if (item.status !== "pending") return new NextResponse("This request was already decided. Refresh the page.", { status: 409 });
    // Audit first: if logging is unavailable, do not change a financial request.
    await audit(user, `withdrawal.${status}`, id, `Member ${item.userId}; UGX ${item.amount}; note: ${note}`);
    await db.updateDocument({ databaseId: DB, collectionId: "member_requests", documentId: id, data: { status, decisionNote: note, decidedBy: user.$id, decidedAt: new Date().toISOString() } });
    return NextResponse.redirect(new URL("/staff/withdrawals?result=saved", request.url), 303);
  } catch { return NextResponse.redirect(new URL("/staff/withdrawals?result=error", request.url), 303); }
}
