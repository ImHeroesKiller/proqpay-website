# MSG Corporate Website

Official website for **PT Mandiri Semesta Gemilang (MSG)**.

- Corporate domain: **https://www.msg-os.com**
- ProQPay app: **https://proqpay.msg-os.com**
- ProQPay login: **https://proqpay.msg-os.com/login**
- Flagship product page: `/products/proqpay`

MSG is the company. ProQPay is a product.

## Positioning

**Enterprise Workforce Solutions & Business Transformation Partner**

Three capabilities:

1. **Strategic Advisory** (featured)
2. **Workforce Solutions**
3. **Workforce Technology** (ProQPay + future products)

> Building better businesses through people, operations & technology.

## Managed Portfolio

```text
Managed Portfolio
- PT Mitra Kreasi Bersama (public)
- Strategic transformation mandate
- Confidential investor engagement
```

- Data: `lib/content/portfolio.ts` (per-company `publicationStatus` + `legalApprovalStatus`)
- Detail route: `/portfolio/mitra-kreasi-bersama`
- Strategic interest form: `/contact/strategic-interest`
- Approval metadata: [docs/LEGAL-APPROVALS.md](./docs/LEGAL-APPROVALS.md)
- Unverified metrics: [UNVERIFIED-INFORMATION.md](./UNVERIFIED-INFORMATION.md)
- Kill-switch: `NEXT_PUBLIC_MANAGED_PORTFOLIO=false`

## Brand hierarchy

```
MSG (Company)
├── Strategic Advisory
│   └── Managed Portfolio (e.g. PT Mitra Kreasi Bersama)
├── Workforce Solutions
└── Workforce Technology
    └── ProQPay
```

## Site structure

```
/
├── about
├── services
│   ├── strategic-advisory
│   ├── workforce-solutions
│   ├── workforce-outsourcing
│   ├── engineering-talent
│   ├── business-support
│   └── managed-workforce
├── portfolio
│   └── mitra-kreasi-bersama
├── technology
├── products
│   └── proqpay
├── industries
├── careers
├── news
├── faq
├── contact
│   └── strategic-interest
├── request-consultation
├── privacy
└── terms
```

## Stack

Next.js 15 · TypeScript · Tailwind CSS 4 · Framer Motion · pnpm · Vercel

## Commands

```bash
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
pnpm smoke
```

## Environment

```bash
NEXT_PUBLIC_SITE_URL=https://www.msg-os.com
NEXT_PUBLIC_PROQPAY_APP_URL=https://proqpay.msg-os.com
# Optional kill-switch for all managed portfolio public listings:
# NEXT_PUBLIC_MANAGED_PORTFOLIO=false
```

## Content & assets

- Content updates: [CONTENT-UPDATE.md](./CONTENT-UPDATE.md)
- Asset licenses: [ASSET-SOURCES.md](./ASSET-SOURCES.md)
- Unverified fields: [UNVERIFIED-INFORMATION.md](./UNVERIFIED-INFORMATION.md)

## Brand assets

Official logo source: `public/brand/logo-msg.webp` (from company-provided `logo-msg.png`).

## Deployment

Production is deployed on **Vercel** with custom domain `msg-os.com` / `www.msg-os.com`.

- Do not change MX records when updating DNS.
- Deploy only after `pnpm build` succeeds.
- Prefer preview deployments before promoting to production.
- Portfolio company claims must match `docs/LEGAL-APPROVALS.md` scope.
