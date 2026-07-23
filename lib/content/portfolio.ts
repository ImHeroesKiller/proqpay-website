/**
 * Managed Portfolio — companies supported through MSG Strategic Advisory.
 *
 * LEGAL GATE: Set pendingLegalApproval to false (and obtain written approvals)
 * before enabling public managed-portfolio claims / investor CTAs.
 * Override for staging: NEXT_PUBLIC_MANAGED_PORTFOLIO=true
 */

export type PortfolioUnverifiedFact = {
  id: string;
  claim: string;
  source?: string;
};

export type PortfolioCompany = {
  slug: string;
  name: string;
  shortName: string;
  status: "managed-portfolio";
  badge: string;
  sector: string;
  industryFocus: string[];
  establishedYear: number;
  technology: string[];
  website: string;
  publicTransactionStatus: "strategic-partnership-open" | "not-disclosed";
  requiresNda: true;
  pendingLegalApproval: boolean;
  engagement: string;
  summaryId: string;
  summaryEn: string;
  heroSubheadline: string;
  cardDescription: string;
  coreCapabilities: string[];
  technologyProfile: {
    name: string;
    ownershipNote: string;
    description: string;
  };
  valueCreationAreas: string[];
  valueCreationIntro: string;
  strategicOpportunityCopy: string;
  confidentialityNotice: string;
  disclaimer: string;
  verifiedFacts: string[];
  /** Never rendered on public pages */
  unverifiedFacts: PortfolioUnverifiedFact[];
};

export const managedPortfolioConfig = {
  /**
   * Global gate for public managed-portfolio listing & investor CTAs.
   * Flip to false only after documented legal/commercial approval.
   */
  pendingLegalApproval: true,
  sectionTitle: "Managed Portfolio",
  sectionTitleId: "Portofolio yang Dikelola",
  sectionSubtitle:
    "Companies being strengthened, transformed, and prepared for sustainable growth or strategic transactions through MSG Strategic Advisory.",
  sectionSubtitleId:
    "Perusahaan yang sedang diperkuat, ditransformasi, dan dipersiapkan untuk pertumbuhan berkelanjutan maupun transaksi strategis melalui Strategic Advisory MSG.",
  pageHeroTitle: "Building Value Through Strategic Transformation",
  pageHeroDescription:
    "MSG works alongside selected businesses to strengthen operations, improve performance, develop technology, and prepare for sustainable growth or strategic opportunities.",
  valueCreationApproach: [
    {
      title: "Assess",
      description:
        "Corporate, operational, and commercial diagnostics to establish a clear baseline.",
    },
    {
      title: "Strengthen",
      description:
        "Improve operations, workforce productivity, governance, and technology foundations.",
    },
    {
      title: "Prepare",
      description:
        "Build investor readiness, partnership readiness, and documentation discipline.",
    },
    {
      title: "Engage",
      description:
        "Support confidential discussions with qualified partners where appropriate.",
    },
  ],
  generalDisclaimer:
    "Managed portfolio materials describe companies supported through MSG Strategic Advisory. They do not constitute an offer to sell securities, a binding sale mandate, investment advice, or a guarantee that any investment, merger, acquisition, or corporate transaction will be completed.",
} as const;

/**
 * Public managed portfolio is enabled only when legal gate is cleared
 * or explicitly overridden via env (for staging / approved launch).
 */
export function isManagedPortfolioPublished(): boolean {
  const env = process.env.NEXT_PUBLIC_MANAGED_PORTFOLIO;
  if (env === "true" || env === "1") return true;
  if (env === "false" || env === "0") return false;
  return !managedPortfolioConfig.pendingLegalApproval;
}

/** Investor / strategic-interest CTAs — only when portfolio is public. */
export function isStrategicInterestEnabled(): boolean {
  return isManagedPortfolioPublished();
}

export const portfolioCompanies: PortfolioCompany[] = [
  {
    slug: "mitra-kreasi-bersama",
    name: "PT Mitra Kreasi Bersama",
    shortName: "MKB",
    status: "managed-portfolio",
    badge: "MSG Managed Portfolio",
    sector: "Manpower & Brand Activation",
    industryFocus: ["FMCG", "Retail Execution"],
    establishedYear: 2009,
    technology: ["JUPITER"],
    website: "https://mkb-website-pi.vercel.app/",
    publicTransactionStatus: "strategic-partnership-open",
    requiresNda: true,
    pendingLegalApproval: true,
    engagement: "Business Transformation & Strategic Value Enhancement",
    summaryId:
      "PT Mitra Kreasi Bersama merupakan perusahaan manpower dan brand activation yang sedang dikelola dan dikembangkan melalui Strategic Advisory MSG untuk memperkuat operasional, teknologi, pertumbuhan, dan kesiapan kemitraan strategis.",
    summaryEn:
      "PT Mitra Kreasi Bersama is a manpower and brand activation company being managed and developed through MSG Strategic Advisory to strengthen its operations, technology, growth, and strategic partnership readiness.",
    heroSubheadline:
      "Manpower, field execution, and brand activation capabilities for Indonesia’s FMCG industry.",
    cardDescription:
      "MKB menyediakan tenaga lapangan dan layanan brand activation untuk industri FMCG. MSG mendukung transformasi perusahaan melalui penguatan operasional, optimalisasi model bisnis, pengembangan teknologi, perbaikan profitabilitas, dan kesiapan terhadap investor maupun mitra strategis.",
    coreCapabilities: [
      "Sales Promotion Workforce",
      "Merchandising Operations",
      "Beauty Advisor",
      "Sales Motorist",
      "Brand Activation",
      "National Field Operations",
      "Field Reporting Technology",
    ],
    technologyProfile: {
      name: "JUPITER Field Reporting System",
      ownershipNote:
        "JUPITER is presented as MKB field technology (not an MSG product).",
      description:
        "JUPITER supports field visibility through attendance monitoring, operational reporting, evidence capture, and stakeholder dashboards.",
    },
    valueCreationAreas: [
      "Corporate and operational assessment",
      "Business model optimization",
      "Contract and client portfolio review",
      "Cost and margin improvement",
      "Workforce productivity",
      "Payroll and working capital optimization",
      "Governance strengthening",
      "Technology enhancement",
      "Sales and market expansion",
      "Investor readiness",
      "Strategic partnership readiness",
      "M&A or strategic exit preparation",
    ],
    valueCreationIntro:
      "MSG is supporting MKB through a structured value-creation program designed to strengthen operational resilience, profitability, technology, governance, and strategic readiness.",
    strategicOpportunityCopy:
      "MSG welcomes confidential discussions with qualified investors, operators, and strategic partners interested in supporting the next stage of MKB’s growth and transformation.",
    confidentialityNotice:
      "Certain financial, legal, operational, client, and transaction-related information is confidential and will only be shared with qualified parties following internal review and, where required, the execution of a non-disclosure agreement.",
    disclaimer:
      "The information presented on this page is intended as a general corporate and strategic overview. It does not constitute an offer to sell securities, a binding sale mandate, investment advice, or a guarantee that any investment, merger, acquisition, or corporate transaction will be completed.",
    verifiedFacts: [
      "Company name: PT Mitra Kreasi Bersama",
      "Positioned as manpower and brand activation for FMCG",
      "Public website reference lists establishment year 2009",
      "Public website reference describes JUPITER field reporting capabilities",
      "Core service themes: SPG, merchandising, beauty advisor, sales motorist, brand activation",
    ],
    unverifiedFacts: [
      {
        id: "years-experience",
        claim: "17+ years of experience",
        source: "mkb-website-pi.vercel.app marketing claims",
      },
      {
        id: "field-workforce",
        claim: "1.000+ field personnel",
        source: "mkb-website-pi.vercel.app marketing claims",
      },
      {
        id: "city-coverage",
        claim: "30+ cities coverage",
        source: "mkb-website-pi.vercel.app marketing claims",
      },
      {
        id: "brand-partners",
        claim: "50+ brand partners",
        source: "mkb-website-pi.vercel.app marketing claims",
      },
      {
        id: "city-headcount",
        claim: "Per-city personnel counts",
        source: "mkb-website-pi.vercel.app marketing claims",
      },
      {
        id: "client-logos",
        claim: "Named client logos and brand list",
        source: "mkb-website-pi.vercel.app marketing claims",
      },
      {
        id: "jupiter-dashboard-metrics",
        claim: "Live JUPITER dashboard operational metrics",
        source: "mkb-website-pi.vercel.app marketing UI",
      },
      {
        id: "msg-mandate",
        claim:
          "Formal ownership / management mandate of MSG over MKB (requires written confirmation)",
      },
      {
        id: "transaction-mandate",
        claim:
          "Formal investment, sale, or M&A mandate status (requires written confirmation)",
      },
    ],
  },
];

export function getPublishedPortfolioCompanies(): PortfolioCompany[] {
  if (!isManagedPortfolioPublished()) return [];
  // Per-company pendingLegalApproval is informational when the global gate is open
  // via env override for staging; production should clear both flags after approval.
  return portfolioCompanies;
}

export function getPortfolioCompany(slug: string): PortfolioCompany | undefined {
  if (!isManagedPortfolioPublished()) return undefined;
  return portfolioCompanies.find((c) => c.slug === slug);
}

export function getPortfolioSlugs(): string[] {
  return getPublishedPortfolioCompanies().map((c) => c.slug);
}

/** Safe public facts only — never expose unverifiedFacts to client components that might bundle them wrongly.
 *  Server components may import this module; unverifiedFacts are for internal docs / non-rendered use.
 */
export function toPublicPortfolioCard(company: PortfolioCompany) {
  return {
    slug: company.slug,
    name: company.name,
    shortName: company.shortName,
    status: company.status,
    badge: company.badge,
    sector: company.sector,
    industryFocus: company.industryFocus,
    establishedYear: company.establishedYear,
    technology: company.technology,
    website: company.website,
    engagement: company.engagement,
    summaryEn: company.summaryEn,
    summaryId: company.summaryId,
    cardDescription: company.cardDescription,
    heroSubheadline: company.heroSubheadline,
    coreCapabilities: company.coreCapabilities,
    technologyProfile: company.technologyProfile,
    valueCreationAreas: company.valueCreationAreas,
    valueCreationIntro: company.valueCreationIntro,
    strategicOpportunityCopy: company.strategicOpportunityCopy,
    confidentialityNotice: company.confidentialityNotice,
    disclaimer: company.disclaimer,
    href: `/portfolio/${company.slug}`,
  };
}
