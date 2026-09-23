import { Client, Account, Databases, Users, ID, Permission, Role } from 'node-appwrite';
import { randomBytes } from 'node:crypto';
const [email, name, memberId] = process.argv.slice(2);
const { APPWRITE_API_KEY, APPWRITE_DATABASE_ID, PORTAL_PUBLIC_URL } = process.env;
const APPWRITE_ENDPOINT = process.env.APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1';
const APPWRITE_PROJECT_ID = process.env.APPWRITE_PROJECT_ID || '6ab3d2a9002acf1414c2';
if (!email || !name || !memberId || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || ![APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, APPWRITE_API_KEY, APPWRITE_DATABASE_ID, PORTAL_PUBLIC_URL].every(Boolean)) {
  throw new Error('Usage: APPWRITE_* and PORTAL_PUBLIC_URL env vars node scripts/invite-client.mjs email@example.com "Member Name" "LoanDisk member ID"');
}
const client = new Client().setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT_ID).setKey(APPWRITE_API_KEY);
const users = new Users(client); const databases = new Databases(client); const account = new Account(client);
const user = await users.create({ userId: ID.unique(), email: email.toLowerCase(), name, password: randomBytes(36).toString('base64url') });
try {
  await databases.createDocument({ databaseId: APPWRITE_DATABASE_ID, collectionId: process.env.APPWRITE_PROFILES_ID || 'client_profiles', documentId: user.$id, data: { memberId, email: email.toLowerCase(), status: 'active' }, permissions: [Permission.read(Role.user(user.$id))] });
} catch (error) { await users.delete({ userId: user.$id }); throw error; }
await account.createRecovery({ email: user.email, url: `${PORTAL_PUBLIC_URL.replace(/\/$/, '')}/client-portal/activate` });
console.log(`Invitation email requested for ${user.email}. Confirm delivery in Appwrite's messaging logs.`);
