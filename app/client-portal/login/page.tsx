'use client';
import { FormEvent, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Eye, EyeOff, LockKeyhole, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ClientLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [recovery, setRecovery] = useState(false);
  async function submit(event: FormEvent) {
    event.preventDefault(); setLoading(true); setMessage('');
    try {
      const response = await fetch(recovery ? '/api/portal/request-access' : '/api/portal/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(recovery ? { email } : { email, password }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      if (recovery) setMessage(data.message);
      else { router.push('/client-portal'); router.refresh(); }
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Please try again.'); }
    finally { setLoading(false); }
  }
  return <div className="min-h-screen bg-[#f4f7fb] pt-36 pb-20 px-5">
    <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_80px_rgba(15,45,90,.12)] lg:grid-cols-2">
      <div className="relative flex flex-col justify-between overflow-hidden bg-[#0b3272] p-9 text-white sm:p-12">
        <div className="absolute -right-24 top-20 h-80 w-80 rounded-full border border-white/15" />
        <div className="absolute -right-10 top-40 h-80 w-80 rounded-full border border-white/10" />
        <div className="relative"><div className="flex items-center gap-3"><Image src="/nav icon2.png" alt="YPA Wealth Depot" width={140} height={48} className="h-12 w-auto rounded-lg bg-white p-1" /><span className="text-xs font-semibold uppercase tracking-[.2em] text-blue-100">Member access</span></div>
          <h1 className="mt-20 max-w-sm text-4xl font-bold leading-tight sm:text-5xl">Your finances, in one secure place.</h1>
          <p className="mt-6 max-w-sm text-blue-100">View your membership, follow your loans and send withdrawal requests whenever you need to.</p></div>
        <div className="relative mt-24 flex items-start gap-3 rounded-2xl border border-white/20 bg-white/10 p-5 text-sm text-blue-50"><ShieldCheck className="shrink-0" />Only approved members can see their account information.</div>
      </div>
      <div className="flex flex-col justify-center p-8 sm:p-14">
        <span className="text-xs font-bold uppercase tracking-[.2em] text-sky-600">YPA Client Portal</span>
        <h2 className="mt-3 text-3xl font-bold text-slate-900">{recovery ? 'Activate or reset access' : 'Welcome back'}</h2>
        <p className="mt-3 text-sm leading-6 text-slate-500">{recovery ? 'Enter the email address registered with YPA. New members must first be invited by an administrator.' : 'Sign in with the email and password you created from your invitation.'}</p>
        <form onSubmit={submit} className="mt-9 space-y-5">
          <label className="block text-sm font-semibold text-slate-700">Email address<input type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-normal outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100" /></label>
          {!recovery && <label className="block text-sm font-semibold text-slate-700">Password<div className="relative mt-2"><input type={visible ? 'text' : 'password'} autoComplete="current-password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pr-12 font-normal outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100" /><button type="button" onClick={() => setVisible(!visible)} aria-label={visible ? 'Hide password' : 'Show password'} className="absolute right-4 top-3.5 text-slate-500">{visible ? <EyeOff size={20} /> : <Eye size={20} />}</button></div></label>}
          {message && <p role="status" className="rounded-xl bg-blue-50 p-4 text-sm text-blue-900">{message}</p>}
          <button disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1459bf] px-5 py-4 font-semibold text-white transition hover:bg-[#0b3272] disabled:opacity-50">{loading ? 'Please wait…' : recovery ? 'Send activation link' : 'Sign in'}<ArrowRight size={18} /></button>
        </form>
        <button onClick={() => { setRecovery(!recovery); setMessage(''); }} className="mt-6 text-left text-sm font-semibold text-blue-700 hover:underline">{recovery ? 'Back to sign in' : 'Need to activate your account or reset your password?'}</button>
        <div className="mt-10 border-t border-slate-100 pt-6 text-sm text-slate-500"><LockKeyhole size={16} className="mr-2 inline text-blue-700" />New member? Contact YPA to confirm your membership and receive an invitation. <Link href="/contact" className="font-semibold text-blue-700 hover:underline">Contact us</Link></div>
      </div>
    </div>
  </div>;
}
