import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

interface PageIntroProps {
  subtitle: string;
  title: string;
  description: string;
  currentPage: string;
}

export default function PageIntro({
  subtitle,
  title,
  description,
  currentPage,
}: PageIntroProps) {
  return (
    <section className="bg-white py-16 border-b border-slate-200/70">
      <Container>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: currentPage },
          ]}
        />

        <SectionHeading subtitle={subtitle} title={title} description={description} />
      </Container>
    </section>
  );
}
