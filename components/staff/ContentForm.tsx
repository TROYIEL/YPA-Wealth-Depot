import { mediaUrl } from "@/lib/staff";
import MediaUploader from "./MediaUploader";

type Entry = { $id: string; title: string; slug: string; summary: string; body: string; category: string; status: string; eventDate?: string; coverFileId?: string };
export default function ContentForm({ entry }: { entry?: Entry }) {
  return <div className="grid gap-7 lg:grid-cols-[2fr_1fr]"><form id="content-form" action="/api/staff/content" method="post" className="space-y-5 rounded-2xl bg-white p-6 shadow-sm">
    {entry && <input type="hidden" name="id" value={entry.$id} />}
    <label className="block font-medium">Title<input required maxLength={180} name="title" defaultValue={entry?.title} className="mt-1 w-full rounded-lg border p-3" /></label>
    <label className="block font-medium">URL slug<input required pattern="[a-z0-9]+(?:-[a-z0-9]+)*" maxLength={120} name="slug" defaultValue={entry?.slug} placeholder="annual-general-meeting" className="mt-1 w-full rounded-lg border p-3" /></label>
    <label className="block font-medium">Category<select name="category" defaultValue={entry?.category || "news"} className="mt-1 w-full rounded-lg border p-3"><option value="news">News</option><option value="blog">Blog</option><option value="event">Event</option></select></label>
    <label className="block font-medium">Summary<textarea required name="summary" maxLength={500} defaultValue={entry?.summary} rows={3} className="mt-1 w-full rounded-lg border p-3" /></label>
    <label className="block font-medium">Body (plain text; blank lines start paragraphs)<textarea required name="body" maxLength={16000} defaultValue={entry?.body} rows={14} className="mt-1 w-full rounded-lg border p-3" /></label>
    <label className="block font-medium">Event date (events only)<input type="date" name="eventDate" defaultValue={entry?.eventDate?.slice(0,10)} className="mt-1 w-full rounded-lg border p-3" /></label>
    <label className="block font-medium">Cover image file ID<input name="coverFileId" maxLength={36} defaultValue={entry?.coverFileId} placeholder="Upload an image in the panel" className="mt-1 w-full rounded-lg border p-3" /></label>
    <div className="flex gap-3"><button name="status" value="draft" className="rounded-lg border border-blue-700 px-5 py-3 font-semibold text-blue-800">Save draft</button><button name="status" value="published" className="rounded-lg bg-blue-800 px-5 py-3 font-semibold text-white">Publish</button></div>
  </form><aside className="h-fit rounded-2xl bg-white p-6 shadow-sm"><h2 className="text-lg font-bold">Images</h2><p className="mt-2 text-sm text-slate-600">Upload a JPG, PNG or WebP up to 5 MB. Use only approved public images.</p><MediaUploader />{entry?.coverFileId && <img className="mt-4 w-full rounded-xl object-cover" src={mediaUrl(entry.coverFileId)} alt="Current cover" />}</aside></div>;
}
