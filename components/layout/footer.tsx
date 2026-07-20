import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/shared/container";
import { footerNavigation } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/site-config";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { title: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <Container className="section-padding">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-sm font-medium text-orange">
              {siteConfig.slogan}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.linkedin}
                className="rounded-lg border border-white/10 px-2.5 py-2 text-xs font-bold text-white/70 transition hover:text-white"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href={siteConfig.social.twitter}
                className="rounded-lg border border-white/10 px-2.5 py-2 text-xs font-bold text-white/70 transition hover:text-white"
                aria-label="X"
              >
                X
              </a>
              <a
                href={siteConfig.social.instagram}
                className="rounded-lg border border-white/10 px-2.5 py-2 text-xs font-bold text-white/70 transition hover:text-white"
                aria-label="Instagram"
              >
                IG
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            <FooterColumn title="Solutions" links={footerNavigation.solutions} />
            <FooterColumn title="Industries" links={footerNavigation.industries} />
            <FooterColumn title="Platform" links={footerNavigation.platform} />
            <FooterColumn title="Company" links={footerNavigation.company} />
            <FooterColumn title="Resources" links={footerNavigation.resources} />
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-white/50">Email</p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-1 block text-sm text-white/80 hover:text-white"
            >
              {siteConfig.contact.email}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-white/50">Phone</p>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="mt-1 block text-sm text-white/80 hover:text-white"
            >
              {siteConfig.contact.phone}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-white/50">Office</p>
            <p className="mt-1 text-sm text-white/80">{siteConfig.contact.address}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white transition"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
