import { ID, Permission, Query, Role } from 'node-appwrite';
import { adminClient, currentMember, databaseId, withdrawalsId } from '@/lib/portal/appwrite';
import { errorMessage, sameOrigin } from '@/lib/portal/security';
export const dynamic = 'force-dynamic';
export async function GET() {
  const member = await currentMember();
  if (!member) return errorMessage('Please sign in.', 401);
  try {
    const records = await adminClient().databases.listDocuments({ databaseId: databaseId(), collectionId: withdrawalsId(), queries: [Query.equal('userId', member.user.$id), Query.orderDesc('$createdAt'), Query.limit(50)] });
    return Response.json({ requests: records.documents.map(item => ({ id: item.$id, amount: item.amount, method: item.method, status: item.status, createdAt: item.$createdAt })) }, { headers: { 'Cache-Control': 'no-store' } });
  } catch { return errorMessage('Requests are temporarily unavailable.', 503); }
}
export async function POST(request: Request) {
  if (!sameOrigin(request)) return errorMessage('Invalid request origin.', 403);
  const member = await currentMember();
  if (!member) return errorMessage('Please sign in.', 401);
  try {
    const data = await request.json();
    const amount = Number(data.amount);
    if (!Number.isSafeInteger(amount) || amount < 1000 || amount > 1000000000 || !['mobile', 'bank'].includes(data.method) || typeof data.destination !== 'string' || data.destination.trim().length < 8 || data.destination.length > 180 || typeof data.note !== 'string' || data.note.length > 500) return errorMessage('Check the amount and payment details.', 400);
    const record = await adminClient().databases.createDocument({ databaseId: databaseId(), collectionId: withdrawalsId(), documentId: ID.unique(), data: { userId: member.user.$id, memberId: member.profile.memberId, amount, method: data.method, destination: data.destination.trim(), note: data.note.trim(), status: 'pending' }, permissions: [Permission.read(Role.user(member.user.$id))] });
    return Response.json({ id: record.$id, status: 'pending' }, { status: 201 });
  } catch { return errorMessage('Could not submit the request. Please try again.', 503); }
}
