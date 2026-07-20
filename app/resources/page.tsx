import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { buildMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, FileText, HelpCircle } from "lucide-react";

export const metadata = buildMetadata({
  title: "Resources",
  description:
    "MSG resources: workforce, outsourcing, payroll, compliance, technology, and operations insights.",
  path: "/resources",
});

const resources = [
  {
    title: "Blog",
    description:
      "Insights on workforce, outsourcing, payroll, compliance, technology, and operations.",
    href: "/resources/blog",
    icon: FileText,
  },
  {
    title: "Guides",
    description:
      "Practical guidance for Indonesian workforce and payroll operating models.",
    href: "/resources/guides",
    icon: BookOpen,
  },
  {
    title: "FAQ",
    description: "Answers about MSG services, ProQPay, and how we work with enterprises.",
    href: "/resources/faq",
    icon: HelpCircle,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources"
        description="Knowledge for HR, operations, finance, and technology leaders building reliable workforce operations."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" },
        ]}
      />
      <section className="section-padding">
        <Container className="grid gap-6 sm:grid-cols-3">
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
