"use client";

import Image from "next/image";
import { ArrowRight, Plus } from "lucide-react";

export default function Landingpage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <svg
          className="h-full w-full"
          viewBox="0 0 900 900"
          fill="none"
        >
          <path
            d="M100 900C100 400 400 100 900 100"
            stroke="#EAF1FA"
            strokeWidth="3"
          />
          <path
            d="M0 700C200 300 500 100 900 0"
            stroke="#EEF4FC"
            strokeWidth="3"
          />
          <path
            d="M0 850C250 450 550 200 900 50"
            stroke="#EEF4FC"
            strokeWidth="3"
          />
        </svg>
      </div>


      {/* Navbar */}
      <header className="relative z-20 flex items-center justify-between px-10 py-6">

        <Image
          src="/logo.svg"
          alt="Logo"
          width={35}
          height={35}
        />


        <button
          className="
          flex items-center gap-3
          rounded-lg
          border border-blue-900
          px-6 py-3
          font-semibold
          text-blue-900
          hover:bg-blue-900
          hover:text-white
          transition
          "
        >
          Register a company
          <ArrowRight size={18}/>
        </button>

      </header>



      {/* Hero Content */}
      <div className="
        relative z-10
        mx-auto
        grid
        max-w-7xl
        grid-cols-1
        items-center
        gap-10
        px-10
        pt-20
        lg:grid-cols-2
      ">


        {/* Left Side */}
        <div>


          <h1
            className="
            max-w-xl
            text-6xl
            font-bold
            leading-tight
            text-blue-900
            "
          >
            Secure your
            <br/>

            Future with

            <span className="text-green-500">
              {" "}NSSF
            </span>

          </h1>



          <p
            className="
            mt-8
            max-w-lg
            text-lg
            leading-relaxed
            text-blue-900
            "
          >
            Manage your retirement savings with ease,
            track your contributions, and plan for a
            financially secure future — all in one place.
          </p>



          {/* Buttons */}
          <div className="mt-12 flex gap-5">


            <button
              className="
              flex
              w-56
              items-center
              justify-center
              gap-3
              rounded-md
              bg-blue-900
              py-5
              text-lg
              text-white
              hover:bg-blue-800
              transition
              "
            >
              Login
              <ArrowRight/>
            </button>



            <button
              className="
              flex
              w-56
              items-center
              justify-center
              gap-3
              rounded-md
              bg-blue-500
              py-5
              text-lg
              text-white
              hover:bg-blue-600
              transition
              "
            >

              Become A Member

              <Plus
                className="
                rounded-full
                border
                "
              />

            </button>


          </div>


        </div>



        {/* Right Dashboard Image */}

        <div
          className="
          relative
          mt-10
          lg:mt-0
          "
        >

          <Image

            src="/dashboard.png"

            alt="Member Dashboard"

            width={850}

            height={650}

            className="
            object-contain
            drop-shadow-2xl
            "
          />


        </div>


      </div>

    </section>
  );
}