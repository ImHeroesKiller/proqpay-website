import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PageHero({
  title,
  description,
  breadcrumbs,
  cta,
  dark = false,
}: {
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
  cta?: { label: string; href: string };
  dark?: boolean;
}) {
  return (
    <section
      className={cn(
        "border-b border-border",
        dark
          ? "bg-navy-dark text-white"
          : "bg-gray-bg dark:bg-background",
      )}
    >
      <Container className="section-padding">
        {breadcrumbs ? (
          <Breadcrumb
            items={breadcrumbs}
            className={cn("mb-6", dark && "text-white/80")}
          />
        ) : null}
        <div className="max-w-3xl">
          <h1
            className={cn(
              "text-4xl font-bold tracking-tight sm:text-5xl",
              dark ? "text-white" : "text-foreground",
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              "mt-5 text-lg leading-relaxed",
              dark ? "text-white/80" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
          {cta ? (
            <div className="mt-8">
              <Button asChild variant={dark ? "accent" : "accent"} size="lg">
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
