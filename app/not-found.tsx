import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-slate-50 py-24 min-h-[60vh] flex items-center">
      <Container>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 text-center shadow-sm">
          <p className="text-sky-600 font-semibold tracking-widest uppercase text-sm">404</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-black text-slate-900">Page Not Found</h1>
          <p className="mt-4 text-slate-600">
            The page you are looking for does not exist or may have been moved.
          </p>
          <Link
            href="/"
            className="inline-flex mt-8 rounded-full bg-sky-600 px-6 py-3 text-white font-semibold hover:bg-sky-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </section>
  );
}
