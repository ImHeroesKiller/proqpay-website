# Content Update Guide — MSG Website

Most visitor-facing content is centralized. Prefer editing data files over page components.

## Primary files

| Area | File |
| --- | --- |
| Company name, contact, hero, placeholders | `lib/site-config.ts` |
| About, pillars, values, careers values, open roles | `lib/content/about.ts` |
| Services (all four core services) | `lib/content/services.ts` |
| Industries | `lib/content/industries.ts` |
| Navigation + footer links | `lib/content/navigation.ts` |
| FAQ | `lib/content/faq.ts` |
| ProQPay product copy | `lib/content/proqpay.ts` |
| Blog/news MDX | `content/blog/*.mdx` |
| Guides MDX | `content/guides/*.mdx` |

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

Use placeholders and document them in `UNVERIFIED-INFORMATION.md`.
