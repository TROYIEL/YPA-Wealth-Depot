"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <motion.div
        initial={false}
        animate={{
          y: scrolled ? -40 : 0,
          opacity: scrolled ? 0 : 1,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-0 left-0 w-full z-[60]"
      >
        <TopBar />
      </motion.div>

      {/* Navbar */}
      <Navbar scrolled={scrolled} />
    </>
  );
}