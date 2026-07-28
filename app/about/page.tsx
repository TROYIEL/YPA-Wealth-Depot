import Image from "next/image";
import Container from "@/components/ui/Container";
import { Eye, Target } from "lucide-react";
import Leadership from "@/components/shared/Leadership";

interface AboutContentProps {
  subtitle: string;
  title: string;
  description: string;
  currentPage?: string;
  backgroundImage?: string;
}

export default function AboutContent({
  subtitle,
  title,
  description,
  currentPage = "About",
  backgroundImage = "/mission.webp",
}: AboutContentProps) {
  return (
    <>
      <section className="relative min-h-125 overflow-hidden">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 via-blue-900/80 to-blue-800/60" />

        <Container className="relative z-10 flex min-h-125 items-center justify-center">
          <div className="max-w-4xl text-center text-white">
            <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] backdrop-blur-md">
              {subtitle}
            </span>

            <h1 className="mt-6 text-5xl font-bold md:text-6xl">
              {title}
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
              {description}
            </p>

            <div className="mt-8 flex justify-center gap-2 text-sm text-white/80">
              <span>Home</span>
              <span>/</span>

              <span className="font-semibold text-yellow-400">
                {currentPage}
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-16">
              <h2 className="mt-3 text-5xl font-bold text-sky-400">
                Our Mandate
              </h2>

              <div className="mt-5 h-1 w-24 rounded-full bg-red-700"></div>

              <div className="mt-10 space-y-7 text-lg leading-9 text-slate-600">
                <p>
                  YPA Wealth Depot is a member-owned Savings and Credit
                  Cooperative dedicated to promoting financial inclusion through
                  reliable savings, affordable loans, and innovative financial
                  services that improve the economic wellbeing of our members.
                </p>

                <p>
                  We mobilize savings, provide accessible credit, and encourage
                  financial discipline while maintaining the highest standards
                  of integrity, transparency, and accountability.
                </p>

                <p>
                  Through sustainable financial solutions, strategic
                  partnerships, and member education, we empower individuals,
                  families, and businesses to build lasting wealth and achieve
                  financial security.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-blue-100 bg-blue-50 p-10">
                <div className="flex items-center gap-3">
                  <Eye className="h-8 w-8 text-sky-400" />

                  <h3 className="text-3xl font-bold text-slate-900">
                    Vision
                  </h3>
                </div>

                <p className="mt-6 text-lg leading-8 text-slate-700">
                  To create sustainable wealth and financial freedom for all
                  members.
                </p>
              </div>

              <div className="rounded-3xl bg-sky-400 p-10 text-white">
                <div className="flex items-center gap-3">
                  <Target className="h-8 w-8" />

                  <h3 className="text-3xl font-bold">
                    Mission
                  </h3>
                </div>

                <p className="mt-6 text-lg leading-8 text-blue-100">
                  To empower members to achieve financial stability through
                  innovation, client-focused savings and credit solutions while
                  promoting a culture of financial discipline and investment.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Leadership />
    </>
  );
}