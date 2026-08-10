"use client";

import Image from "next/image";
import Link from "next/link";

export default function TransferCard() {
  return (
    <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/members-bg.webp"
          alt="YPA Wealth Depot"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Animated Border Frame */}
      <div className="pointer-events-none absolute inset-3 z-20 rounded-3xl p-0.5 overflow-hidden">
        
        {/* Sky Blue - Left to Right */}
        <div
          className="absolute inset-0 animate-[blueMove_4s_linear_infinite]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #0ea5e9 25%, #38bdf8 50%, transparent 75%)",
          }}
        />

        {/* Red - Right to Left */}
        <div
          className="absolute inset-0 animate-[redMove_4s_linear_infinite]"
          style={{
            background:
              "linear-gradient(270deg, transparent 0%, #dc2626 25%, #ef4444 50%, transparent 75%)",
          }}
        />

        {/* Inner Frame */}
        <div className="relative h-full w-full rounded-[22px] border border-white/10 bg-transparent" />
      </div>

      {/* Centered Text */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center text-white">
        <h2 className="text-4xl font-bold md:text-5xl">
          Become a Member
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-200 md:text-lg">
          Start your financial journey with YPA Wealth Depot. Save
          confidently, access affordable loans, and invest in your future
          with a trusted SACCO.
        </p>

        {/* Button */}
        <Link
          href="/membership"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3 font-semibold text-white shadow-[0_0_18px_rgba(220,38,38,0.6)]"
        >
          Become a Member
        </Link>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes blueMove {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes redMove {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
}