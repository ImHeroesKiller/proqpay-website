export type Service = {
  slug: string;
  title: string;
  group: "workforce" | "operations" | "technology";
  summary: string;
  description: string;
  outcome: string;
  benefit: string;
  painPoints: string[];
  approach: string[];
  capabilities: string[];
  workflow: { step: number; title: string; description: string }[];
  outcomes: string[];
  industries: string[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "workforce-outsourcing",
    title: "Workforce Outsourcing",
    group: "workforce",
    summary:
      "Penyediaan dan pengelolaan tenaga kerja sesuai kebutuhan perusahaan.",
    description:
      "MSG helps enterprises plan, source, deploy, and manage workforce capacity—from administrative roles to field teams—with structured recruitment, onboarding, attendance coordination, payroll administration support, and continuity management aligned to Indonesian labor practices.",
    outcome:
      "Reliable headcount readiness with controlled deployment and ongoing operational support.",
    benefit: "Scalable staffing with structured supervision and continuity support.",
    painPoints: [
      "Hiring velocity does not match operational demand",
      "Multi-site teams are hard to supervise consistently",
      "HR capacity is stretched by volume recruitment",
      "Compliance risk grows as deployments scale",
      "Replacement and continuity are reactive rather than planned",
    ],
    approach: [
      "Structured workforce planning with the client",
      "Recruitment and assessment aligned to role requirements",
      "Onboarding and deployment with clear accountability",
      "Attendance, payroll coordination, and employee relations support",
      "Replacement readiness and service continuity routines",
    ],
    capabilities: [
      "Workforce planning and role mapping",
      "Talent sourcing, screening, and shortlisting",
      "Recruitment and interview coordination",
      "Onboarding and deployment support",
      "Attendance coordination",
      "Payroll administration support",
      "Employee relations support",
      "Operational reporting",
      "Replacement and continuity support",
    ],
    workflow: [
      {
        step: 1,
        title: "Understand",
        description: "Clarify workforce needs, locations, volumes, and SLAs.",
      },
      {
        step: 2,
        title: "Design",
        description: "Define roles, service model, and deployment timeline.",
      },
      {
        step: 3,
        title: "Mobilize",
        description: "Source, screen, onboard, and place talent.",
      },
      {
        step: 4,
        title: "Operate",
        description: "Run attendance, admin, payroll coordination, and support.",
      },
      {
        step: 5,
        title: "Measure",
        description: "Track service performance and workforce readiness.",
      },
      {
        step: 6,
        title: "Improve",
        description: "Refine processes using operational feedback.",
      },
    ],
    outcomes: [
      "Faster readiness for operational roles",
      "More consistent multi-site workforce control",
      "Reduced burden on internal HR capacity",
      "Clearer accountability for deployed teams",
      "Stronger continuity when replacements are needed",
    ],
    industries: [
      "Manufacturing",
      "Retail and Consumer",
      "Logistics and Distribution",
      "Construction and Engineering",
      "Technology and Telecommunications",
    ],
    faq: [
      {
        question: "What roles can MSG support through workforce outsourcing?",
        answer:
          "MSG supports a range of operational, administrative, and field roles based on client requirements. Scope is defined during consultation and workforce planning.",
      },
      {
        question: "Does MSG handle onboarding and ongoing administration?",
        answer:
          "Yes. Depending on the service model, MSG can support onboarding, attendance coordination, payroll administration support, employee relations, and operational reporting.",
      },
      {
        question: "How does replacement and continuity work?",
        answer:
          "MSG builds replacement readiness into the operating model so workforce continuity is managed with clear escalation and deployment routines.",
      },
    ],
  },
  {
    slug: "engineering-talent",
    title: "Engineering Talent",
    group: "workforce",
    summary:
      "Tenaga ahli dan technical workforce untuk proyek, engineering, IT, dan kebutuhan khusus.",
    description:
      "MSG provides access to engineering professionals, IT and digital talent, project-based specialists, field technical workforce, and supervisory roles—so organizations can accelerate delivery with flexible team models and structured project administration.",
    outcome: "Faster project staffing with flexible technical capacity.",
    benefit: "Specialized technical talent with flexible deployment models.",
    painPoints: [
      "Specialized engineering and IT roles are hard to fill quickly",
      "Project timelines slip due to talent gaps",
      "Fixed headcount models raise cost risk",
      "Field technical and supervisory coverage is inconsistent",
      "Project administration and reporting lack structure",
    ],
    approach: [
      "Clarify project skill requirements and delivery model",
      "Source and assess specialized engineering and technical talent",
      "Deploy flexible teams with clear project ownership",
      "Support integration with local stakeholders and operations",
      "Provide project administration and continuity support",
    ],
    capabilities: [
      "Engineering professionals",
      "IT and digital talent",
      "Project-based specialists",
      "Field technical workforce",
      "Supervisory roles",
      "Talent deployment coordination",
      "Project administration support",
    ],
    workflow: [
      {
        step: 1,
        title: "Requirement mapping",
        description: "Define skills, duration, locations, and outcomes.",
      },
      {
        step: 2,
        title: "Talent search",
        description: "Source and shortlist specialists.",
      },
      {
        step: 3,
        title: "Assessment",
        description: "Evaluate fit for project requirements.",
      },
      {
        step: 4,
        title: "Deployment",
        description: "Onboard and integrate with project teams.",
      },
      {
        step: 5,
        title: "Support",
        description: "Maintain continuity and replacement readiness.",
      },
    ],
    outcomes: [
      "Reduced time-to-staff for critical technical roles",
      "More flexible cost structures for project delivery",
      "Accelerated project staffing capacity",
      "Stronger access to specialized skills",
    ],
    industries: [
      "Construction and Engineering",
      "Energy and Utilities",
      "Manufacturing",
      "Technology and Telecommunications",
    ],
    faq: [
      {
        question: "Can MSG support short-term project talent needs?",
        answer:
          "Yes. Engineering Talent can be structured for project-based, fixed-term, or flexible deployment models depending on scope and duration.",
      },
      {
        question: "Does MSG only place engineering roles?",
        answer:
          "No. Scope may include engineering professionals, IT and digital talent, field technical workforce, and supervisory roles based on client needs.",
      },
    ],
  },
  {
    slug: "business-support",
    title: "Business Support Services",
    group: "operations",
    summary:
      "Dukungan tenaga kerja untuk administrasi, keuangan, customer service, sales support, dan fungsi pendukung lainnya.",
    description:
      "MSG provides structured business support capacity for administration, finance support, customer service, sales support, data processing, helpdesk, back-office services, and operational support—so client teams can focus on core priorities.",
    outcome:
      "Stable support capacity without expanding fixed internal headcount unnecessarily.",
    benefit: "Reliable back-office and support capacity with clear ownership.",
    painPoints: [
      "Admin work consumes high-cost internal capacity",
      "Support quality varies during peak volumes",
      "Data processing and documentation quality is inconsistent",
      "Process ownership is unclear across teams",
      "Customer and sales support coverage is hard to sustain",
    ],
    approach: [
      "Map priority processes and service levels",
      "Staff and train delivery teams to agreed SOPs",
      "Operate with reporting and issue escalation",
      "Continuously refine throughput and quality",
    ],
    capabilities: [
      "Administration support",
      "Finance support",
      "Customer service",
      "Sales support",
      "Data processing",
      "Helpdesk support",
      "Back-office services",
      "Operational support",
    ],
    workflow: [
      {
        step: 1,
        title: "Process discovery",
        description: "Identify workflows ready for structured support.",
      },
      {
        step: 2,
        title: "Service design",
        description: "Define scope, SLAs, and controls.",
      },
      {
        step: 3,
        title: "Team setup",
        description: "Staff, train, and equip the delivery team.",
      },
      {
        step: 4,
        title: "Operate",
        description: "Run daily operations with supervision.",
      },
      {
        step: 5,
        title: "Improve",
        description: "Review quality, volume, and refinements.",
      },
    ],
    outcomes: [
      "More predictable admin and back-office delivery",
      "Internal teams free for higher-value work",
      "Clearer process ownership and reporting",
      "Flexible capacity for demand peaks",
    ],
    industries: [
      "Professional Services",
      "Financial Services",
      "Retail and Consumer",
      "Manufacturing",
      "Technology and Telecommunications",
    ],
    faq: [
      {
        question: "What business support functions can MSG cover?",
        answer:
          "Typical scope includes administration, finance support, customer service, sales support, data processing, helpdesk, and other back-office functions agreed in the service model.",
      },
      {
        question: "Can support capacity scale up during peak periods?",
        answer:
          "Yes. Service models can be designed with flexible capacity for volume peaks, subject to lead time and role requirements.",
      },
    ],
  },
  {
    slug: "managed-workforce",
    title: "Managed Workforce Operations",
    group: "operations",
    summary:
      "Pengelolaan workforce secara menyeluruh dari sourcing hingga reporting dan performance monitoring.",
    description:
      "MSG delivers end-to-end workforce operations management—covering governance, service-level monitoring, workforce analytics, multi-location coordination, issue management, performance reporting, and continuous improvement—so people operations run with discipline and visibility.",
    outcome:
      "A managed operating model that connects workforce delivery, control, and improvement.",
    benefit: "End-to-end workforce governance with measurable operational visibility.",
    painPoints: [
      "Workforce operations are fragmented across vendors and teams",
      "Service performance is hard to measure consistently",
      "Multi-location coordination lacks a single operating rhythm",
      "Issue management is reactive",
      "Leadership lacks clear workforce performance visibility",
    ],
    approach: [
      "Define governance and service operating model",
      "Integrate sourcing, deployment, and administration workflows",
      "Monitor service levels and operational KPIs",
      "Coordinate multi-location execution and issue handling",
      "Report performance and improve continuously",
    ],
    capabilities: [
      "End-to-end workforce operations",
      "Operational governance",
      "Service-level monitoring",
      "Workforce analytics",
      "Multi-location coordination",
      "Issue management",
      "Performance reporting",
      "Continuous improvement routines",
    ],
    workflow: [
      {
        step: 1,
        title: "Understand",
        description: "Assess workforce and operational requirements.",
      },
      {
        step: 2,
        title: "Design",
        description: "Design the managed service model and controls.",
      },
      {
        step: 3,
        title: "Mobilize",
        description: "Deploy teams, routines, and reporting cadence.",
      },
      {
        step: 4,
        title: "Operate",
        description: "Run day-to-day workforce administration and support.",
      },
      {
        step: 5,
        title: "Measure",
        description: "Monitor SLAs, issues, and workforce performance.",
      },
      {
        step: 6,
        title: "Improve",
        description: "Use operational data to refine the model.",
      },
    ],
    outcomes: [
      "Clearer ownership of workforce operations",
      "Better multi-location coordination",
      "Stronger visibility for leadership",
      "More disciplined issue handling and reporting",
      "Continuous improvement grounded in operating data",
    ],
    industries: [
      "Manufacturing",
      "Logistics and Distribution",
      "Retail and Consumer",
      "Construction and Engineering",
      "Energy and Utilities",
    ],
    faq: [
      {
        question: "How is Managed Workforce different from basic outsourcing?",
        answer:
          "Managed Workforce focuses on end-to-end operations—governance, monitoring, multi-location coordination, analytics, and continuous improvement—not placement alone.",
      },
      {
        question: "Can Managed Workforce include ProQPay?",
        answer:
          "Where relevant, MSG can integrate technology-enabled payroll and workforce visibility through ProQPay as part of a broader operating model.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);

export const serviceGroups = [
  {
    id: "workforce",
    title: "Workforce Services",
    description:
      "Recruitment, staffing, engineering talent, and scalable workforce deployment.",
  },
  {
    id: "operations",
    title: "Managed Operations",
    description:
      "Business support, governance, multi-location coordination, and performance reporting.",
  },
  {
    id: "technology",
    title: "Technology Enablement",
    description:
      "Digital visibility for workforce and payroll operations through products such as ProQPay.",
  },
] as const;

/** Legacy slugs redirected in next.config.ts */
export const legacyServiceRedirects: Record<string, string> = {
  "engineering-outsourcing": "engineering-talent",
  "business-process-outsourcing": "business-support",
  "managed-security": "managed-workforce",
  "it-infrastructure": "business-support",
  "sales-lead-generation": "business-support",
};
