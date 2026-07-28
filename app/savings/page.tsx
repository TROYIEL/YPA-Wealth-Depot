import Image from "next/image";
import Container from "@/components/ui/Container";
import {
  PiggyBank,
  Wallet,
  ShieldCheck,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

export default function Savings() {
  const subtitle = "Savings Products";
  const title = "Savings";
  const description =
    "Secure and flexible savings solutions designed to help members achieve their financial goals.";
  const currentPage = "Savings";
  const backgroundImage = "/saving hero.webp";
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-137.5 overflow-hidden">
        <Image
          src={backgroundImage}
          alt="YPA Savings"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-blue-950/95 via-blue-900/85 to-sky-700/60" />

        <Container className="relative z-10 flex h-full items-center justify-center">
          <div className="max-w-4xl text-center text-white">
            <span className="inline-block rounded-full bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] backdrop-blur-md">
              {subtitle}
            </span>

            <h1 className="mt-6 text-5xl font-bold md:text-7xl">
              {title}
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
              {description}
            </p>

            <div className="mt-8 flex justify-center gap-3 text-white/80">
              <span>Home</span>
              <span>/</span>
              <span>Products</span>
              <span>/</span>
              <span className="font-semibold text-yellow-400">
                {currentPage}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-sky-500">
                Save Today. Prosper Tomorrow.
              </h2>

              <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-red-700"></div>

              <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-600">
                At YPA Wealth Depot, we provide savings solutions that help
                individuals, families, and businesses grow their wealth
                securely. Whether you are saving for future investments,
                emergencies, education, or retirement, we have an account that
                fits your goals.
              </p>
            </div>

            {/* Savings Cards */}
            <div className="mt-16 grid gap-10 lg:grid-cols-3">
              {/* Fixed Deposit */}
              <div className="group h-130 perspective-[1000px]">
                <div className="relative h-full w-full transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 rounded-3xl border border-blue-100 bg-white p-10 shadow-xl backface-hidden">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                      <ShieldCheck
                        className="text-sky-500"
                        size={35}
                      />
                    </div>

                    <h3 className="mt-8 text-3xl font-bold text-slate-900">
                      Fixed Deposit
                    </h3>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                      Invest your money for a fixed period and enjoy higher
                      returns with guaranteed growth and financial security.
                    </p>

                    <ul className="mt-8 space-y-4">
                      {[
                        "Higher interest earnings",
                        "Guaranteed returns",
                        "Flexible deposit periods",
                        "Safe investment option",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-slate-700"
                        >
                          <CheckCircle
                            className="text-sky-500"
                            size={20}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl transform-[rotateY(180deg)] backface-hidden">
                    <Image
                      src="/"
                      alt="Fixed Deposit"
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 flex items-end bg-blue-950/70 p-10 text-white">
                      <div>
                        <h3 className="text-3xl font-bold">
                          Grow Your Wealth
                        </h3>

                        <p className="mt-3 text-white/90">
                          Earn attractive returns while keeping your money
                          secure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Silver Savings */}
              <div className="group h-130 perspective-[1000px]">
                <div className="relative h-full w-full transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-slate-400 to-slate-700 p-10 text-white shadow-xl backface-hidden">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                      <TrendingUp size={35} />
                    </div>

                    <h3 className="mt-8 text-3xl font-bold">
                      Silver Savings
                    </h3>

                    <p className="mt-5 text-lg leading-8 text-slate-100">
                      A smart savings account designed for consistent savers who
                      want flexibility and rewarding growth opportunities.
                    </p>

                    <ul className="mt-8 space-y-4">
                      {[
                        "Flexible deposits",
                        "Competitive interest",
                        "Easy account management",
                        "Ideal for personal goals",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle size={20} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl transform-[rotateY(180deg)] backface-hidden">
                    <Image
                      src="/"
                      alt="Silver Savings"
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 flex items-end bg-slate-900/70 p-10 text-white">
                      <div>
                        <h3 className="text-3xl font-bold">
                          Save With Confidence
                        </h3>

                        <p className="mt-3 text-white/90">
                          Flexible savings designed for your everyday financial
                          goals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* General Savings */}
              <div className="group h-130 perspective-[1000px]">
                <div className="relative h-full w-full transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-sky-500 to-blue-700 p-10 text-white shadow-xl backface-hidden">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                      <PiggyBank size={35} />
                    </div>

                    <h3 className="mt-8 text-3xl font-bold">
                      General Savings
                    </h3>

                    <p className="mt-5 text-lg leading-8 text-blue-100">
                      Build healthy saving habits and secure your future with an
                      account suitable for everyday saving needs.
                    </p>

                    <ul className="mt-8 space-y-4">
                      {[
                        "Easy account opening",
                        "Regular deposits",
                        "Accessible savings",
                        "Long-term financial security",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle size={20} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl transform-[rotateY(180deg)] backface-hidden">
                    <Image
                      src="/"
                      alt="General Savings"
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 flex items-end bg-blue-950/70 p-10 text-white">
                      <div>
                        <h3 className="text-3xl font-bold">
                          Build A Better Future
                        </h3>

                        <p className="mt-3 text-white/90">
                          Start small today and watch your savings grow over
                          time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-24">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-slate-900">
                  Why Save With YPA?
                </h2>
              </div>

              <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-3xl bg-white p-8 shadow-lg">
                  <ShieldCheck
                    className="text-sky-500"
                    size={40}
                  />
                  <h3 className="mt-5 font-bold">Safe & Secure</h3>
                  <p className="mt-3 text-slate-600">
                    Your savings are protected and professionally managed.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-8 shadow-lg">
                  <TrendingUp
                    className="text-sky-500"
                    size={40}
                  />
                  <h3 className="mt-5 font-bold">
                    Competitive Returns
                  </h3>
                  <p className="mt-3 text-slate-600">
                    Earn attractive returns on your savings.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-8 shadow-lg">
                  <Wallet
                    className="text-sky-500"
                    size={40}
                  />
                  <h3 className="mt-5 font-bold">
                    Flexible Deposits
                  </h3>
                  <p className="mt-3 text-slate-600">
                    Save at your own pace and convenience.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-8 shadow-lg">
                  <PiggyBank
                    className="text-sky-500"
                    size={40}
                  />
                  <h3 className="mt-5 font-bold">
                    Financial Growth
                  </h3>
                  <p className="mt-3 text-slate-600">
                    Achieve your financial goals through disciplined saving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <Image
          src="/cta section.webp"
          alt="Open Savings Account"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-blue-950/85" />

        <Container>
          <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
            <h2 className="text-4xl font-bold md:text-6xl">
              Start Building Wealth Today
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85">
              Open a savings account and take the first step toward financial
              freedom, stability, and long-term prosperity.
            </p>

            <button className="mt-10 rounded-full bg-sky-500 px-10 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600">
              Open A Savings Account
            </button>
          </div>
        </Container>
      </section>
    </>
  );
}