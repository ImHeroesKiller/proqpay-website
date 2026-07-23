export type ServiceGroupId =
  | "strategic-advisory"
  | "workforce-solutions"
  | "workforce-technology";

export type Service = {
  slug: string;
  title: string;
  group: ServiceGroupId;
  /** Sub-service under Workforce Solutions */
  parent?: "workforce-solutions";
  featured?: boolean;
  badge?: string;
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

export type ServicePillar = {
  id: ServiceGroupId;
  title: string;
  badge?: string;
  href: string;
  summary: string;
  description: string;
  positioning: string;
  challenges: string[];
  solutions: string[];
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  cta: { label: string; href: string };
};

/** Three service pillars — primary IA for Services and homepage. */
export const servicePillars: ServicePillar[] = [
  {
    id: "strategic-advisory",
    title: "Strategic Advisory",
    badge: "Featured Service",
    href: "/services/strategic-advisory",
    summary:
      "Business recovery, growth, and transformation advisory for enterprises preparing for the next stage of performance.",
    description:
      "MSG helps organizations strengthen profitability, rebuild operating models, prepare for investment or M&A, and execute business transformation—through structured advisory grounded in operations and workforce reality.",
    positioning:
      "Flagship advisory focused on Business Recovery, Business Growth, and Business Transformation—not consulting decks alone.",
    challenges: [
      "Margin and cashflow pressure without a clear improvement roadmap",
      "Operations that need redesign before scale or investment",
      "Outsourcing businesses seeking contract and portfolio profitability",
      "Leadership preparing for valuation, investors, or strategic transactions",
      "Organization and workforce models that no longer match growth ambitions",
    ],
    solutions: [
      "Business health, operational, and financial assessments",
      "Cost efficiency, margin, and cashflow improvement programs",
      "Outsourcing business advisory and service redesign",
      "Investment readiness and due diligence preparation",
      "M&A advisory and business transition support",
      "Organization redesign, operational excellence, and digital/AI roadmaps",
    ],
    benefits: [
      "Clearer path from assessment to executable improvement",
      "Stronger operational and financial foundations for growth",
      "Better readiness for investors, partners, or transactions",
      "Workforce and organization models aligned to strategy",
      "Practical transformation with operational accountability",
    ],
    process: [
      {
        step: 1,
        title: "Discover",
        description: "Understand business context, constraints, and priorities.",
      },
      {
        step: 2,
        title: "Assess",
        description: "Evaluate health, operations, workforce, and financial drivers.",
      },
      {
        step: 3,
        title: "Design",
        description: "Define improvement, recovery, or transformation roadmap.",
      },
      {
        step: 4,
        title: "Align",
        description: "Align leadership on priorities, governance, and sequencing.",
      },
      {
        step: 5,
        title: "Execute support",
        description: "Support implementation with operational and workforce expertise.",
      },
      {
        step: 6,
        title: "Measure",
        description: "Track progress and refine for sustainable improvement.",
      },
    ],
    cta: {
      label: "Request Strategic Assessment",
      href: "/request-consultation?intent=strategic-advisory",
    },
  },
  {
    id: "workforce-solutions",
    title: "Workforce Solutions",
    href: "/services/workforce-solutions",
    summary:
      "End-to-end workforce solutions—from planning and recruitment to deployment, administration, payroll coordination, and managed operations.",
    description:
      "MSG provides enterprise workforce delivery under one umbrella: Workforce Outsourcing, Engineering Talent, Business Support, and Managed Workforce—so organizations can scale people operations with structure and continuity.",
    positioning:
      "End-to-end workforce solutions that connect planning, talent, operations, and governance.",
    challenges: [
      "Hiring velocity does not match operational demand",
      "Specialized and project talent is hard to secure on time",
      "Support functions stretch internal teams",
      "Multi-site workforce operations lack consistent control",
      "Administration, attendance, and payroll coordination become fragmented",
    ],
    solutions: [
      "Workforce planning, sourcing, and deployment",
      "Engineering and technical talent for projects",
      "Business support for admin, finance, and customer operations",
      "Managed workforce operations with governance and reporting",
      "Continuity, replacement readiness, and multi-location coordination",
    ],
    benefits: [
      "Faster workforce readiness with clear ownership",
      "Flexible models for volume, project, and support needs",
      "Reduced burden on internal HR and operations capacity",
      "Stronger multi-site control and service visibility",
      "One partner across staffing, support, and managed operations",
    ],
    process: [
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
    cta: {
      label: "Talk to Our Workforce Experts",
      href: "/request-consultation?intent=workforce-solutions",
    },
  },
  {
    id: "workforce-technology",
    title: "Workforce Technology",
    href: "/technology",
    summary:
      "Technology that empowers workforce operations—starting with ProQPay, with room to grow into broader digital workforce products.",
    description:
      "MSG builds and deploys workforce technology that strengthens payroll visibility, operational control, and decision-making. ProQPay is the first product; future platforms will expand the stack without overstating unreleased features.",
    positioning: "Technology that empowers workforce operations—not payroll software alone.",
    challenges: [
      "Payroll and workforce data lack timely visibility",
      "Approval and disbursement processes are hard to control at scale",
      "Leaders need operational dashboards, not static reports",
      "Digital tools must fit Indonesian enterprise workforce realities",
    ],
    solutions: [
      "ProQPay for payroll process visibility and orchestration",
      "Technology-enabled reporting and audit-ready workflows",
      "Product roadmap themes for HR platform, analytics, and AI solutions",
      "Integration of technology with MSG workforce and advisory delivery",
    ],
    benefits: [
      "Clearer payroll and workforce process visibility",
      "Stronger control over approvals and execution",
      "Technology aligned to real operating models",
      "A foundation for future workforce digital products",
    ],
    process: [
      {
        step: 1,
        title: "Identify friction",
        description: "Map payroll, admin, and visibility gaps technology can solve.",
      },
      {
        step: 2,
        title: "Design controls",
        description: "Define workflows, approvals, auditability, and boundaries.",
      },
      {
        step: 3,
        title: "Deploy product",
        description: "Implement usable modules for daily operations and finance teams.",
      },
      {
        step: 4,
        title: "Improve",
        description: "Refine with field feedback from real payroll and workforce cycles.",
      },
    ],
    cta: {
      label: "Explore Workforce Technology",
      href: "/technology",
    },
  },
];

/** Featured Strategic Advisory — full page content */
export const strategicAdvisoryContent = {
  slug: "strategic-advisory",
  title: "Strategic Advisory",
  badge: "Featured Service",
  headline: "Business Recovery, Growth & Transformation",
  subheadline:
    "MSG helps companies strengthen performance, redesign operations, prepare for investment or strategic transactions, and execute transformation—with advisory grounded in workforce and operational reality.",
  disclaimer:
    "MSG provides advisory tailored to each company's condition. We do not guarantee funding, investment, mergers, or any business transaction outcomes.",
  challenges: [
    {
      title: "Performance pressure",
      description:
        "Leaders need structured paths to improve margins, cashflow, and operating discipline.",
    },
    {
      title: "Scale readiness",
      description:
        "Growth ambitions require stronger organization, processes, and workforce models.",
    },
    {
      title: "Investment & transactions",
      description:
        "Companies preparing for investors, partners, or M&A need documentation, valuation readiness, and cleaner operations.",
    },
    {
      title: "Outsourcing economics",
      description:
        "Outsourcing businesses need portfolio, pricing, payroll, and governance optimization to protect contract profitability.",
    },
  ],
  serviceLines: [
    {
      id: "business-recovery",
      title: "Business Recovery",
      description:
        "Structured improvement for organizations that need stronger health, efficiency, and turnaround discipline.",
      items: [
        "Business health assessment",
        "Operational assessment",
        "Financial assessment",
        "Cost efficiency",
        "Margin improvement",
        "Cashflow improvement",
        "Operational turnaround",
        "Business restructuring",
        "Organizational restructuring",
      ],
    },
    {
      id: "outsourcing-business-advisory",
      title: "Outsourcing Business Advisory",
      description:
        "Advisory dedicated to outsourcing companies seeking operational excellence and sustainable contract economics.",
      items: [
        "Operational improvement",
        "Payroll optimization",
        "Workforce optimization",
        "Contract profitability analysis",
        "Client portfolio analysis",
        "Service redesign",
        "Pricing strategy",
        "Governance",
        "Compliance",
      ],
    },
    {
      id: "investment-readiness",
      title: "Investment Readiness",
      description:
        "Preparation for companies seeking stronger investor readiness and institutional documentation quality.",
      items: [
        "Business valuation preparation",
        "Investor readiness",
        "Due diligence preparation",
        "Financial improvement",
        "Corporate documentation",
        "Business presentation",
        "Growth strategy",
      ],
    },
    {
      id: "ma-advisory",
      title: "M&A Advisory",
      description:
        "Support for merger, acquisition, sale preparation, partner matching, and transition planning.",
      items: [
        "Merger preparation",
        "Acquisition preparation",
        "Business sale preparation",
        "Strategic partner matching",
        "Exit strategy",
        "Business transition",
      ],
    },
    {
      id: "business-transformation",
      title: "Business Transformation",
      description:
        "Organization, operations, workforce, and digital transformation roadmaps for the next stage of growth.",
      items: [
        "Organization redesign",
        "Operational excellence",
        "Digital transformation roadmap",
        "Workforce transformation",
        "AI adoption roadmap",
        "Performance management",
      ],
    },
  ],
  howWeWork: [
    {
      step: 1,
      title: "Discovery conversation",
      description: "Clarify goals, constraints, and what success looks like.",
    },
    {
      step: 2,
      title: "Diagnostic assessment",
      description: "Assess business, operations, workforce, and financial drivers.",
    },
    {
      step: 3,
      title: "Roadmap design",
      description: "Prioritize recovery, growth, or transformation initiatives.",
    },
    {
      step: 4,
      title: "Execution partnership",
      description:
        "Support implementation with MSG advisory, workforce, and technology capabilities where relevant.",
    },
    {
      step: 5,
      title: "Review & refine",
      description: "Measure progress and adjust for sustainable improvement.",
    },
  ],
  faq: [
    {
      question: "Is Strategic Advisory only for companies in crisis?",
      answer:
        "No. Advisory supports companies preparing for growth, operational excellence, investment readiness, transformation, and strategic transactions—as well as structured recovery and improvement programs.",
    },
    {
      question: "Does MSG guarantee investment, funding, or M&A outcomes?",
      answer:
        "No. MSG provides advisory tailored to each company's condition and does not guarantee funding, investment, mergers, or transaction completion.",
    },
    {
      question: "Can advisory combine with workforce or technology services?",
      answer:
        "Yes. Where relevant, MSG can connect advisory recommendations with Workforce Solutions and Workforce Technology (including ProQPay) for execution support.",
    },
    {
      question: "Who is Outsourcing Business Advisory for?",
      answer:
        "It is designed for outsourcing companies that need operational improvement, pricing and portfolio analysis, payroll and workforce optimization, governance, and compliance discipline.",
    },
  ],
  industries: [
    "Manufacturing",
    "Professional Services",
    "Outsourcing & BPO",
    "Construction and Engineering",
    "Financial Services",
    "Retail and Consumer",
    "Technology and Telecommunications",
    "Logistics and Distribution",
  ],
};

export const workforceSubServices = [
  {
    slug: "workforce-outsourcing",
    title: "Workforce Outsourcing",
    summary:
      "Penyediaan dan pengelolaan tenaga kerja sesuai kebutuhan perusahaan.",
    href: "/services/workforce-outsourcing",
  },
  {
    slug: "engineering-talent",
    title: "Engineering Talent",
    summary:
      "Tenaga ahli dan technical workforce untuk proyek, engineering, IT, dan kebutuhan khusus.",
    href: "/services/engineering-talent",
  },
  {
    slug: "business-support",
    title: "Business Support",
    summary:
      "Dukungan tenaga kerja untuk administrasi, keuangan, customer service, sales support, dan fungsi pendukung lainnya.",
    href: "/services/business-support",
  },
  {
    slug: "managed-workforce",
    title: "Managed Workforce",
    summary:
      "Pengelolaan workforce secara menyeluruh dari sourcing hingga reporting dan performance monitoring.",
    href: "/services/managed-workforce",
  },
] as const;

export const futureTechnologyProducts = [
  {
    title: "HR Platform",
    description:
      "A broader digital layer for workforce administration and people operations.",
    status: "Coming Soon" as const,
  },
  {
    title: "Workforce Analytics",
    description:
      "Operational and workforce insights for leaders who need clearer decision support.",
    status: "Coming Soon" as const,
  },
  {
    title: "AI Solutions",
    description:
      "Applied AI capabilities for workforce and operations use cases—when product readiness allows.",
    status: "Coming Soon" as const,
  },
  {
    title: "Operational Dashboard",
    description:
      "Real-time operational visibility connecting deployment, attendance, and service performance.",
    status: "Coming Soon" as const,
  },
];

export const services: Service[] = [
  {
    slug: "strategic-advisory",
    title: "Strategic Advisory",
    group: "strategic-advisory",
    featured: true,
    badge: "Featured Service",
    summary:
      "Business recovery, growth, investment readiness, M&A preparation, and transformation advisory.",
    description: strategicAdvisoryContent.subheadline,
    outcome:
      "A practical advisory roadmap for recovery, growth, investment readiness, or transformation.",
    benefit:
      "Strategic clarity with operational depth—from assessment to execution support.",
    painPoints: strategicAdvisoryContent.challenges.map((c) => c.description),
    approach: [
      "Business and operational diagnostic",
      "Financial and organizational assessment",
      "Roadmap design for recovery, growth, or transformation",
      "Investment and transaction readiness support where relevant",
      "Execution partnership with workforce and technology capabilities",
    ],
    capabilities: strategicAdvisoryContent.serviceLines.flatMap((s) => s.items),
    workflow: strategicAdvisoryContent.howWeWork,
    outcomes: servicePillars[0].benefits,
    industries: strategicAdvisoryContent.industries,
    faq: strategicAdvisoryContent.faq,
  },
  {
    slug: "workforce-solutions",
    title: "Workforce Solutions",
    group: "workforce-solutions",
    summary:
      "End-to-end workforce solutions: outsourcing, engineering talent, business support, and managed operations.",
    description:
      "MSG menyediakan solusi tenaga kerja end-to-end mulai dari perencanaan, rekrutmen, deployment, administrasi, payroll coordination, hingga pengelolaan operasional—under one Workforce Solutions umbrella.",
    outcome:
      "Reliable workforce delivery with structured operations and continuity.",
    benefit:
      "One partner for staffing, specialized talent, support functions, and managed workforce operations.",
    painPoints: servicePillars[1].challenges,
    approach: servicePillars[1].solutions,
    capabilities: workforceSubServices.map((s) => s.title),
    workflow: servicePillars[1].process,
    outcomes: servicePillars[1].benefits,
    industries: [
      "Manufacturing",
      "Retail and Consumer",
      "Logistics and Distribution",
      "Construction and Engineering",
      "Technology and Telecommunications",
      "Professional Services",
      "Financial Services",
    ],
    faq: [
      {
        question: "What is included under Workforce Solutions?",
        answer:
          "Workforce Outsourcing, Engineering Talent, Business Support, and Managed Workforce—each available as a focused sub-service under one enterprise umbrella.",
      },
      {
        question: "Can Workforce Solutions combine with Strategic Advisory?",
        answer:
          "Yes. Many organizations use advisory to redesign operating models, then engage Workforce Solutions for execution capacity.",
      },
    ],
  },
  {
    slug: "workforce-outsourcing",
    title: "Workforce Outsourcing",
    group: "workforce-solutions",
    parent: "workforce-solutions",
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
    group: "workforce-solutions",
    parent: "workforce-solutions",
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
    group: "workforce-solutions",
    parent: "workforce-solutions",
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
    group: "workforce-solutions",
    parent: "workforce-solutions",
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

export function getPillar(id: ServiceGroupId) {
  return servicePillars.find((p) => p.id === id);
}

export const serviceSlugs = services.map((s) => s.slug);

/** @deprecated Use servicePillars — kept for compatibility with older imports */
export const serviceGroups = servicePillars.map((p) => ({
  id: p.id,
  title: p.title,
  description: p.summary,
}));

/** Legacy slugs redirected in next.config.ts */
export const legacyServiceRedirects: Record<string, string> = {
  "engineering-outsourcing": "engineering-talent",
  "business-process-outsourcing": "business-support",
  "managed-security": "managed-workforce",
  "it-infrastructure": "business-support",
  "sales-lead-generation": "business-support",
};
