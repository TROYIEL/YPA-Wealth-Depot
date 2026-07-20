import Container from "@/components/ui/Container";
import PageIntro from "@/components/shared/PageIntro";
import SaccoLoanCalculator from "@/components/products/SaccoLoanCalculator";

const products = [
  {
    title: "Savings Accounts",
    description:
      "Flexible savings plans for individuals and groups with competitive returns and easy access.",
  },
  {
    title: "Loans",
    description:
      "Affordable SACCO loans tailored for personal growth, education, and business expansion.",
  },
  {
    title: "Investments",
    description:
      "Structured wealth-building products to support your long-term financial goals.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        subtitle="Products"
        title="Savings, Loans, and Investment Solutions"
        description="Explore financial products designed to help members save securely, borrow affordably, and invest confidently."
        currentPage="Products"
      />

      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.title}
                className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-2xl font-bold text-slate-900">{product.title}</h3>
                <p className="mt-4 text-slate-600 leading-7">{product.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <SaccoLoanCalculator />
    </>
  );
}
