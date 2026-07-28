import Image from "next/image";
import Container from "@/components/ui/Container";
import {
  MapPin,
  Phone,
  Clock,
  Building2,
} from "lucide-react";

export default function Branches() {
  const branches = [
    {
      name: "Masaka Branch",
      location: "Masaka City",
      image: "",
    },
    {
      name: "Mbarara Branch",
      location: "Mbarara City",
      image: "",
    },
    {
      name: "Nansana Branch",
      location: "Nansana Municipality",
      image: "",
    },
    {
      name: "Gomba Branch",
      location: "Gomba District",
      image: "/",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-137.5 overflow-hidden">
        <Image
          src="/"
          alt="Our Branches"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-blue-950/95 via-blue-900/85 to-sky-700/60" />

        <Container className="relative z-10 flex h-full items-center justify-center">
          <div className="max-w-4xl text-center text-white">
            <span className="inline-block rounded-full bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] backdrop-blur-md">
              Find Us Near You
            </span>

            <h1 className="mt-6 text-5xl font-bold md:text-7xl">
              Our Branches
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
              Serving our members through a growing network of branches across
              Uganda, bringing financial services closer to your community.
            </p>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-5xl font-bold text-sky-500">
              Visit Any Of Our Branches
            </h2>

            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-red-700" />

            <p className="mt-8 text-lg leading-9 text-slate-600">
              Our branches are strategically located to provide convenient
              access to savings, shares, loans, membership services, and
              financial guidance.
            </p>
          </div>

          {/* Branch Cards */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {branches.map((branch) => (
              <div
                key={branch.name}
                className="overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-2"
              >
                <div className="relative h-56">
                  <Image
                    src={branch.image}
                    alt={branch.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <Building2
                      className="text-sky-500"
                      size={20}
                    />
                    <h3 className="text-xl font-bold">
                      {branch.name}
                    </h3>
                  </div>

                  <div className="mt-4 flex items-start gap-2 text-slate-600">
                    <MapPin
                      className="mt-1 text-sky-500"
                      size={18}
                    />
                    <span>{branch.location}</span>
                  </div>

                  <div className="mt-3 flex items-start gap-2 text-slate-600">
                    <Clock
                      className="mt-1 text-sky-500"
                      size={18}
                    />
                    <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
                  </div>

                  <div className="mt-3 flex items-start gap-2 text-slate-600">
                    <Phone
                      className="mt-1 text-sky-500"
                      size={18}
                    />
                    <span>Contact Branch</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Coverage Section */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Serving Communities Across Uganda
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-slate-600">
              Through our branches in Masaka, Mbarara, Nansana, and Gomba,
              we continue to expand financial inclusion and empower members
              through savings, investments, shares, and affordable financing.
            </p>
          </div>

          <div className="mt-14 grid gap-8 text-center md:grid-cols-4">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-5xl font-bold text-sky-500">4</h3>
              <p className="mt-2">Branches</p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-5xl font-bold text-sky-500">100%</h3>
              <p className="mt-2">Member Focused</p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-5xl font-bold text-sky-500">24/7</h3>
              <p className="mt-2">Customer Support</p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-5xl font-bold text-sky-500">Growing</h3>
              <p className="mt-2">Network</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <Image
          src="/"
          alt="Visit a Branch"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-blue-950/85" />

        <Container>
          <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
            <h2 className="text-4xl font-bold md:text-6xl">
              Visit Your Nearest Branch
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85">
              Our team is ready to help you with membership, savings, shares,
              investments, and loan services.
            </p>

            <button className="mt-10 rounded-full bg-sky-500 px-10 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600">
              Contact Us
            </button>
          </div>
        </Container>
      </section>
    </>
  );
}