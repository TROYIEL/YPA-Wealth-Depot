import { publicAccount } from '@/lib/portal/appwrite';
import { errorMessage, sameOrigin } from '@/lib/portal/security';
export async function POST(request: Request) {
  if (!sameOrigin(request)) return errorMessage('Invalid request origin.', 403);
  try {
    const { userId, secret, password } = await request.json();
    if (typeof userId !== 'string' || typeof secret !== 'string' || typeof password !== 'string' || password.length < 12) return errorMessage('Use a password of at least 12 characters.', 400);
    await publicAccount().updateRecovery({ userId, secret, password });
    return Response.json({ success: true });
  } catch { return errorMessage('This link has expired or has already been used. Ask YPA for a new invitation.', 400); }
}
