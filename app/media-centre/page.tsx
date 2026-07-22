import Container from "@/components/ui/Container";
import PageIntro from "@/components/shared/PageIntro";

const updates = [
  {
    title: "Annual General Meeting Highlights",
    summary: "Review key decisions, growth milestones, and strategic priorities from the latest AGM.",
  },
  {
    title: "Member Financial Literacy Session",
    summary: "Practical guidance on budgeting, borrowing responsibly, and long-term wealth planning.",
  },
  {
    title: "Quarterly Performance Update",
    summary: "Snapshot of savings growth, loan portfolio performance, and member engagement metrics.",
  },
];

export default function MediaCentrePage() {
  return (
    <>
      <PageIntro
        subtitle="Media Centre"
        title="News, Updates, and Resources"
        description="Stay informed with official SACCO announcements, updates, and member education resources."
        currentPage="Media Centre"
      />

      <section className="bg-white py-16">
        <Container>
          <div className="space-y-4">
            {updates.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-600 leading-7">{item.summary}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
