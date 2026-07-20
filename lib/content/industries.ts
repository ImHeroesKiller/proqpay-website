export type Industry = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  painPoints: string[];
  howWeHelp: string[];
  expectedResults: string[];
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    summary:
      "Multi-site workforce, shift operations, and production-aligned staffing support.",
    description:
      "Manufacturing organizations need reliable people operations across plants and shifts. MSG supports workforce readiness, supervision models, and technology-enabled payroll operations.",
    painPoints: [
      "Shift and multi-site staffing is complex",
      "Supervision quality varies by plant",
      "Recruitment lag affects production readiness",
      "Payroll and compliance pressure rises with headcount",
    ],
    howWeHelp: [
      "Workforce outsourcing and field supervision models",
      "Recruitment and onboarding support for operational roles",
      "Operational SOPs and escalation structures",
      "ProQPay for payroll processing and disbursement control",
    ],
    expectedResults: [
      "More consistent plant workforce readiness",
      "Clearer multi-site operational accountability",
      "Reduced internal HR overload at scale",
      "Stronger payroll operating discipline",
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    summary:
      "Store networks, high turnover roles, and distributed operations support.",
    description:
      "Retail operations require fast hiring, flexible staffing, and consistent processes across outlets. MSG helps stabilize workforce operations and back-office support.",
    painPoints: [
      "High turnover creates constant hiring pressure",
      "Outlet performance depends on staffing reliability",
      "Admin and sales support capacity fluctuates",
      "Multi-location control is difficult to standardize",
    ],
    howWeHelp: [
      "Volume recruitment and deployment support",
      "Admin and sales process outsourcing options",
      "Standardized operational routines across locations",
      "Payroll infrastructure through ProQPay where needed",
    ],
    expectedResults: [
      "Faster outlet staffing cycles",
      "More stable support capacity",
      "Better process consistency across stores",
      "Improved operating visibility for leadership",
    ],
  },
  {
    slug: "construction-engineering",
    title: "Construction & Engineering",
    summary:
      "Project-based teams, engineering talent, and site-aware operations support.",
    description:
      "Construction and engineering projects depend on specialized skills and mobile teams. MSG supports engineering outsourcing, project staffing, and operational coordination.",
    painPoints: [
      "Specialized talent is hard to secure on timeline",
      "Project teams move across sites frequently",
      "Supervision and reporting are fragmented",
      "Cost of fixed headcount can be inefficient",
    ],
    howWeHelp: [
      "Engineering outsourcing and flexible team models",
      "Project-aligned recruitment and deployment",
      "Hybrid supervision and escalation structures",
      "Workforce process discipline for multi-site projects",
    ],
    expectedResults: [
      "Faster project staffing for critical skills",
      "More flexible delivery capacity",
      "Clearer site-to-HO coordination",
      "Reduced operational friction during ramp-up",
    ],
  },
  {
    slug: "logistics",
    title: "Logistics",
    summary:
      "Distributed workforce operations for warehouse, fleet, and network support roles.",
    description:
      "Logistics businesses run on punctuality and coverage. MSG supports workforce readiness, operational supervision, and process reliability for distributed teams.",
    painPoints: [
      "Coverage gaps disrupt network performance",
      "High-volume roles require continuous hiring",
      "Field supervision is hard to standardize",
      "Payroll accuracy matters at scale",
    ],
    howWeHelp: [
      "Workforce planning and deployment for network roles",
      "Field and hybrid supervision models",
      "Back-office process support where needed",
      "ProQPay-enabled payroll operating discipline",
    ],
    expectedResults: [
      "More reliable coverage for operational roles",
      "Stronger multi-location supervision",
      "Lower process noise for central teams",
      "Improved payroll cycle reliability",
    ],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    summary:
      "Specialized support, admin outsourcing, and technology-enabled operations.",
    description:
      "Professional services firms need controlled growth without unnecessary fixed overhead. MSG supports admin outsourcing, IT support models, and specialized staffing.",
    painPoints: [
      "High-cost teams absorb low-value admin work",
      "Support functions scale unevenly",
      "IT and security operations need structure",
      "Confidential processes require discipline",
    ],
    howWeHelp: [
      "Business process and admin outsourcing",
      "IT infrastructure and managed security support",
      "Flexible professional staffing models",
      "Technology products such as ProQPay for payroll control",
    ],
    expectedResults: [
      "Cleaner separation of core and support work",
      "More predictable support operations",
      "Flexible capacity for growth phases",
      "Better process and payroll governance",
    ],
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    summary:
      "Controlled operations, compliance awareness, and reliable support capacity.",
    description:
      "Financial services organizations require disciplined operations, careful process handling, and dependable support functions. MSG provides structured workforce and operations support with compliance-aware practices.",
    painPoints: [
      "Support processes must meet strict control expectations",
      "Compliance tasks create recurring operational load",
      "Specialized roles are competitive to fill",
      "Operational documentation must withstand review",
    ],
    howWeHelp: [
      "Controlled BPO and admin process delivery",
      "Recruitment support for operational and specialized roles",
      "IT and security operations assistance",
      "Payroll process discipline through ProQPay where required",
    ],
    expectedResults: [
      "More reliable support process execution",
      "Stronger operational documentation habits",
      "Better staffing readiness for critical roles",
      "Improved control over workforce and payroll cycles",
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((item) => item.slug === slug);
}

export const industrySlugs = industries.map((item) => item.slug);
