/**
 * Managed Portfolio — companies supported through MSG Strategic Advisory.
 *
 * Publication is controlled per company via publicationStatus.
 * Global env override: NEXT_PUBLIC_MANAGED_PORTFOLIO=true|false
 * (false forces all closed; true does not force draft companies public)
 */

export type PortfolioPublicationStatus =
  | "draft"
  | "pending-approval"
  | "public"
  | "archived";

export type PortfolioLegalApprovalStatus =
  | "not-requested"
  | "pending"
  | "approved"
  | "revoked";

export type PortfolioUnverifiedFact = {
  id: string;
  claim: string;
  source?: string;
};

export type PortfolioCompany = {
  slug: string;
  name: string;
  shortName: string;
  /** Public badge label */
  badge: string;
  publicationStatus: PortfolioPublicationStatus;
  legalApprovalStatus: PortfolioLegalApprovalStatus;
  sector: string;
  industryFocus: string[];
  establishedYear: number;
  technology: string[];
  website: string;
  publicTransactionStatus: "strategic-partnership-open" | "not-disclosed";
  requiresNda: true;
  engagement: string;
  summaryId: string;
  summaryEn: string;
  overview: string;
  heroSubheadline: string;
  cardDescription: string;
  featuredLabel: string;
  /** Public cover image under /public */
  coverImage: string;
  coverImageAlt: string;
  /** Brand logo under /public */
  logoImage: string;
  logoImageAlt: string;
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
  /** Internal only — never render, never pass to chatbot client bundles as public copy */
  unverifiedFacts: PortfolioUnverifiedFact[];
};

export const managedPortfolioConfig = {
  /**
   * Global default: portfolio feature is approved for production use.
   * Per-company publicationStatus still controls individual listings.
   * Env NEXT_PUBLIC_MANAGED_PORTFOLIO=false forces everything closed.
   */
  featureEnabled: true,
  sectionTitle: "Managed Portfolio",
  sectionTitleId: "Portofolio yang Dikelola",
  sectionSubtitle:
    "Businesses being strengthened through strategic advisory, operational improvement, technology, and long-term value creation.",
  sectionSubtitleId:
    "Perusahaan yang sedang diperkuat, ditransformasi, dan dipersiapkan untuk pertumbuhan berkelanjutan maupun transaksi strategis melalui Strategic Advisory MSG.",
  pageHeroTitle: "Building Value Through Strategic Transformation",
  pageHeroDescription:
    "MSG works alongside selected businesses to strengthen operations, improve performance, develop technology, and prepare for sustainable growth and strategic opportunities.",
  advisoryIntegrationCopy:
    "MSG applies its Strategic Advisory capabilities directly through selected portfolio engagements, combining operational improvement, technology, governance, growth strategy, and transaction readiness.",
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
 * Global feature flag with env override.
 * - NEXT_PUBLIC_MANAGED_PORTFOLIO=false|0 → force closed
 * - NEXT_PUBLIC_MANAGED_PORTFOLIO=true|1 → allow public companies (still per-company status)
 * - unset → use managedPortfolioConfig.featureEnabled
 */
export function isManagedPortfolioFeatureEnabled(): boolean {
  const env = process.env.NEXT_PUBLIC_MANAGED_PORTFOLIO;
  if (env === "false" || env === "0") return false;
  if (env === "true" || env === "1") return true;
  return managedPortfolioConfig.featureEnabled;
}

/** True when at least one portfolio company is publicly listable. */
export function isManagedPortfolioPublished(): boolean {
  return getPublishedPortfolioCompanies().length > 0;
}

/** Strategic interest form when feature is on and at least one public company exists. */
export function isStrategicInterestEnabled(): boolean {
  return isManagedPortfolioFeatureEnabled() && isManagedPortfolioPublished();
}

function isCompanyPubliclyVisible(company: PortfolioCompany): boolean {
  if (!isManagedPortfolioFeatureEnabled()) return false;
  return (
    company.publicationStatus === "public" &&
    company.legalApprovalStatus === "approved"
  );
}

export const portfolioCompanies: PortfolioCompany[] = [
  {
    slug: "mitra-kreasi-bersama",
    name: "PT Mitra Kreasi Bersama",
    shortName: "MKB",
    badge: "MSG Portfolio Company",
    publicationStatus: "public",
    legalApprovalStatus: "approved",
    sector: "Manpower & Brand Activation",
    industryFocus: ["FMCG", "Retail Execution"],
    establishedYear: 2009,
    technology: ["JUPITER"],
    website: "https://mkb-website-pi.vercel.app/",
    publicTransactionStatus: "strategic-partnership-open",
    requiresNda: true,
    engagement: "Business Transformation & Strategic Value Enhancement",
    featuredLabel: "Featured Portfolio Company",
    summaryId:
      "PT Mitra Kreasi Bersama merupakan perusahaan portofolio yang dikelola dan dikembangkan melalui program Strategic Advisory dan Value Creation MSG.",
    summaryEn:
      "PT Mitra Kreasi Bersama is a portfolio company managed and developed through MSG’s Strategic Advisory and Value Creation Program.",
    overview:
      "PT Mitra Kreasi Bersama is a manpower and brand activation company serving Indonesia’s FMCG and retail execution ecosystem. MKB supports field operations through trained workforce deployment, merchandising, promotion, activation, and field reporting capabilities.",
    heroSubheadline:
      "Manpower, field execution, and brand activation capabilities for Indonesia’s FMCG industry.",
    cardDescription:
      "MKB provides field workforce and brand activation capabilities for Indonesia’s FMCG sector. Through MSG’s Strategic Advisory and Value Creation Program, the company is being strengthened across operations, technology, governance, growth, and strategic readiness.",
    coverImage: "/images/portfolio/mkb/mkb-portfolio-cover.webp",
    coverImageAlt:
      "PT Mitra Kreasi Bersama field workforce and brand activation operations at FMCG events",
    logoImage: "/brand/logo-mkb.webp",
    logoImageAlt: "PT Mitra Kreasi Bersama logo",
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
        "JUPITER is MKB field technology—not an MSG product.",
      description:
        "JUPITER supports field visibility through attendance monitoring, operational reporting, evidence capture, and management dashboards.",
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
      "MSG is supporting MKB through a structured value-creation program designed to strengthen operational resilience, profitability, technology, governance, growth, and strategic readiness.",
    strategicOpportunityCopy:
      "MSG welcomes confidential discussions with qualified investors, industry operators, and strategic partners interested in supporting the next stage of MKB’s growth and transformation.",
    confidentialityNotice:
      "Certain financial, legal, operational, client, and transaction-related information is confidential and will only be shared with qualified parties following internal review and, where required, the execution of a non-disclosure agreement.",
    disclaimer:
      "The information presented on this page is intended as a general corporate and strategic overview. It does not constitute an offer to sell securities, a binding sale mandate, investment advice, or a guarantee that any investment, merger, acquisition, or corporate transaction will be completed.",
    verifiedFacts: [
      "Company name: PT Mitra Kreasi Bersama",
      "Portfolio company managed and developed through MSG Strategic Advisory and Value Creation Program",
      "Sector: Manpower & Brand Activation",
      "Industry focus: FMCG and retail execution",
      "Established year: 2009 (approved public reference)",
      "Capability themes: SPG, merchandising, beauty advisor, sales motorist, brand activation, field operations",
      "JUPITER field reporting technology (MKB technology)",
    ],
    unverifiedFacts: [
      {
        id: "years-experience",
        claim: "17+ years of experience",
        source: "third-party marketing claims",
      },
      {
        id: "field-workforce",
        claim: "1.000+ field personnel",
        source: "third-party marketing claims",
      },
      {
        id: "city-coverage",
        claim: "30+ cities coverage",
        source: "third-party marketing claims",
      },
      {
        id: "brand-partners",
        claim: "50+ brand partners",
        source: "third-party marketing claims",
      },
      {
        id: "city-headcount",
        claim: "Per-city personnel counts",
        source: "third-party marketing claims",
      },
      {
        id: "client-logos",
        claim: "Named client logos and brand list",
        source: "third-party marketing claims",
      },
      {
        id: "jupiter-dashboard-metrics",
        claim: "Live JUPITER dashboard operational metrics",
        source: "third-party marketing UI",
      },
      {
        id: "equity-ownership",
        claim:
          "Equity ownership / subsidiary relationship between MSG and MKB (not claimed publicly)",
      },
      {
        id: "financials",
        claim: "Revenue, EBITDA, profit, debt, valuation, sale price",
      },
    ],
  },
];

export function getPublishedPortfolioCompanies(): PortfolioCompany[] {
  return portfolioCompanies.filter(isCompanyPubliclyVisible);
}

export function getPortfolioCompany(slug: string): PortfolioCompany | undefined {
  const company = portfolioCompanies.find((c) => c.slug === slug);
  if (!company || !isCompanyPubliclyVisible(company)) return undefined;
  return company;
}

export function getPortfolioSlugs(): string[] {
  return getPublishedPortfolioCompanies().map((c) => c.slug);
}

/** Public card projection — excludes unverifiedFacts intentionally. */
export function toPublicPortfolioCard(company: PortfolioCompany) {
  return {
    slug: company.slug,
    name: company.name,
    shortName: company.shortName,
    badge: company.badge,
    featuredLabel: company.featuredLabel,
    sector: company.sector,
    industryFocus: company.industryFocus,
    establishedYear: company.establishedYear,
    technology: company.technology,
    website: company.website,
    engagement: company.engagement,
    summaryEn: company.summaryEn,
    summaryId: company.summaryId,
    overview: company.overview,
    cardDescription: company.cardDescription,
    heroSubheadline: company.heroSubheadline,
    coverImage: company.coverImage,
    coverImageAlt: company.coverImageAlt,
    logoImage: company.logoImage,
    logoImageAlt: company.logoImageAlt,
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

/** Chatbot-safe public facts only (no unverifiedFacts). */
export function getPortfolioChatFacts(company: PortfolioCompany): string {
  return [
    `${company.name} (${company.shortName}) is an MSG portfolio company.`,
    company.summaryEn,
    company.summaryId,
    `Sector: ${company.sector}. Focus: ${company.industryFocus.join(", ")}.`,
    `Established: ${company.establishedYear}.`,
    `Technology: ${company.technologyProfile.name} — ${company.technologyProfile.ownershipNote}`,
    `Capabilities: ${company.coreCapabilities.join("; ")}.`,
    company.valueCreationIntro,
    "Do not state MSG owns MKB or that MKB is a subsidiary unless verified.",
    "Do not provide price, valuation, financials, shareholding, or guarantee a transaction.",
    `Profile: /portfolio/${company.slug}`,
    `Website: ${company.website}`,
    "CTA: /contact/strategic-interest",
  ].join(" ");
}
