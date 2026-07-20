import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  BarChart3,
  Calculator,
  GitBranch,
  Landmark,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Calculator,
  Banknote,
  Landmark,
  ShieldCheck,
  BarChart3,
  GitBranch,
};

export function FeatureCard({
  title,
  description,
  href,
  icon = "Calculator",
  className,
}: {
  title: string;
  description: string;
  href?: string;
  icon?: string;
  className?: string;
}) {
  const Icon = iconMap[icon] ?? Calculator;
  const content = (
    <Card
      className={cn(
        "h-full transition-all duration-200 hover:-translate-y-0.5 hover:border-orange/40 hover:shadow-sm",
        className,
      )}
    >
      <CardHeader>
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-orange/10 text-orange">
          <Icon className="h-5 w-5" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        {href ? (
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange">
            Learn more <ArrowRight className="h-4 w-4" />
          </span>
        ) : null}
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full focus-visible:rounded-2xl">
        {content}
      </Link>
    );
  }

  return content;
}
