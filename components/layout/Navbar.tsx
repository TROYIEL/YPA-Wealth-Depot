"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, LogIn } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { navigation } from "@/app/data/navigation";
import { cn } from "@/utils/cn";

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileDropdown(null);
  };

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

              {/* Desktop Dropdown */}
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

        {/* Desktop Login */}
        <div className="hidden lg:flex items-center">
          <Link
            href="https://b.loandisk.com/"
            className="rounded-full bg-red-600 hover:bg-sky-600 px-7 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            LOGIN
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            "lg:hidden flex items-center justify-center",
            "w-11 h-11 rounded-xl",
            "transition-all duration-300",
            scrolled
              ? "text-slate-700 bg-slate-100 hover:bg-slate-200"
              : "text-white bg-white/10 backdrop-blur-md hover:bg-white/20"
          )}
          aria-label={open ? "Close Menu" : "Open Menu"}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={25} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu size={25} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:hidden overflow-hidden bg-white border-t border-slate-200 shadow-2xl"
          >
            <div className="max-h-[calc(100vh-80px)] overflow-y-auto">

              {/* Mobile Navigation */}
              <div className="px-5 pt-4 pb-3">
                {navigation.map((item, index) => {
                  const hasChildren = !!item.children;
                  const isDropdownOpen = mobileDropdown === item.label;

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.04,
                        duration: 0.2,
                      }}
                      className="border-b border-slate-100 last:border-0"
                    >
                      {/* Main Navigation Item */}
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          onClick={() => {
                            if (!hasChildren) {
                              closeMobileMenu();
                            }
                          }}
                          className="
                            flex-1
                            py-4
                            text-[16px]
                            font-semibold
                            text-slate-800
                            hover:text-sky-600
                            transition-colors
                          "
                        >
                          {item.label}
                        </Link>

                        {/* Dropdown Toggle */}
                        {hasChildren && (
                          <button
                            type="button"
                            onClick={() =>
                              setMobileDropdown(
                                isDropdownOpen ? null : item.label
                              )
                            }
                            className="
                              ml-2
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-xl
                              text-slate-500
                              hover:bg-sky-50
                              hover:text-sky-600
                              transition-all
                            "
                            aria-label={`Toggle ${item.label} submenu`}
                            aria-expanded={isDropdownOpen}
                          >
                            <ChevronDown
                              size={19}
                              className={cn(
                                "transition-transform duration-300",
                                isDropdownOpen && "rotate-180 text-sky-600"
                              )}
                            />
                          </button>
                        )}
                      </div>

                      {/* Mobile Dropdown */}
                      <AnimatePresence initial={false}>
                        {hasChildren && isDropdownOpen && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.25,
                              ease: "easeInOut",
                            }}
                            className="overflow-hidden"
                          >
                            <div className="ml-2 mb-3 rounded-2xl bg-slate-50 border border-slate-100 p-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={closeMobileMenu}
                                  className="
                                    flex
                                    items-center
                                    min-h-[48px]
                                    rounded-xl
                                    px-4
                                    text-[15px]
                                    font-medium
                                    text-slate-600
                                    hover:bg-white
                                    hover:text-sky-600
                                    hover:shadow-sm
                                    transition-all
                                  "
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile Login Section */}
              <div className="px-5 pb-6 pt-2">
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3">
                  <Link
                    href="https://b.loandisk.com/"
                    onClick={closeMobileMenu}
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-red-600
                      px-6
                      py-4
                      text-white
                      font-bold
                      shadow-lg
                      shadow-red-600/20
                      hover:bg-sky-600
                      active:scale-[0.98]
                      transition-all
                    "
                  >
                    <LogIn size={19} />
                    LOGIN
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}