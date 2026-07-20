"use client";
import Link from "next/link";

import { Phone, Mail, Clock3 } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function TopBar() {
  return (
    <div className="h-10 bg-slate-950 text-white text-sm">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

        {/* Left Side */}
        <div className="hidden lg:flex items-center gap-6">

          <div className="flex items-center gap-2 text-slate-200">
            <Phone size={14} className="text-sky-400" />
            <span>+256 700 000 000</span>
          </div>

          <div className="flex items-center gap-2 text-slate-200">
            <Mail size={14} className="text-sky-400" />
            <span>info@ypawealthdepot.com</span>
          </div>

          <div className="flex items-center gap-2 text-slate-200">
            <Clock3 size={14} className="text-sky-400" />
            <span>Mon – Fri : 8:00 AM – 5:00 PM</span>
          </div>

        </div>

        {/* Announcement */}
        <div className="hidden md:flex flex-1 overflow-hidden mx-8">

          <div className="animate-scroll whitespace-nowrap text-sky-300 font-medium">

            Welcome to YPA Wealth Depot •
            Secure Savings •
            Affordable Loans •
            Smart Investments •
            Financial Freedom Starts Here •

          </div>

        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-3">

          <Link
            href="#"
            className="hover:text-sky-400 transition"
          >
            <FaFacebookF size={16} />
          </Link>

          <Link
            href="#"
            className="hover:text-sky-400 transition"
          >
            <FaInstagram size={16} />
          </Link>

          <Link
            href="#"
            className="hover:text-sky-400 transition"
          >
            <FaXTwitter size={16} />
          </Link>

          <Link
            href="#"
            className="hover:text-sky-400 transition"
          >
            <FaTiktok size={16} />
          </Link>


        </div>

      </div>
    </div>
  );
}