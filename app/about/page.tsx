import Container from "@/components/ui/Container";
import PageIntro from "@/components/shared/PageIntro";

export default function AboutPage() {
  return (
    <>
      <PageIntro
        subtitle="About"
        title="Building Sustainable Financial Growth"
        description="YPA Wealth Depot is a member-focused SACCO committed to reliable savings, affordable loans, and disciplined financial growth."
        currentPage="About"
      />

      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              <p className="mt-4 text-slate-600 leading-7">
                To create sustainable wealth and financial freedom for all members through practical SACCO products.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              <p className="mt-4 text-slate-600 leading-7">
                To empower members to achieve financial stability through innovation, member support, and responsible credit.
              </p>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
