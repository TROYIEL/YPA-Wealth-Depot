"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const portal = usePathname().startsWith("/portal");
  if (portal) return <main>{children}</main>;
  return <><Header /><main>{children}</main><ScrollToTopButton /><Footer /></>;
}
