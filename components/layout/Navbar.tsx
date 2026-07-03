"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/app/data/navigation";
import { cn } from "@/utils/cn";
import { useState } from "react";

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={false}
      animate={{
        top: scrolled ? 0 : 40,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "fixed left-0 w-full z-50 transition-colors duration-500",
        scrolled
          ? "bg-white/100 backdrop-blur-2xl shadow-xl border-b border-slate-200"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-8 flex items-center justify-between transition-all duration-300",
          scrolled ? "h-20" : "h-24"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/social media dp-01.png"
            alt="YPA Wealth Depot"
            width={300}
            height={90}
            priority
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "group relative flex items-center font-medium transition-colors duration-300",
                scrolled
                  ? "text-slate-700 hover:text-sky-600"
                  : "text-red-600 hover:text-sky-300"
              )}
            >
              {item.label}

              {item.children && (
                <ChevronDown
                  size={16}
                  className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                />
              )}

              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-sky-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/login"
            className={cn(
              "font-medium transition",
              scrolled
                ? "text-slate-700 hover:text-sky-600"
                : "text-white hover:text-sky-300"
            )}
          >
            Login
          </Link>

          <button className="rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-7 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            Become a Member
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            "lg:hidden",
            scrolled ? "text-slate-700" : "text-white"
          )}
          aria-label="Toggle Menu"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white shadow-xl border-t"
          >
            <div className="px-8 py-6 space-y-5">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-slate-700 font-medium hover:text-sky-600 transition"
                >
                  {item.label}
                </Link>
              ))}

              <button className="w-full rounded-full bg-gradient-to-r from-sky-500 to-blue-600 py-3 text-white font-semibold">
                Become a Member
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}