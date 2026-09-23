import { Query } from 'node-appwrite';
import { adminClient, databaseId, profilesId, publicAccount } from '@/lib/portal/appwrite';
import { errorMessage, sameOrigin } from '@/lib/portal/security';
export async function POST(request: Request) {
  if (!sameOrigin(request)) return errorMessage('Invalid request origin.', 403);
  try {
    const data = await request.json();
    if (typeof data.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 254) return errorMessage('Enter a valid email address.', 400);
    // Avoid disclosing whether a particular email is a member.
    const admin = adminClient();
    const matches = await admin.users.list({ queries: [Query.equal('email', data.email.toLowerCase()), Query.limit(1)] });
    const user = matches.users[0];
    if (user) {
      const profile = await admin.databases.getDocument(databaseId(), profilesId(), user.$id).catch(() => null);
      if (profile?.status === 'active' && profile.email?.toLowerCase() === user.email.toLowerCase()) {
        await publicAccount().createRecovery({ email: user.email, url: `${new URL(request.url).origin}/client-portal/activate` }).catch(() => {});
      }
    }
    return Response.json({ message: 'If this address has an account, an email will arrive shortly. For a new account, contact YPA to verify your membership.' });
  } catch { return errorMessage('Please try again later.', 503); }
}
