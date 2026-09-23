import type { Metadata } from "next";
import Link from "next/link";
import { requireStaff, allowed } from "@/lib/staff";

export const metadata: Metadata = { title: "Staff workspace", robots: { index: false, follow: false } };
export default async function StaffLayout({ children }: { children: React.ReactNode }) {
  const { user, labels } = await requireStaff();
  return <div className="relative z-[70] min-h-screen bg-slate-100 text-slate-900"><header className="border-b bg-white px-6 py-4"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4"><div><Link href="/staff" className="text-xl font-bold text-blue-900">YPA Staff</Link><p className="text-xs text-slate-500">Internal workspace · {user.email}</p></div><nav className="flex flex-wrap gap-4 text-sm font-semibold"><Link href="/staff">Overview</Link>{allowed(labels,"withdrawals") && <Link href="/staff/withdrawals">Withdrawals</Link>}{allowed(labels,"content") && <Link href="/staff/content">Website content</Link>}{allowed(labels,"logs") && <Link href="/staff/logs">Activity logs</Link>}<Link href="/portal">Member view</Link><form action="/api/portal/signout" method="post"><button>Sign out</button></form></nav></div></header><main className="mx-auto max-w-7xl p-6">{children}</main></div>;
}
