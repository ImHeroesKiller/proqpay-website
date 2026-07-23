# Legal Approvals Metadata (Internal)

This file stores **metadata only**. Do not commit original approval letters, signatures, identity documents, shareholding records, or public links to private storage.

---

## PT Mitra Kreasi Bersama

| Field | Value |
| --- | --- |
| Company | PT Mitra Kreasi Bersama |
| Approval status | Approved |
| Publication status | Public |
| Production publication status | Active |
| Approval date | 2026-07-23 |
| Approved by | Authorized MSG commercial / legal stakeholder (internal record) |
| Original document storage | Internal company records only — not in this repository |

### Approval scope

- Public portfolio listing on MSG website
- Use of company name and approved corporate description
- Strategic partnership positioning (non-binding)
- Investor or partner inquiry flow (`/contact/strategic-interest`)
- Use of approved public website references (no unverified metrics)
- Framing as portfolio company managed and developed through MSG Strategic Advisory and Value Creation Program

### Explicitly out of scope (unless later approved)

- Equity ownership / subsidiary claims
- Client logos and named client lists
- Headcount, city, and brand-partner marketing metrics
- Financials, valuations, sale price, shareholding
- Transaction mandate details beyond general partnership readiness language

### Code control

- `lib/content/portfolio.ts` → `publicationStatus: "public"`, `legalApprovalStatus: "approved"`
- Env override: `NEXT_PUBLIC_MANAGED_PORTFOLIO=false` forces listings closed
