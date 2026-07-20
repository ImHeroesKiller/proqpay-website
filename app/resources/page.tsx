import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { buildMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Briefcase, FileText, HelpCircle } from "lucide-react";

export const metadata = buildMetadata({
  title: "Resources",
  description: "MSG resources: news, careers, and FAQ.",
  path: "/resources",
});

const resources = [
  {
    title: "News",
    description: "Insights and updates for workforce and operations leaders.",
    href: "/news",
    icon: FileText,
  },
  {
    title: "Careers",
    description: "Join the MSG talent network across Indonesia.",
    href: "/careers",
    icon: Briefcase,
  },
  {
    title: "FAQ",
    description: "Answers about MSG services, ProQPay, and how we work.",
    href: "/faq",
    icon: HelpCircle,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources"
        description="News, careers, and answers for partners and candidates."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" },
        ]}
      />
      <section className="section-padding">
        <Container className="grid gap-6 sm:grid-cols-3">
          {resources.map((resource) => (
            <Link key={resource.href} href={resource.href}>
              <Card className="h-full transition hover:border-[#0B3A6E]/40">
                <CardHeader>
                  <resource.icon className="h-5 w-5 text-[#0B3A6E] dark:text-blue-300" />
                  <CardTitle className="mt-3">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0B3A6E] dark:text-blue-300">
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
