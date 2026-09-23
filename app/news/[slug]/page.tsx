import Link from "next/link";
import { notFound } from "next/navigation";
import { Query } from "node-appwrite";
import { adminDatabases, DB } from "@/lib/portal";
import { mediaUrl } from "@/lib/staff";

export const dynamic = "force-dynamic";
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) notFound();
  let entry;
  try {
    const result = await adminDatabases().listDocuments({ databaseId: DB, collectionId: "site_content", queries: [Query.equal("slug",slug), Query.equal("status","published"), Query.limit(1)] });
    entry = result.documents[0];
  } catch { notFound(); }
  if (!entry) notFound();
  return <article className="min-h-screen bg-white pb-20 pt-40 text-slate-900"><div className="mx-auto max-w-4xl px-6"><Link href="/news" className="font-semibold text-blue-700">← Back to news</Link><p className="mt-10 text-sm font-bold uppercase tracking-wider text-blue-700">{String(entry.category)}</p><h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">{String(entry.title)}</h1>{entry.category === "event" && entry.eventDate && <p className="mt-4 text-lg font-medium">Event date: {String(entry.eventDate)}</p>}<p className="mt-5 text-xl text-slate-600">{String(entry.summary)}</p>{entry.coverFileId && <img src={mediaUrl(String(entry.coverFileId))} alt="" className="mt-10 max-h-[34rem] w-full rounded-2xl object-cover" />}<div className="mt-12 space-y-6 text-lg leading-8 text-slate-700">{String(entry.body).split(/\n\s*\n/).map((paragraph,i)=><p key={i} className="whitespace-pre-line">{paragraph}</p>)}</div></div></article>;
}
