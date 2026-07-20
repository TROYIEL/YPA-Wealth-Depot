"use client";

import { useEffect } from "react";
import Container from "@/components/ui/Container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-slate-50 py-24 min-h-[60vh] flex items-center">
      <Container>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 text-center shadow-sm">
          <p className="text-red-600 font-semibold tracking-widest uppercase text-sm">Error</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-black text-slate-900">Something went wrong</h1>
          <p className="mt-4 text-slate-600">
            An unexpected issue occurred. Please try again.
          </p>
          <button
            onClick={reset}
            className="mt-8 rounded-full bg-slate-900 px-6 py-3 text-white font-semibold hover:bg-slate-700 transition"
          >
            Try again
          </button>
        </div>
      </Container>
    </section>
  );
}
