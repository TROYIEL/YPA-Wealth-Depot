import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTopButton from "@/components/layout/ScrollToTopButton";

export const metadata: Metadata = {
  title: "YPA Wealth Depot | Savings, Loans & Investments",
  description:
    "YPA Wealth Depot offers reliable SACCO savings, affordable loans, and financial growth services for members across Uganda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-32">{children}</main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
