import Hero from "@/components/hero/Hero";
import InfoCards from "@/components/home/InfoCards";
import MembershipJourney from "@/components/shared/MembershipJourney";
import LatestUpdates from "@/components/home/LatestUpdates";
import LandingPattern from "@/components/shared/LandingPattern";
import Link from "next/link";


import Head from "next/head";
import AdvertSlider from "@/components/shared/AdvertSlider";
import FloatingStaffPaymentButton from "@/components/FloatingStaffPaymentButton";

<Head>
  <link rel="icon" href="/logo.ico" />
</Head>

export default function Home() {
  return (
    <>
      <Hero />
      <InfoCards />
      <MembershipJourney />
      <LatestUpdates />
      <LandingPattern />
      <AdvertSlider />
     {/* <FloatingStaffPaymentButton /> */}
      <Link href="/portal" className="fixed bottom-6 right-6 z-50 rounded-full bg-blue-800 px-6 py-3 font-semibold text-white shadow-xl">Member portal</Link>
    </>
  );
}
