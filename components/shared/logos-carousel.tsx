import { cn } from "@/lib/utils";

export function LogosCarousel({
  logos,
  className,
}: {
  logos: string[];
  className?: string;
}) {
  const items = [...logos, ...logos];
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-4">
        {items.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex h-16 w-40 shrink-0 items-center justify-center rounded-xl border border-border bg-card px-4 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}
