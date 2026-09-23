import { Client, Databases } from 'node-appwrite';
const { APPWRITE_API_KEY, APPWRITE_DATABASE_ID } = process.env;
const APPWRITE_ENDPOINT = process.env.APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1';
const APPWRITE_PROJECT_ID = process.env.APPWRITE_PROJECT_ID || '6ab3d2a9002acf1414c2';
if (![APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, APPWRITE_API_KEY, APPWRITE_DATABASE_ID].every(Boolean)) throw new Error('Set APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, APPWRITE_API_KEY, APPWRITE_DATABASE_ID');
const db = new Databases(new Client().setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT_ID).setKey(APPWRITE_API_KEY));
const collections = [
  { id: process.env.APPWRITE_PROFILES_ID || 'client_profiles', name: 'Client profiles', fields: [['memberId', 128], ['email', 254], ['status', 32]] },
  { id: process.env.APPWRITE_WITHDRAWALS_ID || 'client_withdrawals', name: 'Client withdrawals', fields: [['userId', 36], ['memberId', 128], ['method', 32], ['destination', 180], ['note', 500], ['status', 32]], amount: true },
];
for (const col of collections) {
  try { await db.getCollection({ databaseId: APPWRITE_DATABASE_ID, collectionId: col.id }); console.log(`${col.id} already exists; checking attributes`); }
  catch (error) { if (error.code !== 404) throw error; await db.createCollection({ databaseId: APPWRITE_DATABASE_ID, collectionId: col.id, name: col.name, permissions: [], documentSecurity: true }); }
  const details = await db.getCollection({ databaseId: APPWRITE_DATABASE_ID, collectionId: col.id });
  for (const [key, size] of col.fields) {
    if (!details.attributes.some(attr => attr.key === key)) await db.createStringAttribute({ databaseId: APPWRITE_DATABASE_ID, collectionId: col.id, key, size, required: true });
  }
  if (col.amount && !details.attributes.some(attr => attr.key === 'amount')) await db.createIntegerAttribute({ databaseId: APPWRITE_DATABASE_ID, collectionId: col.id, key: 'amount', required: true, min: 1000, max: 1000000000 });
  console.log(`${col.id}: requested attributes`);
}
console.log('Wait until attributes are available in Appwrite, then invite members. Add a key index on client_withdrawals.userId for larger datasets.');
