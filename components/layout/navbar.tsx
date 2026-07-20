"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNavigation } from "@/lib/content/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-border bg-background/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-background/80 backdrop-blur-sm",
      )}
    >
      <div className="container-pro flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <Logo compact />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {mainNavigation.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const isOpen = openMenu === item.title;

            if (!hasChildren) {
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-muted hover:text-foreground"
                >
                  {item.title}
                </Link>
              );
            }

            return (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.title)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-muted hover:text-foreground"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu(isOpen ? null : item.title)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setOpenMenu(null);
                  }}
                >
                  {item.title}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                {isOpen && item.children ? (
                  <div
                    className="absolute left-0 top-full z-50 w-80 rounded-2xl border border-border bg-background p-2 shadow-lg"
                    role="menu"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href + child.title}
                        href={child.href}
                        role="menuitem"
                        className="block rounded-xl px-3 py-2.5 transition hover:bg-muted"
                        onClick={() => setOpenMenu(null)}
                      >
                        <div className="text-sm font-semibold text-foreground">
                          {child.title}
                        </div>
                        {child.description ? (
                          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                            {child.description}
                          </p>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            className="bg-[#0B3A6E] text-white hover:bg-[#0a3360] hover:-translate-y-px transition-transform"
          >
            <Link href="/request-consultation">Request Consultation</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 xl:hidden">
          <ThemeToggle />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full max-w-md">
              <SheetHeader>
                <SheetTitle>
                  <Logo compact />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-1 flex-col gap-1 overflow-y-auto pb-8">
                {mainNavigation.map((item) => (
                  <div key={item.title} className="border-b border-border py-2">
                    <Link
                      href={item.href}
                      className="block px-1 py-2 text-sm font-semibold"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {item.children?.map((child) => (
                      <Link
                        key={child.href + child.title}
                        href={child.href}
                        className="block px-3 py-1.5 text-sm text-muted-foreground"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                ))}
                <div className="mt-6 space-y-2 px-1">
                  <Button
                    asChild
                    className="w-full bg-[#0B3A6E] text-white hover:bg-[#0a3360]"
                  >
                    <Link
                      href="/request-consultation"
                      onClick={() => setMobileOpen(false)}
                    >
                      Request Consultation
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>
                      Contact MSG
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
