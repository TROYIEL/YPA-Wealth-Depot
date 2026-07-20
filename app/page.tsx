import Hero from "@/components/hero/Hero";
import InfoCards from "@/components/home/InfoCards";
import MembershipJourney from "@/components/MembershipJourney";
import Newscard from "@/components/Newscard";


import Head from "next/head";

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
    </>
  );
}