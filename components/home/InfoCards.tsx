"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Users,
  Briefcase,
  FileText,
} from "lucide-react";

export default function InfoCards() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Left Card */}
          <div className="overflow-hidden rounded-2xl shadow-lg group">

            <div className="relative h-80">
              <Image
                src="/EGM.webp"
                alt="Leadership"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
            </div>

            <div className="bg-sky-600 text-white p-8">
              <div className="flex items-center gap-3 mb-5">
                <Users className="w-8 h-8" />
                <h3 className="text-3xl font-bold">
                  Our Leadership
                </h3>
              </div>

              <p className="text-white/90 leading-7">
              Driven by expertise, led by integrity. Meet the team steering YPA Wealth Depot toward
              sustainable growth and delivering excellence in every service we provide.
              </p>

              <Link
                href="#"
                className="inline-flex items-center gap-2 mt-6 font-semibold hover:gap-4 transition-all"
              >
                Learn More
                <ArrowRight size={18} />
              </Link>
            </div>

          </div>

          {/* Middle Column */}
          <div className="space-y-6">

            {/* Top Card */}

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">

              <Image
                src="/mission.webp"
                alt=""
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/60" />

              <div className="absolute bottom-8 left-8 max-w-sm text-white">

                <div className="w-1 h-24 bg-lime-400 absolute -left-5 top-0 rounded-full"></div>

                <h3 className="text-4xl font-bold mb-3">
                  Our Mission
                </h3>

                <p className="font-light text-white/90 leading-5">
                  To empower members to achieve financial  stability through innovation, client-focused
                  Savings and credit solutions while promoting a culture of financial discipline and investment.
                </p>

              </div>

            </div>

            {/* {/* Bottom Card */}

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">

              <Image
                src="/mission.webp"
                alt=""
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/60" />

              <div className="absolute bottom-8 left-8 text-white">

                <h3 className="text-4xl font-bold mb-3">
                    Vision
                </h3>

                <p className="font-light text-white/90 leading-5">
                  To create sustainable Wealth and financial freedom for all members.
                </p>

              </div>

            </div>

          </div>

         {/* Right Card */}

          <div className="rounded-2xl bg-sky-600 text-white p-10 shadow-lg">

            <h4 className="text-xl font-semibold text-white/80">
              Quick Links
            </h4>

            <h2 className="text-5xl font-bold mt-2 mb-8">
              Resources
            </h2>

            <div className="space-y-5">

              {[
                "Annual Reports",
                "Financial Statements",
                "Membership Guide",
                "Loan Application Forms",
                "Savings Products",
                "Resource Centre",
              ].map((item) => (
                <Link
                  href="#"
                  key={item}
                  className="flex items-center justify-between border-b border-white/20 pb-3 hover:translate-x-2 transition"
                >
                  <span>{item}</span>
                  <Download size={18} />
                </Link>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}