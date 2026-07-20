# ProQPay Corporate Website

Official enterprise website for **ProQPay** — Indonesia’s payroll processing, disbursement, compliance, and payroll working capital platform.

Visual direction: Stripe × Workday × SAP — navy authority, orange accent, generous whitespace, restrained motion.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn-style Radix primitives
- Framer Motion (minimal)
- Lucide icons
- MDX (blog + guides via `gray-matter` + `next-mdx-remote`)
- next-themes (dark mode)
- Zod + React Hook Form
- pnpm
- Docker (standalone output)

## Quick start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

## Environment

Copy `.env.example`:

```bash
NEXT_PUBLIC_SITE_URL=https://proqpay.id
```

## Docker

```bash
docker compose up --build
```

Runs production on port `3000`.

## Architecture

```
Browser
  └── Next.js 15 App Router (RSC by default)
        ├── layout (fonts, theme, nav, footer, org JSON-LD)
        ├── marketing pages (Server Components)
        ├── client islands (nav, theme, forms, counters, motion)
        ├── MDX content (blog/guides)
        └── /api/contact (validated form, email placeholder)
```

### Folder structure

```
app/                 # routes, SEO, API
components/
  layout/            # navbar, mega menu, footer, theme
  sections/          # home & reusable page bands
  shared/            # page hero, cards, stats, etc.
  forms/             # contact + demo
  ui/                # design-system primitives
content/             # MDX blog + guides
lib/                 # site config, content models, seo, mdx
public/brand/        # logos from Downloads
```

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home |
| `/solutions`, `/solutions/[slug]` | Solutions hub + 6 details |
| `/industries`, `/industries/[slug]` | Industries hub + 6 details |
| `/platform` | Platform modules (anchored) |
| `/about` | Story, mission, vision, values, timeline |
| `/resources/*` | Blog, guides, FAQ, downloads |
| `/contact`, `/request-demo` | Lead capture |
| `/privacy`, `/terms` | Legal placeholders |

## Components (high level)

- Layout: `Navbar`, `MegaMenu`, `Footer`, `ThemeToggle`, `Logo`
- Sections: Hero, Trust logos, Features, Stats, Solutions overview, Why ProQPay, Timeline, Testimonials, FAQ, CTA
- Shared: PageHero, SectionTitle, FeatureCard, Statistic/Counter, DashboardMockup, ComingSoon, JsonLd, FadeIn
- Forms: ContactForm, DemoForm

## Brand assets

Logos sourced from:

- `~/Downloads/logo-proqpay.png`
- `~/Downloads/logo-proqpay.svg`

Copied to `public/brand/`. Navbar uses a theme-aware wordmark component preserving the orange **Q**.

## SEO checklist

- [x] Unique titles/descriptions via `buildMetadata`
- [x] Open Graph + Twitter cards
- [x] Canonical URLs
- [x] `robots.ts` + `sitemap.ts`
- [x] Organization + WebSite JSON-LD
- [x] FAQ / Article / Breadcrumb schemas where relevant
- [x] Dynamic OG image (`app/opengraph-image.tsx`) + static `public/og/og-default.png`

## Performance checklist

- [x] Server Components by default
- [x] `next/font` for Manrope + Inter
- [x] Minimal Framer Motion + reduced-motion support
- [x] Standalone Docker output
- [x] No external CMS runtime dependency

## Contact form

- Validation: Zod + React Hook Form
- Endpoint: `POST /api/contact`
- Current behavior: validates, honeypot-filters, logs payload (email provider stub)
- Success UI shown in form

## Login

Navbar **Login** points to `https://app.proqpay.id` (placeholder until the app is live).

## Placeholders

Unavailable content uses elegant **Content Coming Soon** blocks — never Lorem Ipsum.

## Future improvements

- Indonesian locale (`next-intl`)
- Production email (Resend/SendGrid) + CRM webhook
- Real client logos & testimonials
- Live product screenshots
- Analytics with consent
- Security/compliance certificate pages
- Full legal copy

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Local development |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | TypeScript `--noEmit` |
| `pnpm format` | Prettier |

## License

Proprietary — ProQPay. All rights reserved.
