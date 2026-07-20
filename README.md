# MSG Corporate Website

Official website for **PT Mandiri Semesta Gemilang (MSG)**.

- Corporate domain: **https://www.msg-os.com**
- ProQPay app: **https://proqpay.msg-os.com**
- ProQPay login: **https://proqpay.msg-os.com/login**
- Flagship product page: `/products/proqpay`

MSG is the company. ProQPay is a product.

## Positioning

**Enterprise workforce solutions** through **People · Operations · Technology**.

> More than manpower. Workforce built for performance.

## Brand hierarchy

```
MSG (Company)
└── Products
    └── ProQPay (Payroll technology product)
```

## Site structure

```
/
├── about
├── services
│   ├── workforce-outsourcing
│   ├── engineering-talent
│   ├── business-support
│   └── managed-workforce
├── products
│   └── proqpay
├── industries
├── careers
├── news
├── faq
├── contact
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
```

## Environment

```bash
NEXT_PUBLIC_SITE_URL=https://www.msg-os.com
NEXT_PUBLIC_PROQPAY_APP_URL=https://proqpay.msg-os.com
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
