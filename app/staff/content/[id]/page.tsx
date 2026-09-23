import { notFound } from "next/navigation";
import { adminDatabases, DB } from "@/lib/portal";
import { requireStaff } from "@/lib/staff";
import ContentForm from "@/components/staff/ContentForm";
export default async function EditContent({ params }: { params: Promise<{ id: string }> }) {
  await requireStaff("content");
  const { id } = await params;
  let entry;
  try { entry = await adminDatabases().getDocument({ databaseId: DB, collectionId: "site_content", documentId: id }); } catch { notFound(); }
  return <><h1 className="mb-6 text-3xl font-bold">Edit content</h1><ContentForm entry={{ $id: entry.$id, title: String(entry.title), slug: String(entry.slug), summary: String(entry.summary), body: String(entry.body), category: String(entry.category), status: String(entry.status), eventDate: String(entry.eventDate || ""), coverFileId: String(entry.coverFileId || "") }} /></>;
}
