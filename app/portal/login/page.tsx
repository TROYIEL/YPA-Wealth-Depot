import { redirect } from "next/navigation";
import { currentUser } from "@/lib/portal";
import Link from "next/link";
export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  if (await currentUser()) redirect("/portal");
  const { error } = await searchParams;
  return <div className="flex min-h-screen items-center justify-center p-6"><div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
    <Link href="/" className="text-sm text-blue-700">← YPA Wealth Depot</Link>
    <h1 className="mt-8 text-3xl font-bold text-slate-900">Member sign in</h1>
    <p className="mt-2 text-slate-600">Use the account provided by YPA SACCO.</p>
    {error && <p role="alert" className="mt-5 rounded-lg bg-red-50 p-3 text-red-700">{error === "config" ? "The portal is not configured. Contact YPA." : "Sign in failed. Check your email and password."}</p>}
    <form action="/api/portal/session" method="post" className="mt-8 space-y-5">
      <label className="block text-sm font-medium text-slate-700">Email<input name="email" type="email" autoComplete="email" required className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3" /></label>
      <label className="block text-sm font-medium text-slate-700">Password<input name="password" type="password" autoComplete="current-password" required className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3" /></label>
      <button className="w-full rounded-xl bg-blue-800 px-5 py-3 font-semibold text-white hover:bg-blue-700">Sign in</button>
    </form>
    <p className="mt-6 text-sm text-slate-500">Need access or a password reset? Contact your branch.</p>
  </div></div>;
}
