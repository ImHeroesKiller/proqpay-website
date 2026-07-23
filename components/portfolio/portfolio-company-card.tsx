import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PortfolioCompany } from "@/lib/content/portfolio";
import {
  isStrategicInterestEnabled,
  toPublicPortfolioCard,
} from "@/lib/content/portfolio";

export function PortfolioCompanyCard({
  company,
  variant = "default",
}: {
  company: PortfolioCompany;
  variant?: "default" | "dark" | "compact";
}) {
  const card = toPublicPortfolioCard(company);
  const interestEnabled = isStrategicInterestEnabled();
  const dark = variant === "dark";

  return (
    <Card
      className={
        dark
          ? "h-full border-white/15 bg-white/5 text-white"
          : "h-full border-border"
      }
    >
      <CardHeader className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <Badge
            className={
              dark
                ? "bg-orange/20 text-orange hover:bg-orange/20"
                : "bg-orange/15 text-orange hover:bg-orange/15"
            }
          >
            {card.badge}
          </Badge>
          <Badge variant="secondary">{card.featuredLabel}</Badge>
        </div>
        <CardTitle className={dark ? "text-white" : undefined}>
          {card.name}
        </CardTitle>
        <p
          className={
            dark ? "text-sm text-white/70" : "text-sm text-muted-foreground"
          }
        >
          <span className="font-medium">Sector:</span> {card.sector}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <dl
          className={
            dark
              ? "grid gap-2 text-sm text-white/75"
              : "grid gap-2 text-sm text-muted-foreground"
          }
        >
          <div>
            <dt className="inline font-medium text-inherit">Industry Focus: </dt>
            <dd className="inline">
              {card.industryFocus.join(" & ")}
            </dd>
          </div>
          <div>
            <dt className="inline font-medium text-inherit">Established: </dt>
            <dd className="inline">{card.establishedYear}</dd>
          </div>
          <div>
            <dt className="inline font-medium text-inherit">Technology: </dt>
            <dd className="inline">
              {card.technology.join(", ")} Field Reporting System
            </dd>
          </div>
          <div>
            <dt className="inline font-medium text-inherit">Engagement: </dt>
            <dd className="inline">{card.engagement}</dd>
          </div>
        </dl>
        <p
          className={
            dark
              ? "text-sm leading-relaxed text-white/70"
              : "text-sm leading-relaxed text-muted-foreground"
          }
        >
          {card.cardDescription}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          <Button
            asChild
            size="sm"
            className={
              dark
                ? "bg-white text-[#0B3A6E] hover:bg-white/90"
                : "bg-[#0B3A6E] text-white hover:bg-[#0a3360]"
            }
          >
            <Link href={card.href}>View Portfolio Company</Link>
          </Button>
          <Button
            asChild
            size="sm"
            variant="outline"
            className={
              dark ? "border-white/30 bg-transparent text-white" : undefined
            }
          >
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
          {interestEnabled ? (
            <Button
              asChild
              size="sm"
              variant="outline"
              className={
                dark ? "border-white/30 bg-transparent text-white" : undefined
              }
            >
              <Link href={`/contact/strategic-interest?company=${card.slug}`}>
                Discuss Strategic Opportunity
              </Link>
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
