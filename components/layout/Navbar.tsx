"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navigation } from "@/app/data/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all",
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent text-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-black text-xl">
          YPA Wealth Depot
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-sky-500 transition"
            >
              {item.label}
              {item.children && (
                <ChevronDown className="inline ml-1 w-4 h-4" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex gap-4 items-center">
          <button className="bg-sky-500 text-white px-5 py-2 rounded-full hover:bg-sky-600">
            Become a Member
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t p-6 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-slate-700"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <button className="w-full bg-sky-500 text-white py-3 rounded-full">
            Become a Member
          </button>
        </div>
      )}
    </header>
  );
}