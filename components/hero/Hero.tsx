"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { heroStats } from "@/app/data/hero";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      <Container className="py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          {/* Badge */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sky-600 font-semibold uppercase tracking-widest"
          >
            Trusted Financial Partner
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mt-4"
          >
            Grow Your Wealth <br />
            With Confidence
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-slate-600 text-lg leading-8"
          >
            Join YPA Wealth Depot and access secure savings, low-interest loans,
            and smart investment opportunities designed to help you build a stronger financial future.
          </motion.p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <Button>Become Member</Button>
            <Button variant="outline">Explore Products</Button>
          </div>

          {/* Trust Points */}
          <div className="mt-8 space-y-2 text-slate-600">
            <p>✔ Secure Savings Accounts</p>
            <p>✔ Affordable Loan Plans</p>
            <p>✔ Reliable Investment Options</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/hero.jpg"
              alt="Financial growth"
              width={600}
              height={700}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Floating Stats */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 grid grid-cols-2 gap-4 w-full px-6">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white shadow-lg rounded-2xl p-4 text-center"
              >
                <p className="text-xl font-black text-sky-600">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}