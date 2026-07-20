import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { buildMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Download, FileText, HelpCircle } from "lucide-react";

export const metadata = buildMetadata({
  title: "Resources",
  description:
    "Payroll guides, articles, FAQ, and downloads from ProQPay for HR, finance, and enterprise leaders.",
  path: "/resources",
});

const resources = [
  {
    title: "Blog",
    description: "Insights on enterprise payroll, compliance, and operating models.",
    href: "/resources/blog",
    icon: FileText,
  },
  {
    title: "Payroll Guide",
    description: "Practical guidance for Indonesian payroll cycle design and controls.",
    href: "/resources/guides",
    icon: BookOpen,
  },
  {
    title: "FAQ",
    description: "Answers to common questions from HR, finance, and operations leaders.",
    href: "/resources/faq",
    icon: HelpCircle,
  },
  {
    title: "Downloads",
    description: "Brochures and materials for internal evaluation. Content Coming Soon.",
    href: "/resources/downloads",
    icon: Download,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources"
        description="Knowledge for enterprise payroll leaders—articles, guides, FAQs, and downloadable materials."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" },
        ]}
      />
      <section className="section-padding">
        <Container className="grid gap-6 sm:grid-cols-2">
          {resources.map((resource) => (
            <Link key={resource.href} href={resource.href}>
              <Card className="h-full transition hover:-translate-y-0.5 hover:border-orange/40">
                <CardHeader>
                  <resource.icon className="h-5 w-5 text-orange" />
                  <CardTitle className="mt-3">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange">
                    Open <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Container>
      </section>
    </>
  );
}
