# Unverified Information — Needs Confirmation

The following items are intentionally incomplete or provisional. Do not invent values for production marketing claims.

| Item | Status | Where to update |
| --- | --- | --- |
| Leadership names & titles | Empty placeholder | `lib/site-config.ts` → `placeholders.leadership` |
| NIB / NPWP / SIUP | Not published | `lib/site-config.ts` → `placeholders.legal` |
| Employee headcount | Not published | `lib/site-config.ts` → `placeholders.metrics.employees` |
| Client count | Not published | `lib/site-config.ts` → `placeholders.metrics.clients` |
| Location count | Not published | `lib/site-config.ts` → `placeholders.metrics.locations` |
| Named client logos | Not used | Avoid until written approval |
| Formal case studies | Capability themes only | `lib/content/about.ts` → `operationalCapabilities` |
| Awards / certifications | Not claimed | Do not add without documents |
| Open job listings | Empty by design | `lib/content/about.ts` → `openPositions` |
| Contact person name (sales) | Present in config — verify | `lib/site-config.ts` → `contact.salesContact` |
| WhatsApp business number | Present — verify for public use | `lib/site-config.ts` → `contact.whatsapp*` |
| Vision / mission wording | Draft corporate language | `lib/content/about.ts` |
| Industry “served” claims | Framed as “industries we support” | `lib/content/industries.ts` |

## Managed Portfolio — PT Mitra Kreasi Bersama (MKB)

| Item | Status | Notes |
| --- | --- | --- |
| Public managed portfolio listing | **Pending legal approval** | `lib/content/portfolio.ts` → `managedPortfolioConfig.pendingLegalApproval` |
| Enable public listing / investor CTAs | Env override | `NEXT_PUBLIC_MANAGED_PORTFOLIO=true` after written approval |
| MSG ownership / management mandate over MKB | **Unverified** | Required before public “managed portfolio” claims |
| Right to use MKB name, logo, website materials | **Unverified** | Written brand permission needed |
| Formal investment / sale / M&A mandate | **Unverified** | Do not imply active sale without mandate |
| Authorized strategic inquiry inbox | **Unverified** | Currently routes via contact log + `info@msg-os.com` |
| 17+ years experience claim | Unverified marketing | In `unverifiedFacts` — not rendered |
| 1.000+ field workforce | Unverified marketing | Not rendered |
| 30+ cities / 50+ brand partners | Unverified marketing | Not rendered |
| Per-city headcount | Unverified marketing | Not rendered |
| Named FMCG client logos | Unverified / no logo rights | Not rendered |
| JUPITER live dashboard metrics | Unverified UI claims | Not rendered |
| Legal ownership of JUPITER IP | Assumed MKB tech; confirm | Described carefully as MKB technology |

### Safe public framing (when gate is open)

- MKB is a manpower & brand activation company (FMCG field execution).
- Established year 2009 (from public website reference; still confirm for formal materials).
- Supported through MSG Strategic Advisory for operational strengthening, technology, growth, and strategic partnership readiness.
- No financials, valuations, shareholding, or “for sale” language.

### How to publish after approval

1. Obtain written confirmation for: mandate, brand use, partner inquiry authority.
2. Set `managedPortfolioConfig.pendingLegalApproval = false` **or** deploy with `NEXT_PUBLIC_MANAGED_PORTFOLIO=true`.
3. Optionally set `portfolioCompanies[0].pendingLegalApproval = false`.
4. Re-run typecheck, build, smoke, then deploy.

## Safe claims currently used (MSG)

- Established 2019
- Company: PT Mandiri Semesta Gemilang
- Positioning: Enterprise Workforce Solutions & Business Transformation Partner
- Three pillars: Strategic Advisory · Workforce Solutions · Workforce Technology
- Product: ProQPay (MSG technology product)
- Office address and public contact channels as listed in site config
