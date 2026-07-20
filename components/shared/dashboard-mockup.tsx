import { cn } from "@/lib/utils";

export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-white/10 bg-[#0f2438] shadow-sm",
        className,
      )}
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-3 text-xs text-white/50">ProQPay Enterprise Console</span>
      </div>
      <div className="grid gap-4 p-4 sm:grid-cols-[180px_1fr]">
        <div className="hidden space-y-2 rounded-xl bg-white/5 p-3 sm:block">
          {["Overview", "Payroll Runs", "Approvals", "Disbursement", "Reports"].map(
            (item, index) => (
              <div
                key={item}
                className={cn(
                  "rounded-lg px-3 py-2 text-xs",
                  index === 0
                    ? "bg-orange/20 text-orange"
                    : "text-white/60",
                )}
              >
                {item}
              </div>
            ),
          )}
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Employees", value: "512" },
              { label: "Ready to Pay", value: "498" },
              { label: "Exceptions", value: "14" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/5 p-3"
              >
                <div className="text-[10px] uppercase tracking-wide text-white/45">
                  {stat.label}
                </div>
                <div className="mt-1 text-lg font-semibold text-white">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm font-medium text-white">Payroll Cycle</div>
              <div className="rounded-full bg-orange/20 px-2 py-0.5 text-[10px] font-semibold text-orange">
                In Review
              </div>
            </div>
            <div className="space-y-2">
              {[72, 54, 88, 41, 65, 77].map((width, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-2 w-16 rounded bg-white/10" />
                  <div className="h-2 flex-1 rounded bg-white/10">
                    <div
                      className="h-2 rounded bg-orange/80"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="text-[10px] uppercase tracking-wide text-white/45">
                Approvals
              </div>
              <div className="mt-2 space-y-2">
                <div className="h-2 rounded bg-white/10" />
                <div className="h-2 w-4/5 rounded bg-white/10" />
                <div className="h-2 w-3/5 rounded bg-orange/40" />
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="text-[10px] uppercase tracking-wide text-white/45">
                Disbursement
              </div>
              <div className="mt-2 space-y-2">
                <div className="h-2 rounded bg-white/10" />
                <div className="h-2 w-2/3 rounded bg-white/10" />
                <div className="h-2 w-1/2 rounded bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
