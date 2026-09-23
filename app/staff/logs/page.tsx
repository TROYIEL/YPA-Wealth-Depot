import { Query } from "node-appwrite";
import { adminDatabases, DB } from "@/lib/portal";
import { requireStaff } from "@/lib/staff";
export const dynamic = "force-dynamic";
export default async function Logs() {
  await requireStaff("logs");
  const logs = (await adminDatabases().listDocuments({ databaseId: DB, collectionId: "audit_logs", queries: [Query.orderDesc("happenedAt"),Query.limit(100)] })).documents;
  return <><h1 className="text-3xl font-bold">Activity logs</h1><p className="mt-2 text-slate-600">Recent content changes and withdrawal decisions.</p><div className="mt-7 overflow-x-auto rounded-xl bg-white"><table className="w-full text-left text-sm"><thead className="bg-slate-100"><tr>{["When","Staff","Action","Record","Details"].map(h=><th key={h} className="p-3">{h}</th>)}</tr></thead><tbody>{logs.map(l=><tr key={l.$id} className="border-t"><td className="p-3">{new Date(String(l.happenedAt)).toLocaleString("en-UG")}</td><td className="p-3">{String(l.actorEmail)}</td><td className="p-3">{String(l.action)}</td><td className="p-3">{String(l.target)}</td><td className="p-3">{String(l.details)}</td></tr>)}</tbody></table></div></>;
}
