# Content Update Guide — MSG Website

Most visitor-facing content is centralized. Prefer editing data files over page components.

## Primary files

| Area | File |
| --- | --- |
| Company name, contact, hero, placeholders | `lib/site-config.ts` |
| About, pillars, values, careers values, open roles | `lib/content/about.ts` |
| Services (three pillars + sub-services) | `lib/content/services.ts` |
| Managed portfolio companies | `lib/content/portfolio.ts` |
| Industries | `lib/content/industries.ts` |
| Navigation + footer links | `lib/content/navigation.ts` |
| FAQ | `lib/content/faq.ts` |
| ProQPay product copy | `lib/content/proqpay.ts` |
| Blog/news MDX | `content/blog/*.mdx` |
| Guides MDX | `content/guides/*.mdx` |
| Chatbot knowledge | `lib/chat/knowledge.ts` + `lib/chat-system-prompt.ts` |

## Managed Portfolio

```text
Managed Portfolio
- PT Mitra Kreasi Bersama
- Strategic transformation mandate
- Confidential investor engagement
```

### Add a portfolio company

1. Append an object to `portfolioCompanies` in `lib/content/portfolio.ts`.
2. Keep marketing metrics in `unverifiedFacts` until written verification.
3. Never put financials, valuations, or client-confidential data in public fields.
4. Ensure `isManagedPortfolioPublished()` is true only after legal approval.

### Publish / unpublish portfolio

- Gate: `managedPortfolioConfig.pendingLegalApproval`
- Staging override: `NEXT_PUBLIC_MANAGED_PORTFOLIO=true`
- Investor form: `/contact/strategic-interest` (blocked with 403 when gate closed)

## Common updates

### Add a service detail FAQ

Edit `faq` array inside the service object in `lib/content/services.ts`.

### Publish a job opening

Add an object to `openPositions` in `lib/content/about.ts` with `status: "open"`.  
Do not invent openings.

### Update leadership

Fill `siteConfig.placeholders.leadership` in `lib/site-config.ts`, then wire the About page if richer layout is needed.

### Update legal numbers

Fill `siteConfig.placeholders.legal` only with verified NIB/NPWP/etc.

### Add news article

Create `content/blog/your-slug.mdx` with frontmatter (`title`, `description`, `date`, `category`).

### Change contact details

Update `siteConfig.contact` in `lib/site-config.ts`.

## Unverified information policy

Never invent:

- Leadership names
- Headcount / client counts
- Awards / certifications
- Client logos or testimonials
- Legal registration numbers
- Portfolio financials or valuations

Use placeholders and document them in `UNVERIFIED-INFORMATION.md`.
