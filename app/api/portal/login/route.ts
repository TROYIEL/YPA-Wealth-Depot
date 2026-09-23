import { NextResponse } from 'next/server';
import { adminClient, databaseId, profilesId, sessionName, sessionClient, publicAccount } from '@/lib/portal/appwrite';
import { errorMessage, sameOrigin } from '@/lib/portal/security';

export async function POST(request: Request) {
  if (!sameOrigin(request)) return errorMessage('Invalid request origin.', 403);
  try {
    const { email, password } = await request.json();
    if (typeof email !== 'string' || typeof password !== 'string' || !email.includes('@') || !password) return errorMessage('Enter your email and password.', 400);
    const session = await publicAccount().createEmailPasswordSession({ email, password });
    try {
      const user = await sessionClient(session.secret).account.get();
      const profile = await adminClient().databases.getDocument(databaseId(), profilesId(), user.$id);
      if (profile.status !== 'active' || !profile.memberId || profile.email?.toLowerCase() !== user.email.toLowerCase()) throw new Error('Not approved');
    } catch {
      await sessionClient(session.secret).account.deleteSession({ sessionId: 'current' }).catch(() => {});
      return errorMessage('Your member account is not activated. Contact YPA support.', 403);
    }
    const response = NextResponse.json({ success: true });
    response.cookies.set(sessionName, session.secret, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/', expires: new Date(session.expire) });
    return response;
  } catch { return errorMessage('Email or password is incorrect.', 401); }
}
