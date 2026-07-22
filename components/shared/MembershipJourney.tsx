"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function TransferCard() {
  const section = useRef<HTMLElement>(null);
  const bg = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Idle floating animation
      gsap.to(card.current, {
        y: 8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: "+=2200",
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        bg.current,
        {
          scale: 1.1,
          ease: "none",
          duration: 1,
        },
        0
      )

        .to(
          card.current,
          {
            motionPath: {
              path: [
                { x: 0, y: 0 },
                { x: 180, y: -110 },
                { x: 430, y: -50 },
                { x: 650, y: 15 },
              ],
              curviness: 1.8,
            },
            rotation: 18,
            scale: 0.96,
            ease: "none",
            duration: 1,
          },
          0
        )

        .fromTo(
          content.current,
          {
            autoAlpha: 0,
            y: 60,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.35,
          },
          0.75
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* Background */}
      <div
        ref={bg}
        className="absolute inset-0"
      >
        <Image
          src="/members-bg.webp"
          alt=""
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />
      </div>

      
      {/* Text */}
      <div
        ref={content}
        className="absolute inset-x-0 bottom-24 z-30 flex flex-col items-center text-center text-white px-6"
      >
        <span className="text-sky-300 tracking-[0.35em] uppercase">
          Join Today
        </span>

        <h2 className="mt-4 text-5xl font-bold md:text-6xl">
          Become a Member
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
          Start your financial journey with YPA Wealth Depot. Save
          confidently, access affordable loans, and invest in your future
          with a trusted SACCO.
        </p>

        <button className="mt-10 rounded-full bg-sky-500 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-sky-600">
          Join Us
        </button>
      </div>
    </section>
  );
}