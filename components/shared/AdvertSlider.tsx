import Image from "next/image";

export default function NewsletterCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Image */}
      <Image
        src="/membership hero.webp"
        alt="YPA Wealth Depot"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* CTA */}
        <p className="mx-auto max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
          Stay connected with YPA Wealth Depot and receive the latest news,
          announcements, events, and opportunities.
        </p>

        <button
          type="button"
          className="mt-10 rounded-full bg-sky-500 px-10 py-4 font-semibold text-white shadow-lg transition hover:bg-sky-600"
        >
          Subscribe For Updates
        </button>
      </div>
    </section>
  );
}