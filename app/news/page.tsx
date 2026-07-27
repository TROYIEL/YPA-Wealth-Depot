import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  Calendar,
  ArrowRight,
  Bell,
  Newspaper,
  Megaphone,
} from "lucide-react";

export default function News() {
  const news = [
    {
      title: "YPA Launches New Fixed Deposit Product",
      date: "15 July 2026",
      image: "/news1.webp",
      category: "Products",
    },
    {
      title: "Annual General Meeting Successfully Held",
      date: "08 July 2026",
      image: "/news2.webp",
      category: "Events",
    },
    {
      title: "Membership Growth Reaches New Milestone",
      date: "01 July 2026",
      image: "/news3.webp",
      category: "Membership",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[550px] overflow-hidden">
        <Image
          src="/news-hero.webp"
          alt="News & Updates"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-sky-700/60" />

        <Container className="relative z-10 flex h-full items-center justify-center">
          <div className="max-w-4xl text-center text-white">
            <span className="inline-block rounded-full bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] backdrop-blur-md">
              Stay Informed
            </span>

            <h1 className="mt-6 text-5xl font-bold md:text-7xl">
              News & Updates
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
              Keep up with the latest announcements, events, achievements,
              products, and activities from YPA Wealth Depot.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured News */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-[450px] overflow-hidden rounded-3xl">
              <Image
                src="/featured-news.webp"
                alt="Featured News"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-600">
                Featured Story
              </span>

              <h2 className="mt-6 text-5xl font-bold text-slate-900">
                Building Financial Freedom Through Community Wealth
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                YPA Wealth Depot continues to empower members through savings,
                shares, investment opportunities and affordable loans that
                promote sustainable financial growth.
              </p>

              <button className="mt-8 flex items-center gap-2 rounded-full bg-sky-500 px-8 py-4 font-semibold text-white transition hover:bg-sky-600">
                Read More
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Latest News */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-5xl font-bold text-slate-900">
              Latest News
            </h2>

            <p className="mt-4 text-slate-600">
              Recent updates from across our branches and services.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-2"
              >
                <div className="relative h-60">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-600">
                    {item.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-slate-500">
                    <Calendar size={18} />
                    {item.date}
                  </div>

                  <Link
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-sky-500"
                  >
                    Read More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Announcements */}
      {/* Announcements */}
<section className="bg-white py-24">
  <Container>
    <div className="text-center">
      <span className="rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-600">
        Important Updates
      </span>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        Latest Announcements
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
        Stay informed about important notices, opportunities, branch updates,
        member programmes, and organisational developments.
      </p>
    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-3">
      {/* Announcement 1 */}
      <div className="group rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
            Active
          </span>

          <Bell className="text-sky-500" size={24} />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          Membership Registration Open
        </h3>

        <p className="mt-4 text-slate-600 leading-7">
          New members are invited to join YPA Wealth Depot and gain access to
          savings, loans, shares, and investment opportunities.
        </p>

        <div className="mt-6 border-t pt-4 text-sm text-slate-500">
          Posted: July 2026
        </div>
      </div>

      {/* Announcement 2 */}
      <div className="group rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700">
            Opportunity
          </span>

          <Megaphone
            className="text-amber-500"
            size={24}
          />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          Share Purchase Campaign
        </h3>

        <p className="mt-4 text-slate-600 leading-7">
          Members are encouraged to increase their shareholding and strengthen
          their long-term investment portfolio.
        </p>

        <div className="mt-6 border-t pt-4 text-sm text-slate-500">
          Share Value: UGX 100,000 Per Share
        </div>
      </div>

      {/* Announcement 3 */}
      <div className="group rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            New Release
          </span>

          <Newspaper
            className="text-blue-500"
            size={24}
          />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          Quarterly Performance Report
        </h3>

        <p className="mt-4 text-slate-600 leading-7">
          The latest performance report highlighting growth, savings, loans,
          and member achievements is now available.
        </p>

        <div className="mt-6 border-t pt-4 text-sm text-slate-500">
          Published This Quarter
        </div>
      </div>
    </div>

    {/* Announcement Banner */}
    <div className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-sky-500 via-blue-600 to-blue-800 p-10 text-white shadow-2xl">
      <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
        <div>
          <h3 className="text-3xl font-bold">
            Important Notice
          </h3>

          <p className="mt-3 max-w-2xl text-white/90">
            Visit any of our branches in Masaka, Mbarara, Nansana, or Gomba
            for assistance with membership, savings accounts, shares,
            investments, and loan applications.
          </p>
        </div>

        <button className="rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105">
          Contact A Branch
        </button>
      </div>
    </div>
  </Container>
</section>


      {/* Events */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-5xl font-bold text-slate-900">
              Upcoming Events
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <div className="text-5xl font-bold text-sky-500">
                12
              </div>
              <p className="mt-2 text-slate-500">August 2026</p>
              <h3 className="mt-4 text-xl font-bold">
                Financial Literacy Workshop
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <div className="text-5xl font-bold text-sky-500">
                25
              </div>
              <p className="mt-2 text-slate-500">August 2026</p>
              <h3 className="mt-4 text-xl font-bold">
                Members Networking Event
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <div className="text-5xl font-bold text-sky-500">
                10
              </div>
              <p className="mt-2 text-slate-500">September 2026</p>
              <h3 className="mt-4 text-xl font-bold">
                Investment Awareness Seminar
              </h3>
            </div>
          </div>
        </Container>
      </section>


      {/* News & Announcements */}
<section className="bg-white py-24">
  <Container>
    <div className="text-center">
      <span className="rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-600">
        Latest Updates
      </span>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        News & Announcements
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
        Stay informed with the latest developments, member opportunities,
        events and announcements from YPA Wealth Depot.
      </p>
    </div>

    <div className="mt-16 grid gap-10 lg:grid-cols-3">
      {/* News Card */}
      <article className="overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-2">
        <div className="relative h-64">
          <Image
            src="/news-membership.webp"
            alt="Membership Registration"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8">
          <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
            Membership
          </span>

          <p className="mt-4 text-sm text-slate-500">
            27 July 2026
          </p>

          <h3 className="mt-3 text-2xl font-bold text-slate-900">
            Membership Registration Now Open
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            New members can now join YPA Wealth Depot and access savings,
            loans, shares, and investment opportunities across all branches.
          </p>

          <div className="mt-8 flex gap-3">
            <button className="rounded-full bg-sky-500 px-5 py-2 font-semibold text-white hover:bg-sky-600">
              Read More
            </button>

            <button className="rounded-full border border-slate-300 px-5 py-2 font-semibold">
              Share
            </button>
          </div>
        </div>
      </article>

      {/* News Card */}
      <article className="overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-2">
        <div className="relative h-64">
          <Image
            src="/news-shares.webp"
            alt="Share Campaign"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8">
          <span className="rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700">
            Investment
          </span>

          <p className="mt-4 text-sm text-slate-500">
            20 July 2026
          </p>

          <h3 className="mt-3 text-2xl font-bold text-slate-900">
            Share Purchase Campaign Launched
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            Members are encouraged to increase their investments through
            share purchases. Each share is valued at UGX 100,000.
          </p>

          <div className="mt-8 flex gap-3">
            <button className="rounded-full bg-sky-500 px-5 py-2 font-semibold text-white hover:bg-sky-600">
              Read More
            </button>

            <button className="rounded-full border border-slate-300 px-5 py-2 font-semibold">
              Share
            </button>
          </div>
        </div>
      </article>

      {/* News Card */}
      <article className="overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-2">
        <div className="relative h-64">
          <Image
            src="/news-event.webp"
            alt="Financial Literacy Event"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Event
          </span>

          <p className="mt-4 text-sm text-slate-500">
            15 July 2026
          </p>

          <h3 className="mt-3 text-2xl font-bold text-slate-900">
            Financial Literacy Workshop Announced
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            Join our upcoming workshop and learn practical skills on
            saving, investing, budgeting and wealth creation.
          </p>

          <div className="mt-8 flex gap-3">
            <button className="rounded-full bg-sky-500 px-5 py-2 font-semibold text-white hover:bg-sky-600">
              Read More
            </button>

            <button className="rounded-full border border-slate-300 px-5 py-2 font-semibold">
              Share
            </button>
          </div>
        </div>
      </article>
    </div>
  </Container>
</section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <Image
          src="/news-cta.webp"
          alt="Stay Updated"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-blue-950/85" />

        <Container>
          <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
            <h2 className="text-4xl font-bold md:text-6xl">
              Never Miss An Update
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85">
              Stay connected with YPA Wealth Depot and receive the latest news,
              announcements, events, and opportunities.
            </p>

            <button className="mt-10 rounded-full bg-sky-500 px-10 py-4 font-semibold text-white shadow-lg transition hover:bg-sky-600">
              Subscribe For Updates
            </button>
          </div>
        </Container>
      </section>
    </>
  );
}