"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MegaMenu } from "@/components/layout/mega-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNavigation } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-background/90 backdrop-blur-sm transition-shadow",
        scrolled && "border-border shadow-sm",
      )}
    >
      <div className="container-pro flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Logo compact />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNavigation.map((item) => {
            const hasMega = Boolean(item.mega);
            const hasChildren = Boolean(item.children?.length);
            const isOpen = openMenu === item.title;

            if (!hasMega && !hasChildren) {
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
                  onClick={() => setOpenMenu(isOpen ? null : item.title)}
                >
                  {item.title}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                {isOpen && item.mega ? (
                  <MegaMenu
                    columns={item.mega.columns}
                    cta={item.mega.cta}
                    onNavigate={() => setOpenMenu(null)}
                  />
                ) : null}
                {isOpen && item.children ? (
                  <div className="absolute left-0 top-full z-50 w-64 rounded-2xl border border-border bg-background p-2 shadow-sm">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-3 py-2 text-sm text-foreground/80 transition hover:bg-muted hover:text-foreground"
                        onClick={() => setOpenMenu(null)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button asChild variant="ghost">
            <a href={siteConfig.appUrl} rel="noopener noreferrer">
              Login
            </a>
          </Button>
          <Button asChild variant="accent">
            <Link href="/request-demo">Request Demo</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
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
                    {item.mega
                      ? item.mega.columns.flatMap((column) =>
                          column.items.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-3 py-1.5 text-sm text-muted-foreground"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.title}
                            </Link>
                          )),
                        )
                      : null}
                    {item.children
                      ? item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-1.5 text-sm text-muted-foreground"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.title}
                          </Link>
                        ))
                      : null}
                  </div>
                ))}
                <div className="mt-4 flex flex-col gap-2">
                  <Button asChild variant="outline">
                    <a href={siteConfig.appUrl} rel="noopener noreferrer">
                      Login
                    </a>
                  </Button>
                  <Button asChild variant="accent">
                    <Link
                      href="/request-demo"
                      onClick={() => setMobileOpen(false)}
                    >
                      Request Demo
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
