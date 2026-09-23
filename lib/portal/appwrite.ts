import 'server-only';
import { cookies } from 'next/headers';
import { Account, Client, Databases, Users } from 'node-appwrite';

const endpoint = () => process.env.APPWRITE_ENDPOINT || process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1';
const project = () => process.env.APPWRITE_PROJECT_ID || process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '6ab3d2a9002acf1414c2';
export const databaseId = () => process.env.APPWRITE_DATABASE_ID || '';
export const profilesId = () => process.env.APPWRITE_PROFILES_ID || 'client_profiles';
export const withdrawalsId = () => process.env.APPWRITE_WITHDRAWALS_ID || 'client_withdrawals';
export const sessionName = 'ypa_client_session';

function client() {
  if (!endpoint() || !project()) throw new Error('Appwrite endpoint and project are required');
  return new Client().setEndpoint(endpoint()).setProject(project());
}
export function publicAccount() { return new Account(client()); }
export function adminClient() {
  if (!process.env.APPWRITE_API_KEY) throw new Error('APPWRITE_API_KEY is required');
  const sdk = client().setKey(process.env.APPWRITE_API_KEY);
  return { account: new Account(sdk), users: new Users(sdk), databases: new Databases(sdk) };
}
export function sessionClient(secret: string) {
  const sdk = client().setSession(secret);
  return { account: new Account(sdk), databases: new Databases(sdk) };
}
export async function currentMember() {
  const secret = (await cookies()).get(sessionName)?.value;
  if (!secret) return null;
  try {
    const { account } = sessionClient(secret);
    const user = await account.get();
    const { databases } = adminClient();
    const profile = await databases.getDocument(databaseId(), profilesId(), user.$id);
    if (profile.status !== 'active' || !profile.memberId || profile.email?.toLowerCase() !== user.email.toLowerCase()) return null;
    return { user, profile, secret };
  } catch { return null; }
}
