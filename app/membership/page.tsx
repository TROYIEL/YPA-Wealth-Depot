import Image from "next/image";
import Container from "@/components/ui/Container";
import {
  UserPlus,
  ShieldCheck,
  Wallet,
  TrendingUp,
  Users,
  CheckCircle,
} from "lucide-react";

export default function Membership() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[550px] overflow-hidden">
        <Image
          src="/membership hero.webp"
          alt="Membership"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-sky-700/60" />

        <Container className="relative z-10 flex h-full items-center justify-center">
          <div className="max-w-4xl text-center text-white">
            <span className="inline-block rounded-full bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] backdrop-blur-md">
              Join Our Community
            </span>

            <h1 className="mt-6 text-5xl font-bold md:text-7xl">
              Membership
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
              Become a member of YPA Wealth Depot and gain access to savings,
              investment opportunities, shares, loans, and financial growth
              solutions designed for your future.
            </p>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-5xl font-bold text-sky-500">
              Why Become A Member?
            </h2>

            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-red-700" />

            <p className="mt-8 text-lg leading-9 text-slate-600">
              Membership opens the door to a wide range of financial services
              and opportunities that help individuals and families build wealth,
              achieve financial security, and invest in their future.
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <Wallet
                className="text-sky-500"
                size={45}
              />
              <h3 className="mt-5 text-xl font-bold">
                Savings Opportunities
              </h3>
              <p className="mt-3 text-slate-600">
                Access flexible savings products designed to grow your money.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <TrendingUp
                className="text-sky-500"
                size={45}
              />
              <h3 className="mt-5 text-xl font-bold">
                Investment Growth
              </h3>
              <p className="mt-3 text-slate-600">
                Invest in shares and build long-term financial value.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <ShieldCheck
                className="text-sky-500"
                size={45}
              />
              <h3 className="mt-5 text-xl font-bold">
                Affordable Loans
              </h3>
              <p className="mt-3 text-slate-600">
                Access member-friendly loan products when you need them.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <Users
                className="text-sky-500"
                size={45}
              />
              <h3 className="mt-5 text-xl font-bold">
                Community Network
              </h3>
              <p className="mt-3 text-slate-600">
                Join a growing network of members focused on financial success.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <CheckCircle
                className="text-sky-500"
                size={45}
              />
              <h3 className="mt-5 text-xl font-bold">
                Financial Security
              </h3>
              <p className="mt-3 text-slate-600">
                Build a stronger and more secure financial future.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <UserPlus
                className="text-sky-500"
                size={45}
              />
              <h3 className="mt-5 text-xl font-bold">
                Exclusive Benefits
              </h3>
              <p className="mt-3 text-slate-600">
                Enjoy products and services available exclusively to members.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Membership Process */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              How To Become A Member
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-500 text-xl font-bold text-white">
                1
              </div>

              <h3 className="mt-5 font-bold">
                Complete Application
              </h3>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-500 text-xl font-bold text-white">
                2
              </div>

              <h3 className="mt-5 font-bold">
                Submit Requirements
              </h3>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-500 text-xl font-bold text-white">
                3
              </div>

              <h3 className="mt-5 font-bold">
                Account Approval
              </h3>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-500 text-xl font-bold text-white">
                4
              </div>

              <h3 className="mt-5 font-bold">
                Start Growing
              </h3>
            </div>
          </div>
        </Container>
      </section>

      {/* Requirements */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-4xl rounded-3xl bg-linear-to-r from-sky-500 to-sky-500 p-12 text-white shadow-2xl">
            <h2 className="text-center text-4xl font-bold">
              Membership Requirements
            </h2>

            <ul className="mt-10 space-y-5">
              <li className="flex gap-3">
                <CheckCircle />
                Completed membership application form
              </li>

              <li className="flex gap-3">
                <CheckCircle />
                Valid National ID or Passport
              </li>

              <li className="flex gap-3">
                <CheckCircle />
                Passport-size photograph
              </li>

              <li className="flex gap-3">
                <CheckCircle />
                Initial membership contribution
              </li>

              <li className="flex gap-3">
                <CheckCircle />
                Acceptance of organisation policies
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <Image
          src="/cta member.webp"
          alt="Join Membership"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-blue-950/85" />

        <Container>
          <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
            <h2 className="text-4xl font-bold md:text-6xl">
              Ready To Join?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85">
              Become part of a thriving community committed to savings,
              investment, and financial empowerment.
            </p>

            <button className="mt-10 rounded-full bg-sky-500 px-10 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600">
              Apply For Membership
            </button>
          </div>
        </Container>
      </section>
    </>
  );
}