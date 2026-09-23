import ContentForm from "@/components/staff/ContentForm";
import { requireStaff } from "@/lib/staff";
export default async function NewContent() { await requireStaff("content"); return <><h1 className="mb-6 text-3xl font-bold">Create content</h1><ContentForm /></>; }
