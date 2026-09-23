import type { Metadata } from "next";
export const metadata: Metadata = { title: "Member portal", robots: { index: false, follow: false } };
export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return <div className="relative z-[70] min-h-screen bg-slate-50">{children}</div>;
}
