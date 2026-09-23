'use client';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowDownToLine, ArrowRight, Clock3, Landmark, LogOut, RefreshCw, ShieldCheck, Wallet, X } from 'lucide-react';
import type { MemberSummary } from '@/lib/portal/loandisk';
type Withdrawal = { id: string; amount: number; method: string; status: string; createdAt: string };
const money = (amount: number, currency = 'UGX') => `${currency} ${amount.toLocaleString('en-UG')}`;
export default function PortalDashboard({ name }: { name: string }) {
  const router = useRouter();
  const [summary, setSummary] = useState<MemberSummary | null>(null);
  const [dataError, setDataError] = useState('');
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState<Withdrawal[]>([]);
  const [requestsError, setRequestsError] = useState('');
  const [modal, setModal] = useState(false);
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('mobile');
  const [destination, setDestination] = useState('');
  const [note, setNote] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [busy, setBusy] = useState(false);
  const load = useCallback(async () => {
    setLoading(true); setDataError('');
    try { const r = await fetch('/api/portal/summary', { cache: 'no-store' }); const d = await r.json(); if (!r.ok) throw new Error(d.message); setSummary(d.summary); } catch (e) { setDataError(e instanceof Error ? e.message : 'Account details unavailable.'); setSummary(null); }
    try { const r = await fetch('/api/portal/withdrawals', { cache: 'no-store' }); const d = await r.json(); if (!r.ok) throw new Error(d.message); setRequests(d.requests); setRequestsError(''); } catch { setRequestsError('Requests are temporarily unavailable.'); }
    setLoading(false);
  }, []);
  useEffect(() => { void load(); }, [load]);
  async function logout() { await fetch('/api/portal/logout', { method: 'POST' }); router.replace('/client-portal/login'); router.refresh(); }
  async function submit(e: FormEvent) {
    e.preventDefault(); setBusy(true); setSubmitError('');
    try {
      const response = await fetch('/api/portal/withdrawals', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ amount: Number(amount), method, destination, note }) });
      const data = await response.json(); if (!response.ok) throw new Error(data.message);
      setModal(false); setAmount(''); setDestination(''); setNote(''); await load();
    } catch (error) { setSubmitError(error instanceof Error ? error.message : 'Please try again.'); }
    finally { setBusy(false); }
  }
  return <div className="min-h-screen bg-[#f4f7fb] px-5 pb-24 pt-36"><div className="mx-auto max-w-6xl">
    <div className="flex flex-wrap items-start justify-between gap-5"><div><span className="text-xs font-bold uppercase tracking-[.2em] text-blue-700">Client Portal</span><h1 className="mt-2 text-3xl font-bold text-[#122d55] sm:text-4xl">Welcome, {name}</h1><p className="mt-2 text-slate-600">Your membership at a glance.</p></div><div className="flex gap-2"><button onClick={() => void load()} aria-label="Refresh account" className="rounded-xl border border-slate-200 bg-white p-3 text-slate-700 hover:bg-slate-50"><RefreshCw size={20} /></button><button onClick={() => void logout()} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50"><LogOut size={18} />Sign out</button></div></div>
    <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900"><ShieldCheck size={18} className="mr-2 inline" />Withdrawal requests are reviewed by YPA staff. Submitting a request does not transfer funds.</div>
    {dataError && <div role="alert" className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900">{dataError}</div>}
    {!loading && !summary && !dataError && <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 text-slate-700">Live balance, shares and loan details will appear here when the LoanDisk connection is configured.</div>}
    <div className="mt-6 grid gap-4 md:grid-cols-3"><Metric icon={<Wallet />} label="Savings balance" value={summary ? money(summary.savingsBalance, summary.currency) : '—'} hint={summary?.asOf ? `Updated ${summary.asOf}` : 'Live LoanDisk information'} /><Metric icon={<Landmark />} label="Shares" value={summary ? summary.shares.toLocaleString('en-UG') : '—'} hint="Your current holdings" /><Metric icon={<Clock3 />} label="Active loans" value={summary ? String(summary.loans.filter(l => l.status.toLowerCase() === 'active').length) : '—'} hint="View details below" /></div>
    <div className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_.85fr]"><div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold text-[#122d55]">Your loans</h2><p className="mt-1 text-sm text-slate-500">Balances and repayment dates from LoanDisk.</p><div className="mt-6 divide-y divide-slate-100">{summary?.loans.length ? summary.loans.map(loan => <div key={loan.id} className="flex flex-wrap items-center justify-between gap-3 py-5"><div><p className="font-semibold text-slate-800">{loan.name}</p><p className="mt-1 text-sm text-slate-500">{loan.nextPayment ? `Next payment: ${loan.nextPayment}` : 'No payment date available'}</p></div><div className="text-right"><p className="font-bold text-slate-900">{money(loan.outstanding, summary.currency)}</p><span className="text-xs font-semibold uppercase text-blue-700">{loan.status}</span></div></div>) : <p className="py-8 text-sm text-slate-500">{summary ? 'No loans on your account.' : 'Loan details are not available yet.'}</p>}</div></div>
    <div className="rounded-3xl bg-[#0b3272] p-7 text-white shadow-sm"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15"><ArrowDownToLine /></div><h2 className="mt-5 text-xl font-bold">Need to withdraw?</h2><p className="mt-3 text-sm leading-6 text-blue-100">Send a request to YPA for review. You can follow its status in your request history.</p><button onClick={() => setModal(true)} className="mt-8 flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-[#0b3272] hover:bg-blue-50">Request withdrawal <ArrowRight size={18} /></button></div></div>
    <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold text-[#122d55]">Withdrawal requests</h2><p className="mt-1 text-sm text-slate-500">Requests and their review status.</p>{requestsError && <p role="alert" className="mt-4 text-sm text-amber-800">{requestsError}</p>}<div className="mt-5 divide-y divide-slate-100">{requests.length ? requests.map(item => <div key={item.id} className="flex flex-wrap items-center justify-between gap-3 py-4 text-sm"><div><p className="font-semibold text-slate-800">{money(item.amount)}</p><p className="mt-1 text-slate-500">{new Date(item.createdAt).toLocaleDateString('en-UG')} · {item.method === 'mobile' ? 'Mobile money' : 'Bank transfer'}</p></div><span className="rounded-full bg-amber-50 px-3 py-1 font-semibold capitalize text-amber-800">{item.status}</span></div>) : <p className="py-6 text-sm text-slate-500">No withdrawal requests yet.</p>}</div></div>
  </div>
  {modal && <div role="presentation" className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/65 px-5 py-8"><div role="dialog" aria-modal="true" aria-labelledby="withdraw-title" className="max-h-full w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-7 shadow-2xl"><div className="flex justify-between gap-4"><div><h2 id="withdraw-title" className="text-2xl font-bold text-[#122d55]">Request a withdrawal</h2><p className="mt-2 text-sm text-slate-500">YPA will review and contact you before any payment.</p></div><button aria-label="Close" onClick={() => setModal(false)} className="self-start rounded-lg p-2 hover:bg-slate-100"><X /></button></div><form onSubmit={submit} className="mt-6 space-y-4"><label className="block text-sm font-semibold">Amount (UGX)<input required type="number" min="1000" max="1000000000" step="1" value={amount} onChange={e => setAmount(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 p-3" /></label><label className="block text-sm font-semibold">Payment method<select value={method} onChange={e => setMethod(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 p-3"><option value="mobile">Mobile money</option><option value="bank">Bank transfer</option></select></label><label className="block text-sm font-semibold">{method === 'mobile' ? 'Network, registered name and phone number' : 'Bank name, account name and account number'}<textarea required minLength={8} maxLength={180} value={destination} onChange={e => setDestination(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 p-3" rows={2} /></label><label className="block text-sm font-semibold">Reason (optional)<textarea maxLength={500} value={note} onChange={e => setNote(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 p-3" rows={2} /></label>{submitError && <p role="alert" className="text-sm text-red-700">{submitError}</p>}<button disabled={busy} className="w-full rounded-xl bg-blue-700 p-4 font-semibold text-white disabled:opacity-50">{busy ? 'Submitting…' : 'Submit request'}</button></form></div></div>}
  </div>;
}
function Metric({ icon, label, value, hint }: { icon: React.ReactNode; label: string; value: string; hint: string }) { return <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">{icon}</div><p className="mt-5 text-sm font-medium text-slate-500">{label}</p><p className="mt-2 text-2xl font-bold text-[#122d55]">{value}</p><p className="mt-2 text-xs text-slate-500">{hint}</p></div>; }
