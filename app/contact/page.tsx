import Container from "@/components/ui/Container";
import PageIntro from "@/components/shared/PageIntro";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <PageIntro
        subtitle="Contact"
        title="Talk to Our Team"
        description="Need support with membership, loans, or savings products? Reach out and we will guide you."
        currentPage="Contact"
      />

      <section className="bg-slate-50 py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">Office Information</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>Kampala, Uganda</li>
                <li>+256 700 000 000</li>
                <li>info@ypawealthdepot.com</li>
                <li>Mon - Fri: 8:00 AM - 5:00 PM</li>
              </ul>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
