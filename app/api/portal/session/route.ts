import { NextRequest, NextResponse } from "next/server";
import { Account } from "node-appwrite";
import { client, SESSION_COOKIE } from "@/lib/portal";

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const email = String(form.get("email") || "").trim();
  const password = String(form.get("password") || "");
  if (!email || !password) return NextResponse.redirect(new URL("/portal/login?error=credentials", request.url), 303);
  try {
    const session = await new Account(client()).createEmailPasswordSession({ email, password });
    const response = NextResponse.redirect(new URL("/portal", request.url), 303);
    response.cookies.set(SESSION_COOKIE, session.secret, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", expires: new Date(session.expire) });
    return response;
  } catch (error) {
    const code = error instanceof Error && error.message === "Appwrite is not configured" ? "config" : "credentials";
    return NextResponse.redirect(new URL(`/portal/login?error=${code}`, request.url), 303);
  }
}

export async function DELETE(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/portal/login", request.url), 303);
  const session = request.cookies.get(SESSION_COOKIE)?.value;
  response.cookies.delete(SESSION_COOKIE);
  if (session) {
    try { await new Account(client(session)).deleteSession({ sessionId: "current" }); } catch { /* revoke local cookie even if remote session expired */ }
  }
  return response;
}
