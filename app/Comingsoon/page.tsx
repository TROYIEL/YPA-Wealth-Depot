import Link from "next/link";
import Container from "@/components/ui/Container";
import { Clock3, Sparkles } from "lucide-react";

export default function ComingSoon() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-sky-700">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />

      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />

      <Container>
        <div className="relative flex min-h-screen items-center justify-center">
          <div className="max-w-3xl text-center text-white">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/10 ">
             
            </div>

            <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest backdrop-blur-md">
        
             
            </span>

            <h1 className="mt-8 text-5xl font-black md:text-7xl">
              We're Working On Something Amazing
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80">
              This page is currently under development and will be available
              soon. Our team is working hard to bring you a better experience
              with exciting new features and content.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="rounded-full bg-sky-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600"
              >
                Back To Home
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
                <h3 className="text-3xl font-bold"></h3>
                <p className="mt-3 text-white/80">
                  New Features
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
                <h3 className="text-3xl font-bold"></h3>
                <p className="mt-3 text-white/80">
                  Better Experience
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
                <h3 className="text-3xl font-bold"></h3>
                <p className="mt-3 text-white/80">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}