"use client";

import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import {
  ArrowUpRight,
  Bookmark,
  CalendarDays,
  Clock3,
  Share2,
} from "lucide-react";
import { useState } from "react";

type Article = {
  id: number;
  title: string;
  summary: string;
  image: string;
  category: string;
  publishedAt: string;
  readTime: string;
  slug: string;
};

const articles: Article[] = [
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
  },
];

function NewsCard({ article }: { article: Article }) {
  const [saved, setSaved] = useState(false);

  async function share() {
    const url = `${window.location.origin}/news/${article.slug}`;

    if (navigator.share) {
      await navigator.share({
        title: article.title,
        text: article.summary,
        url,
      });
    } else {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard");
    }
  }

  return (
    <article className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,.08)] transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_35px_90px_rgba(15,23,42,.18)]">

      <div className="absolute inset-0 rounded-[30px] bg-linear-to-br from-sky-500/10 via-transparent to-blue-500/10 opacity-0 blur-2xl transition duration-700 group-hover:opacity-100" />

      <div className="relative h-72 overflow-hidden">

        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />

        <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white backdrop-blur-xl">
          {article.category}
        </div>
      </div>

      <div className="space-y-6 p-8">

        <div className="flex items-center gap-6 text-sm text-slate-500">

          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            {format(new Date(article.publishedAt), "MMM dd, yyyy")}
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={16} />
            {article.readTime}
          </div>

        </div>

        <h3 className="text-2xl font-bold leading-tight tracking-tight transition-colors duration-300 group-hover:text-sky-600">
          {article.title}
        </h3>

        <p className="line-clamp-3 leading-8 text-slate-600">
          {article.summary}
        </p>

        <div className="flex items-center justify-between border-t border-slate-100 pt-6">

          <div className="flex gap-3">

            <button
              onClick={() => setSaved(!saved)}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition ${
                saved
                  ? "bg-sky-500 text-white"
                  : "bg-slate-100 hover:bg-sky-100 hover:text-sky-600"
              }`}
            >
              <Bookmark size={18} />
            </button>

            <button
              onClick={share}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 transition hover:bg-sky-500 hover:text-white"
            >
              <Share2 size={18} />
            </button>

          </div>

          <Link
            href={`/news/${article.slug}`}
            className="inline-flex items-center gap-3 font-semibold text-sky-600"
          >
            Read Story

            <ArrowUpRight className="transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45" />

          </Link>

        </div>

      </div>
    </article>
  );
}

export default function NewsSection() {
  return (
    <section className="bg-slate-50 py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.45em] text-sky-600">
            Stay Updated
          </span>

          <h2 className="mt-5 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Latest News & Updates
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Explore the latest announcements, member success stories,
            financial insights, and upcoming events from YPA Wealth Depot.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {articles.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
            />
          ))}

        </div>

      </div>

    </section>
  );
}