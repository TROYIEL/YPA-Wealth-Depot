import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock3, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import AdvertSlider from "@/components/shared/AdvertSlider";

const articles = [
  {
    id: 1,
    title: "YPA Wealth Depot Launches New Digital Savings Platform",
    summary:
      "Members can now save, invest and monitor their finances securely using our newly launched digital platform.",
    image: "/app.webp",
    category: "News",
    publishedAt: "2026-07-07",
    readTime: "5 min read",
    slug: "digital-savings-platform",
    content: [
      "YPA Wealth Depot has officially launched a new digital savings platform designed to make saving, investing and financial management easier for its members.",
      "The new platform gives members a convenient way to monitor their finances and access important financial services from wherever they are.",
      "Through the platform, members can keep track of their savings, review their financial activities and stay connected with YPA Wealth Depot.",
      "The initiative is part of YPA Wealth Depot's continued commitment to using technology to improve the financial experience of its members.",
      "Members are encouraged to explore the new platform and take advantage of the available digital financial services.",
    ],
  },

  {
    id: 2,
    title: "Financial Literacy Workshop for Young Entrepreneurs",
    summary:
      "Over 500 young entrepreneurs attended a financial literacy workshop focused on investments and wealth creation.",
    image: "/work.webp",
    category: "Events",
    publishedAt: "2026-07-05",
    readTime: "4 min read",
    slug: "financial-literacy",
    content: [
      "More than 500 young entrepreneurs participated in a financial literacy workshop focused on investment, saving and wealth creation.",
      "The workshop provided participants with practical knowledge on how to manage money, identify investment opportunities and build sustainable businesses.",
      "Participants also had the opportunity to interact with financial experts and learn from real-world experiences.",
      "YPA Wealth Depot remains committed to empowering young people with the financial knowledge needed to make informed decisions.",
    ],
  },

  {
    id: 3,
    title: "Loan Approval Process Now Faster Than Ever",
    summary:
      "Our improved digital workflow now reduces loan approval time while maintaining security and transparency.",
    image: "/loans.webp",
    category: "News",
    publishedAt: "2026-07-01",
    readTime: "3 min read",
    slug: "loan-process",
    content: [
      "YPA Wealth Depot has improved its loan processing workflow to make loan applications faster and more convenient for members.",
      "The improved process uses digital tools to reduce unnecessary delays while maintaining strong security and transparency.",
      "Members can now expect a smoother experience when applying for financial support through YPA Wealth Depot.",
      "The improvement forms part of the organization's commitment to providing accessible and member-focused financial services.",
    ],
  },
];

export default async function NewsDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find(
    (article) => article.slug === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative flex min-h-125 items-center justify-center overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">

          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] backdrop-blur-md">
            {article.category}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            {article.title}
          </h1>

          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-200">
            <div className="flex items-center gap-2">
              <CalendarDays size={17} />
              {format(
                new Date(article.publishedAt),
                "MMM dd, yyyy"
              )}
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={17} />
              {article.readTime}
            </div>
          </div>

        </div>
      </section>

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-6 py-16">

        {/* Back Button */}
        <Link
          href="/news"
          className="mb-10 inline-flex items-center gap-2 font-semibold text-sky-600"
        >
          <ArrowLeft size={18} />
          Back to News
        </Link>

        {/* Summary */}
        <p className="text-xl font-medium leading-9 text-slate-700 md:text-2xl">
          {article.summary}
        </p>

        {/* Divider */}
        <div className="my-10 h-px bg-slate-200" />

        {/* Content */}
        <div className="space-y-7 text-lg leading-9 text-slate-700">
          {article.content.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </div>

        <AdvertSlider/>

      </article>

    </main>
  );
}