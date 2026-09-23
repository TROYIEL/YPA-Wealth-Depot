import { redirect } from "next/navigation";
import { memberData } from "@/lib/portal";
import { ArrowDownLeft, ArrowUpRight, Bell, CreditCard, Landmark, PiggyBank, Wallet } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";
const money = (value: unknown) => `UGX ${Number(value || 0).toLocaleString("en-UG")}`;
const date = (value: unknown) => value ? new Date(String(value)).toLocaleDateString("en-UG", { day: "numeric", month: "short", year: "numeric" }) : "—";
const card = "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm";

export default async function Portal({ searchParams }: { searchParams: Promise<{ request?: string }> }) {
  let data;
  try { data = await memberData(); } catch { return <div className="mx-auto max-w-2xl p-12"><h1 className="text-2xl font-bold">Account data is unavailable</h1><p className="mt-3">Ask YPA to check the Appwrite database setup and your access.</p><Link className="mt-6 inline-block text-blue-700" href="/">Return home</Link></div>; }
  if (!data) redirect("/portal/login");
  const { user, members, savings_accounts: savings, shares, loans, transactions, notifications, member_requests: requests } = data;
  const staff = user.labels?.some(label => ["admin", "editor", "finance"].includes(label));
  const linked = members.length > 0;
  const { request } = await searchParams;
  const balance = savings.reduce((sum, row) => sum + Number(row.balance || 0), 0);
  const shareValue = shares.reduce((sum, row) => sum + Number(row.value || 0), 0);
  const outstanding = loans.reduce((sum, row) => sum + Number(row.outstanding || 0), 0);
  return <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 text-slate-900 sm:px-8">
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-7">
      <Link href="/" className="text-xl font-black tracking-tight text-blue-900">YPA <span className="text-sky-600">Wealth Depot</span></Link>
      <div className="flex items-center gap-4"><span className="text-sm text-slate-600">{user.email}</span>{staff && <Link href="/staff" className="text-sm font-semibold text-blue-800">Staff workspace</Link>}<form action="/api/portal/signout" method="post"><button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-white">Sign out</button></form></div>
    </header>
    <div className="mt-10 flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-semibold uppercase tracking-widest text-blue-700">Member portal</p><h1 className="mt-2 text-3xl font-bold sm:text-4xl">Welcome, {user.name || "member"}</h1><p className="mt-2 text-slate-600">Your YPA account records</p><p className="mt-1 text-sm text-amber-800">Balances and loan details are Appwrite records supplied by staff. Live LoanDisk synchronization is pending.</p></div><span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800">{date(new Date().toISOString())}</span></div>
    {!linked && <div role="status" className="mt-7 rounded-xl border border-amber-200 bg-amber-50 p-5 text-amber-900">Your sign in is active, but your membership record has not been linked yet. Contact YPA with your account email; no balances are shown until staff link and verify your records.</div>}
    {request === "sent" && <p role="status" className="mt-7 rounded-xl bg-green-50 p-4 text-green-800">Your request was received. Staff will review it before any payment is made.</p>}
    {request === "error" && <p role="alert" className="mt-7 rounded-xl bg-red-50 p-4 text-red-800">The request could not be submitted. Check the details and try again.</p>}
    <section aria-label="Account summary" className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {[["Savings balance", money(balance), PiggyBank], ["Share value", money(shareValue), Wallet], ["Loan outstanding", money(outstanding), Landmark], ["Active loans", String(loans.filter(x => x.status === "active").length), CreditCard]].map(([title, value, Icon]) => <div key={String(title)} className={card}><div className="flex items-center justify-between"><span className="text-sm text-slate-600">{String(title)}</span><Icon className="h-5 w-5 text-blue-700" /></div><p className="mt-5 text-2xl font-bold">{String(value)}</p></div>)}
    </section>
    <div className="mt-7 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
      <div className="space-y-6">
        <section className={card}><h2 className="text-xl font-bold">Savings accounts</h2><div className="mt-4 divide-y divide-slate-100">{savings.length ? savings.map(a => <div key={a.$id} className="flex justify-between gap-4 py-4"><div><p className="font-semibold">{String(a.name || "Savings")}</p><p className="text-sm text-slate-500">{String(a.accountNumber || "Account number pending")}</p></div><p className="font-bold">{money(a.balance)}</p></div>) : <p className="py-6 text-sm text-slate-500">No savings account linked yet.</p>}</div></section>
        <section className={card}><h2 className="text-xl font-bold">Recent transactions</h2><div className="mt-4 divide-y divide-slate-100">{transactions.length ? [...transactions].sort((a,b) => String(b.occurredAt).localeCompare(String(a.occurredAt))).slice(0, 10).map(t => <div key={t.$id} className="flex items-center gap-3 py-4"><span className="rounded-full bg-blue-50 p-2 text-blue-700">{t.type === "credit" ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />}</span><div className="min-w-0 flex-1"><p className="truncate font-semibold">{String(t.description || t.type || "Transaction")}</p><p className="text-sm text-slate-500">{date(t.occurredAt)}</p></div><p className="font-bold">{t.type === "credit" ? "+" : "−"}{money(t.amount)}</p></div>) : <p className="py-6 text-sm text-slate-500">No transactions recorded yet.</p>}</div></section>
        <section className={card}><h2 className="text-xl font-bold">Loans & shares</h2><div className="mt-4 space-y-3">{loans.map(l => <div key={l.$id} className="rounded-xl bg-slate-50 p-4"><div className="flex justify-between gap-3"><p className="font-semibold">{String(l.product || "Loan")}</p><span className="text-sm capitalize text-slate-600">{String(l.status || "pending")}</span></div><p className="mt-2 text-sm">Outstanding: <strong>{money(l.outstanding)}</strong></p></div>)}{shares.map(s => <div key={s.$id} className="flex justify-between rounded-xl bg-slate-50 p-4"><span>Shares ({Number(s.units || 0).toLocaleString("en-UG")})</span><strong>{money(s.value)}</strong></div>)}{!loans.length && !shares.length && <p className="text-sm text-slate-500">No loans or shares linked yet.</p>}</div></section>
      </div>
      <div className="space-y-6">
        <section className={card}><h2 className="text-xl font-bold">Request a withdrawal</h2><p className="mt-2 text-sm text-slate-600">Requests are reviewed by YPA staff. Submission does not transfer money.</p><form action="/api/portal/requests" method="post" className="mt-5 space-y-4"><label className="block text-sm font-medium">Amount (UGX)<input name="amount" type="number" min="1" step="1" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" /></label><label className="block text-sm font-medium">Payment method<select name="method" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"><option value="mobile">Mobile money</option><option value="bank">Bank transfer</option></select></label><label className="block text-sm font-medium">Phone or bank account details<textarea name="details" maxLength={500} required rows={3} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" /></label><button disabled={!linked} className="w-full rounded-lg bg-blue-800 px-5 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">Submit request</button></form></section>
        <section className={card}><h2 className="text-xl font-bold">My requests</h2><div className="mt-4 space-y-3">{requests.length ? [...requests].sort((a,b) => String(b.$createdAt).localeCompare(String(a.$createdAt))).slice(0,10).map(r => <div key={r.$id} className="rounded-xl bg-slate-50 p-3 text-sm"><div className="flex justify-between gap-3"><div><strong>{money(r.amount)}</strong><p className="text-slate-500">{date(r.$createdAt)}</p></div><span className="capitalize font-semibold text-blue-800">{String(r.status)}</span></div>{Boolean(r.decisionNote) && <p className="mt-2 text-slate-600">Staff note: {String(r.decisionNote)}</p>}</div>) : <p className="text-sm text-slate-500">No requests yet.</p>}</div></section>
        <section className={card}><h2 className="flex items-center gap-2 text-xl font-bold"><Bell size={20} /> Updates</h2><div className="mt-4 space-y-3">{notifications.length ? notifications.slice(0, 8).map(n => <div key={n.$id} className="border-b border-slate-100 pb-3"><p className="font-semibold">{String(n.title)}</p><p className="text-sm text-slate-600">{String(n.message)}</p></div>) : <p className="text-sm text-slate-500">No updates yet.</p>}</div></section>
      </div>
    </div>
  </div>;
}
