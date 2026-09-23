import 'server-only';

export type Loan = { id: string; name: string; outstanding: number; nextPayment?: string; status: string };
export type MemberSummary = { savingsBalance: number; shares: number; currency: string; loans: Loan[]; asOf?: string };

// The endpoint is a bank-controlled proxy or a LoanDisk endpoint confirmed by its API contract.
// It must return the normalized shape below. Never accept a member ID from the browser.
export async function getMemberSummary(memberId: string): Promise<MemberSummary | null> {
  const template = process.env.LOANDISK_MEMBER_ENDPOINT_TEMPLATE;
  const key = process.env.LOANDISK_API_KEY;
  if (!template || !key) return null;
  const url = new URL(template.replace('{memberId}', encodeURIComponent(memberId)));
  if (url.protocol !== 'https:' || !template.includes('{memberId}')) throw new Error('Invalid LoanDisk endpoint configuration');
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${key}`, Accept: 'application/json' },
    cache: 'no-store', redirect: 'error', signal: AbortSignal.timeout(10000),
  });
  if (!response.ok) throw new Error('LoanDisk lookup failed');
  const value: unknown = await response.json();
  if (!value || typeof value !== 'object') throw new Error('Invalid LoanDisk response');
  const data = value as Record<string, unknown>;
  if (typeof data.savingsBalance !== 'number' || typeof data.shares !== 'number' || !Array.isArray(data.loans)) throw new Error('Invalid LoanDisk response');
  const loans = data.loans.map((item: unknown) => {
    if (!item || typeof item !== 'object') throw new Error('Invalid loan record');
    const loan = item as Record<string, unknown>;
    if (typeof loan.id !== 'string' || typeof loan.name !== 'string' || typeof loan.outstanding !== 'number' || typeof loan.status !== 'string') throw new Error('Invalid loan record');
    return { id: loan.id, name: loan.name, outstanding: loan.outstanding, status: loan.status, nextPayment: typeof loan.nextPayment === 'string' ? loan.nextPayment : undefined };
  });
  return { savingsBalance: data.savingsBalance, shares: data.shares, currency: typeof data.currency === 'string' ? data.currency : 'UGX', loans, asOf: typeof data.asOf === 'string' ? data.asOf : undefined };
}
