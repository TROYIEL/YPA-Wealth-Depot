import Hero from "@/components/hero/Hero";
import InfoCards from "@/components/home/InfoCards";
import MembershipJourney from "@/components/shared/MembershipJourney";
import Newscard from "@/components/shared/Newscard";
import LandingPattern from "@/components/shared/LandingPattern";


import Head from "next/head";
import AdvertSlider from "@/components/shared/AdvertSlider";

<Head>
  <link rel="icon" href="/logo.ico" />
</Head>

export default function Home() {
  return (
    <>
      <Hero />
      <InfoCards />
      <MembershipJourney />
      <Newscard  />
      <LandingPattern />
      <AdvertSlider/>
    </>
  );
}