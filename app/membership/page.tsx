import Container from "@/components/ui/Container";
import PageIntro from "@/components/shared/PageIntro";

const steps = [
  "Complete a membership application form.",
  "Submit identification and onboarding details.",
  "Make the minimum share contribution.",
  "Activate your account and start saving.",
];

export default function MembershipPage() {
  return (
    <>
      <PageIntro
        subtitle="Membership"
        title="Join the YPA Wealth Depot SACCO"
        description="Become part of a trusted savings and credit community focused on growth, discipline, and opportunity."
        currentPage="Membership"
      />

      <section className="bg-slate-50 py-16">
        <Container>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">How to Join</h3>
            <ol className="mt-4 space-y-3 list-decimal list-inside text-slate-600">
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </Container>
      </section>
    </>
  );
}
