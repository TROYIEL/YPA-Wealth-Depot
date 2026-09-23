import Link from "next/link";
import { listContent, mediaUrl } from "@/lib/staff";
export default async function LatestUpdates() {
  let entries;
  try { entries = (await listContent(true)).slice(0,3); } catch { return null; }
  if (!entries.length) return null;
  return <section className="bg-slate-50 py-20"><div className="mx-auto max-w-7xl px-6"><div className="flex flex-wrap items-center justify-between gap-4"><h2 className="text-3xl font-bold text-slate-900">Latest updates</h2><Link href="/news" className="font-semibold text-blue-700">All updates →</Link></div><div className="mt-8 grid gap-6 md:grid-cols-3">{entries.map(e=><Link href={`/news/${e.slug}`} key={e.$id} className="overflow-hidden rounded-2xl bg-white shadow-sm">{e.coverFileId && <img src={mediaUrl(String(e.coverFileId))} alt="" className="h-48 w-full object-cover" />}<div className="p-6"><span className="text-sm uppercase text-blue-700">{String(e.category)}</span><h3 className="mt-2 text-xl font-bold text-slate-900">{String(e.title)}</h3><p className="mt-2 line-clamp-3 text-slate-600">{String(e.summary)}</p></div></Link>)}</div></div></section>;
}
