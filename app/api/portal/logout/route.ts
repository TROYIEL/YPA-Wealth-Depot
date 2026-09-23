import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sessionClient, sessionName } from '@/lib/portal/appwrite';
import { errorMessage, sameOrigin } from '@/lib/portal/security';
export async function POST(request: Request) {
  if (!sameOrigin(request)) return errorMessage('Invalid request origin.', 403);
  const secret = (await cookies()).get(sessionName)?.value;
  if (secret) await sessionClient(secret).account.deleteSession({ sessionId: 'current' }).catch(() => {});
  const response = NextResponse.json({ success: true });
  response.cookies.delete(sessionName);
  return response;
}
