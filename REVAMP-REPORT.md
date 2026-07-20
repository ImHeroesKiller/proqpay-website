# MSG Website Revamp Report

## 1. Executive Summary

PT Mandiri Semesta Gemilang’s corporate website has been revamped from a simpler product-leaning site into a premium enterprise workforce solutions platform. The live production site is **https://www.msg-os.com** (Vercel, HTTPS).

**Positioning delivered:** MSG is more than manpower — *Workforce Built for Performance* through **People · Operations · Technology**.

**Status:** Production build successful, TypeScript clean, 19 smoke routes OK, commit `88573f3` deployed to production.

## 2. Initial Audit

| Item | Finding |
| --- | --- |
| Live stack | Next.js on Vercel (not Hostinger Website Builder) |
| Domain | `msg-os.com` → `www.msg-os.com` (308), SSL active |
| Prior state | MSG corporate shell existed; messaging still partly product/ProQPay-centric; temporary wordmark logo |
| Gaps | Official logo missing, service IA incomplete, homepage missing pillars/process/industries depth, careers incomplete, limited docs |

## 3. Brand Assets Found

| Candidate | Path | Decision |
| --- | --- | --- |
| **logo-msg.png** | `~/Downloads/logo-msg.png` | **Selected** — official MSG mark (navy + orange wing) |
| logo-proqpay.png/svg | Downloads + public/brand | Retained for product only |
| Other logos (IDA, Perkasa, Perada, etc.) | Downloads | Rejected (not MSG) |

Installed:

- `public/brand/logo-msg.webp` / `.png`
- Favicons derived from logo
- Logo component uses official image (not temporary wordmark)

## 4. Design Direction

- Premium corporate, warm white background (`#FAFAF8`)
- Primary navy from logo: `#0B3A6E` / deep `#0B1930`
- Accent orange from logo wing: `#F28C28`
- Typography: Manrope (headings) + Inter (body)
- Minimal motion with `prefers-reduced-motion` respect
- No neon/crypto aesthetic

## 5. Information Architecture

```
/
├── about
├── services
│   ├── workforce-outsourcing
│   ├── engineering-talent
│   ├── business-support
│   └── managed-workforce
├── products/proqpay
├── industries (+ 8 industry pages)
├── careers
├── news
├── faq
├── contact
├── request-consultation
├── privacy
└── terms
```

Legacy service slugs permanently redirect to new IA.

## 6. Pages Implemented

- Homepage (full section set)
- About (overview, pillars, vision/mission, values, process, legal placeholders)
- Services index + 4 detail pages (challenge, solution, scope, benefits, process, industries, FAQ, CTA)
- Industries index + 8 sector pages
- Products + ProQPay product page
- Careers (values, process, empty openings, fraud warning)
- News, FAQ, Contact, Request Consultation
- Privacy, Terms, 404, robots, sitemap

## 7. Components Implemented / Updated

- Logo (official image), Navbar (sticky + CTA), Footer
- HomeHero with floating operational cards
- Contact + Consultation forms (validation, honeypot, privacy consent)
- FAQ section, CTA band, service cards, page heroes

## 8. Animation and Interaction

- Fade-in reveals, soft card hover lift, header scroll solidification
- Reduced motion media query enforced globally
- No scroll hijacking or heavy autoplay video

## 9. Responsive Implementation

- Container + section padding system
- Mobile sheet navigation
- Grid breakpoints for hero, pillars, services, process steps

## 10. Accessibility

- Skip-to-content link
- Semantic landmarks, visible focus rings
- Form labels + error alerts
- Keyboard-usable dropdowns/menus
- WCAG-oriented contrast with navy/orange on light surfaces

## 11. SEO

- Per-page metadata + canonical
- Open Graph / Twitter cards
- Organization + website JSON-LD
- FAQ schema support
- Breadcrumb JSON-LD on service pages
- Sitemap includes new routes; robots intact

## 12. Performance

- Next.js static generation for core pages
- WebP logo, image format optimization (avif/webp)
- Shared First Load JS ~102 kB in production build
- Lighthouse: run post-deploy in browser for live scores (not automated in CI yet)

## 13. Security

- No API keys in frontend
- Server-side Zod validation + honeypot
- Security headers: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`
- Privacy consent required on forms
- Contact API logs server-side only (email provider still placeholder)

## 14. Testing Results

| Check | Result |
| --- | --- |
| `pnpm typecheck` | Pass |
| `pnpm build` | Pass (43 static routes) |
| Smoke routes on production | **19/19 OK** |
| Key homepage copy live | Confirmed (`Workforce Built for Performance`, logo, CTAs) |

## 15. Deployment Details

| Item | Value |
| --- | --- |
| Platform | Vercel |
| Domain | https://www.msg-os.com · https://msg-os.com |
| Production deployment | `proqpay-website-g04k31t7o-…` Ready |
| Commit | `88573f3` |
| Rollback | Previous Ready deployments retained in Vercel |
| DNS/MX | Unchanged (no DNS edits performed) |

## 16. Before vs After

| Area | Before | After |
| --- | --- | --- |
| Logo | Temporary “MSG” wordmark | Official logo asset |
| Hero | Generic enterprise line | *Workforce Built for Performance* |
| Services | Mixed (security/IT/sales) | 4 core workforce services |
| Homepage | Partial sections | Trust strip, pillars, process, industries, capabilities, ProQPay, CTA |
| Navigation | Limited | About, Services, Industries, Products, Careers, Resources, Contact + Request Consultation |
| Careers | Coming soon cards | Full structure + fraud warning |
| Forms | Basic | Service interest, workforce fields, privacy consent |
| Docs | Minimal README | Content update, assets, unverified info docs |

## 17. Unverified Information

See `UNVERIFIED-INFORMATION.md`. Notably empty/pending:

- Leadership names
- Legal registration numbers
- Headcount / client metrics
- Named client logos & case studies
- Open job listings (intentionally empty)

## 18. Remaining Recommendations

1. Connect Resend/SendGrid for real contact delivery + rate limiting store.
2. Add licensed Indonesian professional photography.
3. Publish approved leadership and legal data when ready.
4. Add Playwright e2e in CI and Lighthouse CI budgets.
5. Optional ID/EN language switcher (structure prepared via content centralization).
6. Replace conceptual ProQPay UI with approved product screenshots.

## 19. Repository and Commit

- Repo: `https://github.com/ImHeroesKiller/proqpay-website`
- Branch: `main`
- Commit: `88573f3` — *Revamp MSG website as enterprise workforce solutions platform*

## 20. Production URL

**https://www.msg-os.com**
