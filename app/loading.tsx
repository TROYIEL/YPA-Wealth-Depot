export default function Loading() {
  return (
    <section className="bg-slate-50 py-16 animate-pulse">
      <div className="max-w-7xl mx-auto px-6 space-y-6">
        <div className="h-6 w-32 rounded bg-slate-200" />
        <div className="h-10 w-2/3 rounded bg-slate-200" />
        <div className="h-4 w-full rounded bg-slate-200" />
        <div className="h-4 w-5/6 rounded bg-slate-200" />
        <div className="grid gap-4 md:grid-cols-3 mt-8">
          <div className="h-40 rounded-xl bg-slate-200" />
          <div className="h-40 rounded-xl bg-slate-200" />
          <div className="h-40 rounded-xl bg-slate-200" />
        </div>
      </div>
    </section>
  );
}
