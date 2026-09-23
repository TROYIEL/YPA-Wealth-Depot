import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { currentMember } from '@/lib/portal/appwrite';
import PortalDashboard from './portal-dashboard';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Client Portal', robots: { index: false, follow: false } };
export default async function Portal() {
  const member = await currentMember();
  if (!member) redirect('/client-portal/login');
  return <PortalDashboard name={member.user.name || member.user.email.split('@')[0]} />;
}
