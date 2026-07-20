import Link from "next/link";
import type { NavLink } from "@/lib/content/navigation";

export function MegaMenu({
  columns,
  cta,
  onNavigate,
}: {
  columns: { heading: string; items: NavLink[] }[];
  cta?: { title: string; description: string; href: string };
  onNavigate?: () => void;
}) {
  return (
    <div className="absolute left-1/2 top-full z-50 w-[min(720px,calc(100vw-2rem))] -translate-x-1/2 pt-2">
      <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
        <div className="grid gap-6 p-6 sm:grid-cols-2">
          {columns.map((column) => (
            <div key={column.heading}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {column.heading}
              </p>
              <ul className="space-y-1">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className="block rounded-xl p-3 transition hover:bg-muted"
                    >
                      <div className="text-sm font-semibold text-foreground">
                        {item.title}
                      </div>
                      {item.description ? (
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {cta ? (
          <div className="border-t border-border bg-gray-bg px-6 py-4 dark:bg-muted/40">
            <Link
              href={cta.href}
              onClick={onNavigate}
              className="block rounded-xl transition hover:opacity-90"
            >
              <div className="text-sm font-semibold text-orange">{cta.title}</div>
              <p className="mt-1 text-xs text-muted-foreground">
                {cta.description}
              </p>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
