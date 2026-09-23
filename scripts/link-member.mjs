import { Client, Databases, Permission, Role } from "node-appwrite";

const [userId, memberNumber, fullName, phone = ""] = process.argv.slice(2);
if (!userId || !memberNumber || !fullName) throw new Error('Usage: node --env-file=.env.local scripts/link-member.mjs USER_ID MEMBER_NUMBER "Full name" [phone]');
const { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, APPWRITE_API_KEY, APPWRITE_DATABASE_ID = "ypa_portal" } = process.env;
if (!APPWRITE_ENDPOINT || !APPWRITE_PROJECT_ID || !APPWRITE_API_KEY) throw new Error("Appwrite configuration is missing");
const db = new Databases(new Client().setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT_ID).setKey(APPWRITE_API_KEY));
await db.createDocument({ databaseId: APPWRITE_DATABASE_ID, collectionId: "members", documentId: userId, data: { userId, memberNumber, fullName, phone }, permissions: [Permission.read(Role.user(userId))] });
console.log(`Linked member ${memberNumber} to Appwrite user ${userId}. Add verified financial records in the Appwrite console with userId=${userId} and document read permission for this user.`);
