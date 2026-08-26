import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTopButton from "@/components/layout/ScrollToTopButton";
import { SpeedInsights } from "@vercel/speed-insights/next";

const siteUrl = "https://www.ypawealthdepot.com/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "YPA Wealth Depot | Savings, Loans & Investments in Uganda",
    template: "%s | YPA Wealth Depot",
  },

  description:
    "YPA Wealth Depot is a trusted SACCO in Uganda offering savings, affordable loans, investments, and financial solutions to help members grow their wealth.",

  keywords: [
    "YPA Wealth Depot",
    "YPA Wealth Depot SACCO",
    "SACCO Uganda",
    "SACCOs in Uganda",
    "savings in Uganda",
    "loans in Uganda",
    "affordable loans Uganda",
    "investment in Uganda",
    "financial services Uganda",
    "SACCO loans Uganda",
    "savings account Uganda",
    "wealth management Uganda",
    "YPA SACCO",
    "car log book loans",
     "loans",
  ],

  authors: [
    {
      name: "YPA Wealth Depot",
    },
  ],

  creator: "YPA Wealth Depot",
  publisher: "YPA Wealth Depot",

  applicationName: "YPA Wealth Depot",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_UG",
    url: siteUrl,
    siteName: "YPA Wealth Depot",
    title: "YPA Wealth Depot | Savings, Loans & Investments in Uganda",
    description:
      "Save, borrow, invest and grow with YPA Wealth Depot. Access reliable SACCO savings, affordable loans and financial growth solutions in Uganda.",
    images: [
      {
        url: "/mission.webp",
        width: 1200,
        height: 630,
        alt: "YPA Wealth Depot - Savings, Loans and Investments",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "YPA Wealth Depot | Savings, Loans & Investments",
    description:
      "Reliable savings, affordable loans and investment solutions from YPA Wealth Depot in Uganda.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/YPA SACCO LOGO.ico",
    apple: "/YPA SACCO LOGO.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <SpeedInsights />

        <Header />

        <main>{children}</main>

        <ScrollToTopButton />

        <Footer />
      </body>
    </html>
  );
}