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
          <li key={link.href + link.title}>
            {link.href.startsWith("http") ? (
              <a
                href={link.href}
                className="text-sm text-white/70 transition hover:text-white"
                rel="noopener noreferrer"
              >
                {link.title}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {link.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0B1F33] text-white">
      <Container className="section-padding">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {siteConfig.legalName} — Enterprise Workforce Solutions & Business
              Transformation Partner for Indonesian businesses.
            </p>
            <p className="mt-3 text-sm text-white/55">{siteConfig.websiteDisplay}</p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-white/40">
              Improve · Operate · Transform · Grow · Scale
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            <FooterColumn title="Company" links={footerNavigation.company} />
            <FooterColumn title="Services" links={footerNavigation.services} />
            <FooterColumn title="Portfolio" links={footerNavigation.portfolio} />
            <FooterColumn title="Products" links={footerNavigation.products} />
            <FooterColumn title="Resources" links={footerNavigation.resources} />
            <FooterColumn title="Legal" links={footerNavigation.legal} />
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-white/45">Email</p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-1 block text-sm text-white/80 hover:text-white"
            >
              {siteConfig.contact.email}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-white/45">Phone</p>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="mt-1 block text-sm text-white/80 hover:text-white"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-white/45">Office</p>
            <p className="mt-1 text-sm text-white/80">
              {siteConfig.contact.addressDetail}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex gap-4 text-white/40">
            <Link href="/privacy" className="hover:text-white/70">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/70">
              Terms
            </Link>
            <Link href="/careers" className="hover:text-white/70">
              Careers
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
