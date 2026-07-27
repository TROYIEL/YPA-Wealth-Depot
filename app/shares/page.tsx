import Image from "next/image";
import Container from "@/components/ui/Container";
import {
PieChart,
TrendingUp,
ShieldCheck,
CheckCircle,
Landmark,
Users,
} from "lucide-react";

export default function Shares({
    subtitle = "",
    title = "",
    description =
      "",
    currentPage = "Savings",
    backgroundImage = "/saving hero.webp",
  }: PageIntroProps) {
return (
<>
{/* Hero Section */} <section className="relative h-[550px] overflow-hidden"> <Image
       src="/shares.webp"
       alt="YPA Shares"
       fill
       priority
       className="object-cover"
     />

```
    <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-sky-700/60" />

    <Container className="relative z-10 flex h-full items-center justify-center">
      <div className="max-w-4xl text-center text-white">
        <span className="inline-block rounded-full bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] backdrop-blur-md">
          Ownership & Investment
        </span>

        <h1 className="mt-6 text-5xl font-bold md:text-7xl">
          Invest In Shares
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
          Become a shareholder and grow your wealth through ownership,
          dividends, and long-term value appreciation.
        </p>
      </div>
    </Container>
  </section>

  {/* Introduction */}
  <section className="bg-white py-20">
    <Container>
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-5xl font-bold text-sky-500">
          Own A Piece Of The Future
        </h2>

        <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-red-700" />

        <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-600">
          Share ownership allows members to participate in the growth and
          success of YPA Wealth Depot. Every share purchased strengthens
          your financial position while contributing to the growth of the
          organisation.
        </p>
      </div>

      {/* Share Value Card */}
      <div className="mx-auto mt-16 max-w-4xl rounded-3xl bg-gradient-to-r from-sky-500 to-blue-700 p-12 text-center text-white shadow-2xl">
        <h3 className="text-xl font-semibold uppercase tracking-wider">
          Current Share Value
        </h3>

        <p className="mt-6 text-6xl font-bold">
          UGX 100,000
        </p>

        <p className="mt-4 text-lg text-blue-100">
          Per Share
        </p>
      </div>

      {/* Benefits */}
      <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <PieChart className="text-sky-500" size={45} />
          <h3 className="mt-5 text-xl font-bold">
            Ownership Rights
          </h3>
          <p className="mt-3 text-slate-600">
            Become part owner and participate in the organisation's growth.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <TrendingUp className="text-sky-500" size={45} />
          <h3 className="mt-5 text-xl font-bold">
            Wealth Creation
          </h3>
          <p className="mt-3 text-slate-600">
            Build long-term financial value through share ownership.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <ShieldCheck className="text-sky-500" size={45} />
          <h3 className="mt-5 text-xl font-bold">
            Secure Investment
          </h3>
          <p className="mt-3 text-slate-600">
            Invest confidently in a structured and member-focused system.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <Landmark className="text-sky-500" size={45} />
          <h3 className="mt-5 text-xl font-bold">
            Dividends
          </h3>
          <p className="mt-3 text-slate-600">
            Eligible members may benefit from dividend distributions.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <Users className="text-sky-500" size={45} />
          <h3 className="mt-5 text-xl font-bold">
            Community Growth
          </h3>
          <p className="mt-3 text-slate-600">
            Support collective wealth creation and community development.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <CheckCircle className="text-sky-500" size={45} />
          <h3 className="mt-5 text-xl font-bold">
            Flexible Purchase
          </h3>
          <p className="mt-3 text-slate-600">
            Purchase shares gradually and build your portfolio over time.
          </p>
        </div>
      </div>

      {/* Examples */}
      
    </Container>
  </section>

  <div className="mt-20 rounded-3xl bg-slate-50 p-10 shadow-xl">
  <h3 className="text-center text-3xl font-bold text-slate-900">
    Share Investment Calculator
  </h3>

  <div className="mt-8 grid gap-8 md:grid-cols-3">
    <div className="rounded-2xl bg-white p-6 text-center shadow">
      <h4 className="font-semibold">10 Shares</h4>
      <p className="mt-3 text-3xl font-bold text-sky-500">
        UGX 1,000,000
      </p>
    </div>

    <div className="rounded-2xl bg-white p-6 text-center shadow">
      <h4 className="font-semibold">25 Shares</h4>
      <p className="mt-3 text-3xl font-bold text-sky-500">
        UGX 2,500,000
      </p>
    </div>

    <div className="rounded-2xl bg-white p-6 text-center shadow">
      <h4 className="font-semibold">50 Shares</h4>
      <p className="mt-3 text-3xl font-bold text-sky-500">
        UGX 5,000,000
      </p>
    </div>
  </div>
</div>

  {/* CTA */}
  <section className="relative overflow-hidden py-24">
    <Image
      src="/cta shares.webp"
      alt="Invest In Shares"
      fill
      className="object-cover"
    />

    <div className="absolute inset-0 bg-blue-950/85" />

    <Container>
      <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
        <h2 className="text-4xl font-bold md:text-6xl">
          Start Investing Today
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85">
          Purchase shares today and become part of a growing community of
          investors building a stronger financial future.
        </p>

        <button className="mt-10 rounded-full bg-sky-500 px-10 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600">
          Buy Shares Now
        </button>
      </div>
    </Container>
  </section>
</>

    );
  }
