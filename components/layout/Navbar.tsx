"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";


import { navigation } from "@/app/data/navigation";
import { cn } from "@/utils/cn";

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
    "fixed left-0 z-50 w-full transition-colors duration-500",
    scrolled
      ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200"
      : "bg-transparent"
  )}
>
      <div
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between px-8 transition-all duration-300",
          scrolled ? "h-20" : "h-24"
        )}
      >
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/nav icon2.png"
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
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  "flex items-center font-medium transition-colors duration-300",
                  scrolled
                    ? "text-slate-700 hover:text-sky-600"
                    : "text-white hover:text-sky-300"
                )}
              >
                {item.label}

                {item.children && (
                  <ChevronDown
                    size={16}
                    className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                  />
                )}
              </Link>

              {/* Underline */}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-sky-500 transition-all duration-300 group-hover:w-full" />

              {/* Horizontal Dropdown */}
{item.children && (
  <div
    className="
      invisible absolute left-1/2 top-full mt-5
      -translate-x-1/2
      opacity-0
      transition-all duration-300
      group-hover:visible
      group-hover:opacity-100
      rounded-2xl
      bg-white
      shadow-2xl
      border border-slate-200
      px-5 py-4
      z-50
    "
  >
    <div className="flex items-center gap-3 whitespace-nowrap">

      {item.children.map((child) => (
        <Link
          key={child.label}
          href={child.href}
          className="
            rounded-xl
            px-5
            py-3
            text-slate-700
            font-medium
            hover:bg-sky-50
            hover:text-sky-600
            transition-all
            duration-300
          "
        >
          {child.label}
        </Link>
      ))}

    </div>
  </div>
)}
            </div>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center">
  <Link
    href="/Comingsoon"
    className="rounded-full bg-sky-500 hover:bg-sky-600 px-7 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1"
  >
    LOGIN
  </Link>
</div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-slate-700"
          aria-label="Toggle Menu"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t shadow-xl"
          >
            <div className="px-8 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      if (!item.children) setOpen(false);
                    }}
                    className="flex items-center justify-between py-2 font-medium text-slate-700 hover:text-sky-600 transition"
                  >
                    <span>{item.label}</span>

                    {item.children && (
                      <ChevronDown
                        size={18}
                        className="text-slate-500"
                      />
                    )}
                  </Link>

                  {item.children && (
                    <div className="ml-4 mt-2 border-l-2 border-slate-200 pl-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm text-slate-600 hover:text-sky-600 transition"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="hidden lg:flex items-center">
  <Link
    href="/ComingSoon.tsx"
    className="rounded-full bg-sky-500 hover:bg-sky-600 px-7 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1"
  >
    LOGIN
  </Link>
</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}