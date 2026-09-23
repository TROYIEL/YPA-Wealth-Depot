import { Client, Databases, IndexType } from "node-appwrite";

const endpoint = process.env.APPWRITE_ENDPOINT;
const project = process.env.APPWRITE_PROJECT_ID;
const key = process.env.APPWRITE_API_KEY;
const databaseId = process.env.APPWRITE_DATABASE_ID || "ypa_portal";
if (!endpoint || !project || !key) throw new Error("Set APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID and APPWRITE_API_KEY in .env.local");
const db = new Databases(new Client().setEndpoint(endpoint).setProject(project).setKey(key));
const exists = async fn => { try { return await fn(); } catch (e) { if (e.code === 404) return null; throw e; } };
if (!await exists(() => db.get({ databaseId }))) await db.create({ databaseId, name: "YPA Member Portal" });

const schemas = {
  members: { name: "Members", fields: { memberNumber: ["string", 64], fullName: ["string", 180], phone: ["string", 40] } },
  savings_accounts: { name: "Savings accounts", fields: { accountNumber: ["string", 80], name: ["string", 120], balance: ["float"] } },
  shares: { name: "Shares", fields: { units: ["integer"], value: ["float"] } },
  loans: { name: "Loans", fields: { product: ["string", 120], outstanding: ["float"], status: ["string", 40] } },
  transactions: { name: "Transactions", fields: { description: ["string", 255], amount: ["float"], type: ["string", 20], occurredAt: ["datetime"] } },
  notifications: { name: "Notifications", fields: { title: ["string", 120], message: ["string", 1000] } },
  member_requests: { name: "Member requests", fields: { amount: ["integer"], method: ["string", 20], details: ["string", 500], status: ["string", 30] } },
};

for (const [collectionId, schema] of Object.entries(schemas)) {
  const permissions = [];
  if (!await exists(() => db.getCollection({ databaseId, collectionId }))) {
    await db.createCollection({ databaseId, collectionId, name: schema.name, documentSecurity: true, permissions });
  }
  const current = await db.listAttributes({ databaseId, collectionId });
  const fields = { userId: ["string", 36], ...schema.fields };
  for (const [field, [type, size]] of Object.entries(fields)) {
    if (current.attributes.some(a => a.key === field)) continue;
    const common = { databaseId, collectionId, key: field, required: true };
    if (type === "string") await db.createStringAttribute({ ...common, size });
    else if (type === "integer") await db.createIntegerAttribute(common);
    else if (type === "float") await db.createFloatAttribute(common);
    else await db.createDatetimeAttribute(common);
  }
  // Appwrite builds attributes asynchronously. Wait until each can be indexed.
  for (let attempt = 0; attempt < 40; attempt++) {
    const attrs = await db.listAttributes({ databaseId, collectionId });
    if (Object.keys(fields).every(field => attrs.attributes.some(a => a.key === field && a.status === "available"))) break;
    if (attempt === 39) throw new Error(`${collectionId}: attributes did not become available`);
    await new Promise(resolve => setTimeout(resolve, 1500));
  }
  const indexes = await db.listIndexes({ databaseId, collectionId });
  if (!indexes.indexes.some(i => i.key === "by_user")) await db.createIndex({ databaseId, collectionId, key: "by_user", type: IndexType.Key, attributes: ["userId"] });
  console.log(`Ready: ${collectionId}`);
}
