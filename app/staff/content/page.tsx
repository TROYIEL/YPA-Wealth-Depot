import Link from "next/link";
import { listContent, mediaUrl, requireStaff } from "@/lib/staff";

export const dynamic = "force-dynamic";
export default async function ContentManager({ searchParams }: { searchParams: Promise<{ result?: string }> }) {
  await requireStaff("content");
  const entries = await listContent();
  const { result } = await searchParams;
  return <><div className="flex flex-wrap items-center justify-between gap-4"><div><h1 className="text-3xl font-bold">Website content</h1><p className="mt-2 text-slate-600">Write news, blogs and events. Drafts stay off the public site.</p></div><Link href="/staff/content/new" className="rounded-lg bg-blue-800 px-5 py-3 font-semibold text-white">Create content</Link></div>{result && <p role="status" className="mt-5 rounded-lg bg-blue-50 p-3">{result === "saved" ? "Content saved." : "The content could not be saved. Check the fields and try again."}</p>}<div className="mt-7 grid gap-4">{entries.map(e=><Link key={e.$id} href={`/staff/content/${e.$id}`} className="flex flex-wrap items-center gap-5 rounded-2xl bg-white p-5 shadow-sm hover:ring-2 hover:ring-blue-500">{e.coverFileId && <img src={mediaUrl(String(e.coverFileId))} alt="" className="h-20 w-28 rounded-lg object-cover" />}<div className="flex-1"><h2 className="text-xl font-bold">{String(e.title)}</h2><p className="text-sm text-slate-600">{String(e.category)} · {String(e.status)} · {new Date(e.$createdAt).toLocaleDateString("en-UG")}</p></div><span className="text-blue-700">Edit →</span></Link>)}{!entries.length && <div className="rounded-xl bg-white p-8 text-slate-600">No content yet. Create the first article or event.</div>}</div></>;
}
