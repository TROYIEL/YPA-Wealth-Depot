"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}
      <Image
        src="/hero.jpg"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Left Image Panel */}
      <div className="absolute left-0 top-0 w-[22%] h-full hidden xl:block">

        <Image
          src="/family.jpg"
          alt=""
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute bottom-24 px-10 text-white">

          <p className="text-sky-400 font-semibold">
            Secure Today
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Save for a Better Tomorrow
          </h2>

          <div className="w-20 h-[2px] bg-white mt-6 mb-6" />

          <p className="text-white/80 text-lg">
            Safe, reliable and rewarding savings solutions.
          </p>

        </div>

      </div>

      {/* Right Image Panel */}
      <div className="absolute right-0 top-0 w-[22%] h-full hidden xl:block">

        <Image
          src="/builder.jpg"
          alt=""
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-blue-950/45" />

        <div className="absolute bottom-24 px-10 text-white">

          <p className="text-sky-400 font-semibold">
            Invest for Growth
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Build Wealth That Lasts
          </h2>

          <div className="w-20 h-[2px] bg-white mt-6 mb-6" />

          <p className="text-white/80 text-lg">
            Grow your future with reliable investment options.
          </p>

        </div>

      </div>

      {/* Center Hero */}

      <div className="relative z-20 flex items-center justify-center h-full">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-center max-w-4xl px-8"
        >

          <p className="text-sky-400 font-semibold text-3xl">
            Build. Grow. Prosper.
          </p>

          <h1 className="mt-6 text-6xl md:text-8xl font-black leading-none text-white">

            Your Wealth,

            <span className="block text-blue-500">
              Our Priority.
            </span>

          </h1>

          <p className="mt-8 text-white/90 text-2xl leading-10 max-w-3xl mx-auto">

            Access secure savings, affordable loans,
            and smart investment opportunities that
            empower your future.

          </p>

          <div className="flex justify-center gap-6 mt-12">

            <Button>
              Become a Member
            </Button>

            <Button variant="outline">
              Explore Products
            </Button>

          </div>

          {/* Dots */}

          <div className="flex justify-center gap-4 mt-16">

            <span className="w-3 h-3 rounded-full bg-white" />

            <span className="w-10 h-3 rounded-full bg-blue-600" />

            <span className="w-3 h-3 rounded-full bg-white" />

          </div>

        </motion.div>

      </div>

      {/* Scroll Down */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">

        <svg
          width="40"
          height="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M10 15l10 10 10-10" />
        </svg>

      </div>

      {/* Navigation Buttons */}

      <button className="hidden xl:flex absolute left-[19%] top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full border border-white items-center justify-center text-white hover:bg-white hover:text-black transition">
        ❮
      </button>

      <button className="hidden xl:flex absolute right-[19%] top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full border border-white items-center justify-center text-white hover:bg-white hover:text-black transition">
        ❯
      </button>

    </section>
  );
}