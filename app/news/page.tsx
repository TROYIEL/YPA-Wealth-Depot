import Link from "next/link";
import { listContent, mediaUrl } from "@/lib/staff";

export const dynamic = "force-dynamic";
export default async function NewsPage() {
  let entries: Awaited<ReturnType<typeof listContent>>;
  try { entries = await listContent(true); } catch { entries = []; }
  return <div className="min-h-screen bg-slate-50 pb-20 pt-40 text-slate-900"><div className="mx-auto max-w-7xl px-6"><p className="font-semibold uppercase tracking-widest text-blue-700">YPA Wealth Depot</p><h1 className="mt-3 text-5xl font-bold">News, blogs & events</h1><p className="mt-4 max-w-2xl text-lg text-slate-600">Official stories and upcoming events from YPA Wealth Depot.</p><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{entries.map(e=><Link key={e.$id} href={`/news/${e.slug}`} className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-xl">{e.coverFileId && <img src={mediaUrl(String(e.coverFileId))} alt="" className="h-56 w-full object-cover" />}<div className="p-6"><span className="text-sm font-semibold uppercase text-blue-700">{String(e.category)}</span><h2 className="mt-2 text-2xl font-bold">{String(e.title)}</h2><p className="mt-3 line-clamp-3 text-slate-600">{String(e.summary)}</p>{e.category === "event" && e.eventDate && <p className="mt-4 text-sm font-medium">Event: {String(e.eventDate)}</p>}</div></Link>)}{!entries.length && <p className="col-span-full rounded-2xl bg-white p-8 text-slate-600">No published updates yet.</p>}</div></div></div>;
}
