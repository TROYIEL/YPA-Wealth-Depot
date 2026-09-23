import { currentMember } from '@/lib/portal/appwrite';
import { getMemberSummary } from '@/lib/portal/loandisk';
import { errorMessage } from '@/lib/portal/security';
export const dynamic = 'force-dynamic';
export async function GET() {
  const member = await currentMember();
  if (!member) return errorMessage('Please sign in.', 401);
  try {
    const summary = await getMemberSummary(member.profile.memberId);
    return Response.json({ summary }, { headers: { 'Cache-Control': 'private, no-store' } });
  } catch { return errorMessage('LoanDisk information is temporarily unavailable.', 503); }
}
