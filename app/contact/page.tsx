import Image from "next/image";
import Container from "@/components/ui/Container";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Building2,
} from "lucide-react";

export default function Contact() {
  const branches = [
    {
      name: "Masaka Branch",
      location: "Masaka City",
    },
    {
      name: "Mbarara Branch",
      location: "Mbarara City",
    },
    {
      name: "Nansana Branch",
      location: "Nansana Municipality",
    },
    {
      name: "Gomba Branch",
      location: "Gomba District",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[550px] overflow-hidden">
        <Image
          src="/contact-hero.webp"
          alt="Contact YPA Wealth Depot"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-sky-700/60" />

        <Container className="relative z-10 flex h-full items-center justify-center">
          <div className="max-w-4xl text-center text-white">
            <span className="inline-block rounded-full bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] backdrop-blur-md">
              Get In Touch
            </span>

            <h1 className="mt-6 text-5xl font-bold md:text-7xl">
              Contact Us
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
              We are here to assist you with membership, savings, shares,
              investments, loans, and any other enquiries about YPA Wealth
              Depot services.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Cards */}
      <section className="bg-white py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-5xl font-bold text-sky-500">
              How Can We Help?
            </h2>

            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-red-700" />

            <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-600">
              Reach out through any of the channels below and our team will
              gladly assist you.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-white p-8 text-center shadow-xl">
              <Phone
                className="mx-auto text-sky-500"
                size={45}
              />

              <h3 className="mt-5 text-xl font-bold">
                Call Us
              </h3>

              <p className="mt-3 text-slate-600">
                +256 XXX XXX XXX
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-xl">
              <Mail
                className="mx-auto text-sky-500"
                size={45}
              />

              <h3 className="mt-5 text-xl font-bold">
                Email Us
              </h3>

              <p className="mt-3 text-slate-600">
                info@ypawealthdepot.com
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-xl">
              <MapPin
                className="mx-auto text-sky-500"
                size={45}
              />

              <h3 className="mt-5 text-xl font-bold">
                Head Office
              </h3>

              <p className="mt-3 text-slate-600">
                Masaka, Uganda
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-xl">
              <Clock
                className="mx-auto text-sky-500"
                size={45}
              />

              <h3 className="mt-5 text-xl font-bold">
                Working Hours
              </h3>

              <p className="mt-3 text-slate-600">
                Monday - Friday
              </p>

              <p className="text-slate-600">
                8:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-600">
                Send A Message
              </span>

              <h2 className="mt-6 text-5xl font-bold text-slate-900">
                We do Love To Hear From You
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Whether you are interested in membership, savings accounts,
                loans, shares, investments, or general enquiries, our team is
                ready to assist.
              </p>

              <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold">
                  Why Contact Us?
                </h3>

                <ul className="mt-6 space-y-4">
                  <li>✓ Membership Information</li>
                  <li>✓ Loan Enquiries</li>
                  <li>✓ Savings Products</li>
                  <li>✓ Shares & Investments</li>
                  <li>✓ Branch Assistance</li>
                </ul>
              </div>
            </div>

            <form className="rounded-3xl bg-white p-10 shadow-xl">
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-sky-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-sky-500"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-sky-500"
                />

                <select className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-sky-500">
                  <option>Select Subject</option>
                  <option>Membership</option>
                  <option>Savings</option>
                  <option>Shares</option>
                  <option>Loans</option>
                  <option>Investments</option>
                  <option>General Enquiry</option>
                </select>

                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-sky-500"
                />

                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-full bg-sky-500 px-8 py-4 font-semibold text-white transition hover:bg-sky-600"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>

      {/* Branches */}
      <section className="bg-white py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-5xl font-bold text-slate-900">
              Visit Our Branches
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-slate-600">
              We are available through our growing network of branches across
              Uganda.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {branches.map((branch) => (
              <div
                key={branch.name}
                className="rounded-3xl bg-slate-50 p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2"
              >
                <Building2
                  className="mx-auto text-sky-500"
                  size={45}
                />

                <h3 className="mt-5 text-xl font-bold">
                  {branch.name}
                </h3>

                <p className="mt-3 text-slate-600">
                  {branch.location}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="bg-slate-50 py-20">
        <Container>
          <h2 className="mb-10 text-center text-5xl font-bold text-slate-900">
            Find Us On The Map
          </h2>

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.760689846741!2d32.5606036743997!3d0.3079553640398884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc99d12800fd%3A0x5740826cc3cf9774!2sAccess%20Building%20rubaga!5e0!3m2!1sen!2sug!4v1785157075381!5m2!1sen!2sug"
              width="100%"
              height="500"
              loading="lazy"
              className="border-0"
            />
          </div>
        </Container>
      </section>

      {/* CTA */}
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