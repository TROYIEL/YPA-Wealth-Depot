"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    image: "/4.jpg",
    tag: "Build. Grow. Prosper.",
    title: "Your Wealth, Our Priority.",
    desc:
      "Secure savings, smart loans, and investment tools designed to grow your financial future.",
  },
  {
    image: "/1.jpg",
    tag: "Secure Today",
    title: "Save for a Better Tomorrow",
    desc: "Reliable savings solutions that protect and grow your money.",
  },
  {
    image: "/2.jpg",
    tag: "Invest for Growth",
    title: "Build Wealth That Lasts",
    desc: "Smart investment options for long-term financial success.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const bgRef = useRef(null);
  const textRef = useRef(null);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % slides.length);

  // ===== CINEMATIC TRANSITION =====
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      bgRef.current,
      { scale: 1.08, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.4, ease: "power3.out" }
    );

    tl.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" },
      "-=0.8"
    );
  }, [index]);

  // ===== SLOWER AUTO SLIDE (PREMIUM FEEL) =====
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 9000); // ⬅️ slower (was 6500)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-96px)] overflow-hidden">
      {/* Background Image (FULL RESPONSIVE FIX) */}
      <div ref={bgRef} className="absolute inset-0">
        <Image
          src={slides[index].image}
          alt="hero"
          fill
          priority
          className="object-cover object-center md:object-center"
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-20 flex min-h-[calc(100vh-96px)] items-center justify-center px-6 pt-24 text-center">

      <div 
  ref={textRef} 
  className="max-w-5xl pt-10 md:pt-0"
>

          <p className="text-sky-400 font-semibold text-xl md:text-2xl tracking-widest uppercase">
            {slides[index].tag}
          </p>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {slides[index].title}
          </h1>

          <p className="mt-6 text-white/85 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            {slides[index].desc}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Button>Become a Member</Button>
            
          </div>

        </div>
      </div>

      {/* DOTS ONLY (no arrows = cleaner UX) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-3 rounded-full transition-all duration-500 ${
              i === index ? "w-10 bg-blue-600" : "w-3 bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
}

