export type Industry = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  painPoints: string[];
  howWeHelp: string[];
  expectedResults: string[];
};

/**
 * Industries we support — not a claim of named client relationships.
 * Update content carefully; do not invent case studies or logos.
 */
export const industries: Industry[] = [
  {
    slug: "technology-telecommunications",
    title: "Technology and Telecommunications",
    summary:
      "Workforce solutions and business transformation support for tech-driven organizations.",
    description:
      "Technology and telecommunications organizations need specialized talent, flexible capacity, disciplined operations, and often operating-model improvement. MSG supports technical workforce deployment, business support, technology-enabled payroll visibility, and advisory where transformation is required.",
    painPoints: [
      "Specialized technical roles are competitive to fill",
      "Project and support capacity needs fluctuate",
      "Distributed teams require consistent operating routines",
      "Payroll and contractor administration can become complex",
    ],
    howWeHelp: [
      "Engineering and IT talent deployment",
      "Strategic advisory for operating-model improvement where needed",
      "Business support for operations and customer-facing roles",
      "Managed workforce coordination where multi-site coverage matters",
      "ProQPay for payroll process visibility where needed",
    ],
    expectedResults: [
      "Faster access to technical capacity",
      "More flexible operating models",
      "Clearer support process ownership",
      "Stronger workforce and payroll visibility",
    ],
  },
  {
    slug: "construction-engineering",
    title: "Construction and Engineering",
    summary:
      "Engineering talent, project workforce, and operational improvement for construction and engineering firms.",
    description:
      "Construction and engineering projects depend on specialized skills, mobile teams, and reliable site operations. MSG supports engineering talent, project staffing, operational coordination, and advisory for performance and scale readiness.",
    painPoints: [
      "Specialized talent is hard to secure on timeline",
      "Project teams move across sites frequently",
      "Supervision and reporting are fragmented",
      "Fixed headcount can be inefficient for project cycles",
    ],
    howWeHelp: [
      "Engineering talent and flexible team models",
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
    slug: "financial-services",
    title: "Financial Services",
    summary:
      "Controlled operations, compliance-aware support, and reliable capacity.",
    description:
      "Financial services organizations require disciplined operations, careful process handling, and dependable support functions. MSG provides structured workforce and operations support with compliance-aware practices.",
    painPoints: [
      "Support processes must meet strict control expectations",
      "Compliance tasks create recurring operational load",
      "Specialized roles are competitive to fill",
      "Operational documentation must withstand review",
    ],
    howWeHelp: [
      "Business support and controlled admin process delivery",
      "Recruitment support for operational and specialized roles",
      "Managed workforce routines with clear reporting",
      "Payroll process discipline through ProQPay where required",
    ],
    expectedResults: [
      "More reliable support process execution",
      "Stronger operational documentation habits",
      "Better staffing readiness for critical roles",
      "Improved control over workforce and payroll cycles",
    ],
  },
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
    slug: "energy-utilities",
    title: "Energy and Utilities",
    summary:
      "Technical workforce, project support, and multi-location operational discipline.",
    description:
      "Energy and utilities organizations often require technical specialists, project teams, and reliable field support. MSG helps mobilize talent and structure workforce operations across locations.",
    painPoints: [
      "Technical and field roles require careful matching",
      "Project timelines depend on specialist availability",
      "Multi-location coordination is operationally demanding",
      "Reporting and compliance routines must stay consistent",
    ],
    howWeHelp: [
      "Engineering and technical talent deployment",
      "Managed workforce coordination for distributed teams",
      "Business support for administrative load",
      "Technology-enabled payroll and operational visibility",
    ],
    expectedResults: [
      "Improved readiness for technical roles",
      "Clearer project staffing pathways",
      "More structured multi-location coordination",
      "Better operational visibility for leadership",
    ],
  },
  {
    slug: "logistics-distribution",
    title: "Logistics and Distribution",
    summary:
      "Distributed workforce operations for warehouse, network, and support roles.",
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
    slug: "retail-consumer",
    title: "Retail and Consumer",
    summary:
      "Store networks, high-turnover roles, and distributed operations support.",
    description:
      "Retail operations require fast hiring, flexible staffing, and consistent processes across outlets. MSG helps stabilize workforce operations and business support capacity.",
    painPoints: [
      "High turnover creates constant hiring pressure",
      "Outlet performance depends on staffing reliability",
      "Admin and sales support capacity fluctuates",
      "Multi-location control is difficult to standardize",
    ],
    howWeHelp: [
      "Volume recruitment and deployment support",
      "Admin and sales process support options",
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
    slug: "professional-services",
    title: "Professional Services",
    summary:
      "Specialized support, admin outsourcing, and technology-enabled operations.",
    description:
      "Professional services firms need controlled growth without unnecessary fixed overhead. MSG supports admin outsourcing, specialized staffing, and payroll process discipline.",
    painPoints: [
      "High-cost teams absorb low-value admin work",
      "Support functions scale unevenly",
      "Confidential processes require discipline",
      "Specialized roles can be hard to fill quickly",
    ],
    howWeHelp: [
      "Business support and admin process delivery",
      "Flexible professional staffing models",
      "Managed workforce routines where multi-team coordination is needed",
      "Technology products such as ProQPay for payroll control",
    ],
    expectedResults: [
      "Cleaner separation of core and support work",
      "More predictable support operations",
      "Flexible capacity for growth phases",
      "Better process and payroll governance",
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((item) => item.slug === slug);
}

export const industrySlugs = industries.map((item) => item.slug);
