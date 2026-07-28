import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTopButton from "@/components/layout/ScrollToTopButton";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "YPA Wealth Depot | Savings, Loans & Investments",
  description:
    "YPA Wealth Depot offers reliable SACCO savings, affordable loans, and financial growth services for members across Uganda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
      <SpeedInsights/>
        <Header />

        {/* Remove the global top padding */}
        <main>{children}</main>

        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}