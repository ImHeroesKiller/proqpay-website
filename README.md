# MSG Corporate Website

Official website for **PT Mandiri Semesta Gemilang (MSG)** — an enterprise workforce solutions company combining People, Operations, and Technology.

**Primary domain:** https://msg-os.com  
**Flagship product:** [ProQPay](https://msg-os.com/products/proqpay) (login: https://app.proqpay.id)

## Brand architecture

```
PT Mandiri Semesta Gemilang (MSG)
├── Workforce Solutions
├── Business Process Outsourcing
├── Technology & IT Solutions
├── Engineering Outsourcing
└── Products
    └── ProQPay
```

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (minimal)
- MDX content (blog/guides)
- Zod + React Hook Form
- pnpm + Docker + Vercel

## Quick start

```bash
pnpm install
pnpm dev
```

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Environment

```bash
NEXT_PUBLIC_SITE_URL=https://msg-os.com
```

## Key routes

| Route | Purpose |
|-------|---------|
| `/` | Corporate homepage |
| `/about` | Company story, vision, mission |
| `/services/*` | Six service categories |
| `/products/proqpay` | Flagship payroll product |
| `/operational-excellence` | Command center & supervision model |
| `/portfolio` | Selected project experience |
| `/careers` | Talent pool |
| `/request-consultation` | Lead form |
| `/contact` | Corporate contact |

## Legacy redirects

- `/solutions/*` → `/products/proqpay`
- `/platform` → `/products/proqpay`
- `/request-demo` → `/request-consultation?intent=proqpay-demo`

## Contact (centralized in `lib/site-config.ts`)

- Head Office: Pondok Pinang Office Center No. 22, South Jakarta
- Phone: +62 856-9766-6101
- Email: info@msg-os.com / marketing@msg-os.com
- WhatsApp: 0813-1667-1371

## Deploy

Vercel project is connected to GitHub. Push to `main` triggers production deploy.

```bash
docker compose up --build
```
