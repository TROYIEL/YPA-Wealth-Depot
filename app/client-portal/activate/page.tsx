'use client';
import { FormEvent, Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
function ActivationForm() {
  const params = useSearchParams();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [busy, setBusy] = useState(false);
  async function submit(e: FormEvent) {
    e.preventDefault();
    if (password !== confirm) { setMessage('Passwords do not match.'); return; }
    setBusy(true); setMessage('');
    try {
      const response = await fetch('/api/portal/activate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: params.get('userId'), secret: params.get('secret'), password }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setSuccess(true);
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Please try again.'); }
    finally { setBusy(false); }
  }
  return <div className="mx-auto max-w-md rounded-3xl bg-white p-9 shadow-xl"><span className="text-sm font-bold uppercase tracking-widest text-blue-600">YPA Client Portal</span><h1 className="mt-3 text-3xl font-bold">Create your password</h1><p className="mt-3 text-slate-600">Use at least 12 characters. Your invitation link can be used once.</p>
    {success ? <div className="mt-8"><p className="text-green-700">Your password is ready.</p><Link href="/client-portal/login" className="mt-5 inline-block rounded-xl bg-blue-700 px-6 py-3 text-white">Sign in</Link></div> : <form onSubmit={submit} className="mt-8 space-y-4"><input required type="password" minLength={12} autoComplete="new-password" placeholder="New password" value={password} onChange={e => setPassword(e.target.value)} className="w-full rounded-xl border p-3" /><input required type="password" minLength={12} autoComplete="new-password" placeholder="Confirm password" value={confirm} onChange={e => setConfirm(e.target.value)} className="w-full rounded-xl border p-3" />{message && <p role="alert" className="text-sm text-red-700">{message}</p>}<button disabled={busy || !params.get('userId') || !params.get('secret')} className="w-full rounded-xl bg-blue-700 p-4 font-semibold text-white disabled:opacity-50">{busy ? 'Saving…' : 'Set password'}</button></form>}
  </div>;
}
export default function Activate() { return <div className="min-h-screen bg-slate-50 px-5 pb-24 pt-40"><Suspense fallback={<p className="text-center">Loading invitation…</p>}><ActivationForm /></Suspense></div>; }
