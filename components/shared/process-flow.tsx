import { cn } from "@/lib/utils";

export type ProcessStep = {
  step: number | string;
  title: string;
  description: string;
};

type ProcessFlowProps = {
  steps: ProcessStep[];
  /** Visual layout */
  variant?: "horizontal" | "vertical" | "cycle";
  className?: string;
  /** Accent tone */
  tone?: "navy" | "orange";
};

/**
 * Attractive multi-step process / workflow graph for pages that need a flow.
 */
export function ProcessFlow({
  steps,
  variant = "horizontal",
  className,
  tone = "navy",
}: ProcessFlowProps) {
  if (variant === "cycle") {
    return <CycleFlow steps={steps} className={className} tone={tone} />;
  }
  if (variant === "vertical") {
    return <VerticalFlow steps={steps} className={className} tone={tone} />;
  }
  return <HorizontalFlow steps={steps} className={className} tone={tone} />;
}

function stepColors(tone: "navy" | "orange") {
  return tone === "orange"
    ? {
        badge: "bg-orange text-white",
        ring: "ring-orange/25",
        line: "from-orange/60 to-orange/20",
        card: "hover:border-orange/40",
        num: "text-orange",
      }
    : {
        badge: "bg-[#0B3A6E] text-white dark:bg-blue-500",
        ring: "ring-[#0B3A6E]/20 dark:ring-blue-400/25",
        line: "from-[#0B3A6E]/50 to-[#0B3A6E]/15 dark:from-blue-400/40 dark:to-blue-400/10",
        card: "hover:border-[#0B3A6E]/40 dark:hover:border-blue-400/40",
        num: "text-[#0B3A6E] dark:text-blue-300",
      };
}

function HorizontalFlow({
  steps,
  className,
  tone,
}: {
  steps: ProcessStep[];
  className?: string;
  tone: "navy" | "orange";
}) {
  const c = stepColors(tone);
  const cols =
    steps.length <= 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : steps.length === 5
        ? "sm:grid-cols-2 lg:grid-cols-5"
        : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6";

  return (
    <ol className={cn("relative grid gap-4", cols, className)}>
      {steps.map((step, index) => (
        <li key={`${step.step}-${step.title}`} className="relative">
          {/* Connector line (desktop) */}
          {index < steps.length - 1 ? (
            <span
              className={cn(
                "pointer-events-none absolute top-7 left-[calc(50%+1.5rem)] z-0 hidden h-0.5 w-[calc(100%-1rem)] bg-gradient-to-r xl:block",
                c.line,
              )}
              aria-hidden
            />
          ) : null}
          <div
            className={cn(
              "relative z-10 flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition",
              c.card,
            )}
          >
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold shadow-sm ring-4",
                  c.badge,
                  c.ring,
                )}
              >
                {step.step}
              </span>
              <span className={cn("text-[10px] font-semibold uppercase tracking-[0.16em]", c.num)}>
                Step {step.step}
              </span>
            </div>
            <h3 className="mt-4 text-base font-semibold leading-snug">{step.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function VerticalFlow({
  steps,
  className,
  tone,
}: {
  steps: ProcessStep[];
  className?: string;
  tone: "navy" | "orange";
}) {
  const c = stepColors(tone);

  return (
    <ol className={cn("relative space-y-0", className)}>
      {steps.map((step, index) => (
        <li key={`${step.step}-${step.title}`} className="relative flex gap-4 pb-8 last:pb-0">
          <div className="flex flex-col items-center">
            <span
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold shadow-sm ring-4",
                c.badge,
                c.ring,
              )}
            >
              {step.step}
            </span>
            {index < steps.length - 1 ? (
              <span
                className={cn("mt-1 w-0.5 flex-1 min-h-[2rem] bg-gradient-to-b", c.line)}
                aria-hidden
              />
            ) : null}
          </div>
          <div
            className={cn(
              "flex-1 rounded-2xl border border-border bg-card p-5 shadow-sm transition",
              c.card,
            )}
          >
            <h3 className="text-base font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function CycleFlow({
  steps,
  className,
  tone,
}: {
  steps: ProcessStep[];
  className?: string;
  tone: "navy" | "orange";
}) {
  const c = stepColors(tone);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-[#0B3A6E]/5 p-6 sm:p-8 dark:to-blue-500/5",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange/10 blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-[#0B3A6E]/10 blur-2xl dark:bg-blue-500/10"
        aria-hidden
      />

      {/* Desktop arc / continuous loop indicator */}
      <div className="relative mb-8 hidden items-center justify-center md:flex" aria-hidden>
        <div className="flex items-center gap-1">
          {steps.map((step, i) => (
            <div key={step.step} className="flex items-center">
              <span
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ring-4",
                  c.badge,
                  c.ring,
                )}
              >
                {step.step}
              </span>
              {i < steps.length - 1 ? (
                <span className={cn("mx-1 h-0.5 w-8 bg-gradient-to-r sm:w-12", c.line)} />
              ) : (
                <span className="ml-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  ↺ improve
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <li
            key={`${step.step}-${step.title}`}
            className={cn(
              "rounded-2xl border border-border/80 bg-background/80 p-5 backdrop-blur-sm transition",
              c.card,
            )}
          >
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold",
                  c.badge,
                )}
              >
                {step.step}
              </span>
              <h3 className="font-semibold">{step.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * Layered operations diagram (command center → supervision → delivery).
 */
export function OperationsLayerGraph({
  layers,
  className,
}: {
  layers: { label: string; title: string; items: string[]; accent?: boolean }[];
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <div className="grid gap-4 lg:grid-cols-3">
        {layers.map((layer, index) => (
          <div key={layer.title} className="relative">
            {index < layers.length - 1 ? (
              <span
                className="pointer-events-none absolute top-1/2 -right-2 z-10 hidden h-0.5 w-4 bg-gradient-to-r from-orange to-transparent lg:block"
                aria-hidden
              />
            ) : null}
            <div
              className={cn(
                "h-full rounded-2xl border p-5 shadow-sm sm:p-6",
                layer.accent
                  ? "border-orange/30 bg-[#0B1F33] text-white"
                  : "border-border bg-card",
              )}
            >
              <p
                className={cn(
                  "text-[10px] font-semibold uppercase tracking-[0.18em]",
                  layer.accent ? "text-orange" : "text-orange",
                )}
              >
                {layer.label}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{layer.title}</h3>
              <ul
                className={cn(
                  "mt-4 space-y-2 text-sm",
                  layer.accent ? "text-white/75" : "text-muted-foreground",
                )}
              >
                {layer.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className={cn(
                        "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                        layer.accent ? "bg-orange" : "bg-[#0B3A6E] dark:bg-blue-300",
                      )}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Flow arrow strip for mobile context */}
      <p className="mt-4 text-center text-xs text-muted-foreground lg:hidden">
        Command Center → Hybrid Supervision → Workforce Delivery
      </p>
    </div>
  );
}
