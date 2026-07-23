import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { PortfolioCompany } from "@/lib/content/portfolio";
import { toPublicPortfolioCard } from "@/lib/content/portfolio";

export function HomePortfolioHighlight({
  company,
}: {
  company: PortfolioCompany;
}) {
  const card = toPublicPortfolioCard(company);

  return (
    <section className="section-padding border-b border-border bg-gray-bg dark:bg-background">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border bg-card shadow-md">
              <Image
                src={card.coverImage}
                alt={card.coverImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute left-4 top-4 rounded-xl border border-white/20 bg-white/95 p-2 shadow-sm backdrop-blur-sm dark:bg-card/95">
                <Image
                  src={card.logoImage}
                  alt={card.logoImageAlt}
                  width={96}
                  height={88}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B3A6E] dark:text-blue-300">
              Portfolio Highlight
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem]">
              Building Value Through Strategic Transformation
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              MSG works alongside selected businesses to strengthen operations,
              improve performance, develop technology, and prepare for sustainable
              growth and strategic opportunities.
            </p>

            <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-orange/15 text-orange hover:bg-orange/15">
                  {card.featuredLabel}
                </Badge>
                <Badge variant="secondary">{card.badge}</Badge>
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight">
                {card.name}
              </h3>
              <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div>
                  <dt className="inline font-medium text-foreground">Sector: </dt>
                  <dd className="inline">{card.sector}</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-foreground">
                    Industry Focus:{" "}
                  </dt>
                  <dd className="inline">{card.industryFocus.join(" & ")}</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {card.cardDescription}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  asChild
                  className="bg-[#0B3A6E] text-white hover:bg-[#0a3360]"
                >
                  <Link href={card.href}>View Portfolio Company</Link>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={card.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5"
                  >
                    Explore MKB
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link
                    href={`/contact/strategic-interest?company=${card.slug}`}
                  >
                    Discuss Strategic Opportunity
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
