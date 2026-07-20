export type Service = {
  slug: string;
  title: string;
  group: "workforce" | "operations" | "technology";
  summary: string;
  description: string;
  outcome: string;
  painPoints: string[];
  approach: string[];
  capabilities: string[];
  workflow: { step: number; title: string; description: string }[];
  outcomes: string[];
  industries: string[];
};

export const services: Service[] = [
  {
    slug: "workforce-outsourcing",
    title: "Workforce Outsourcing",
    group: "workforce",
    summary:
      "Scalable staffing and field workforce deployment with structured supervision.",
    description:
      "MSG helps enterprises staff and operate distributed workforces—from administrative roles to field teams—with recruitment support, deployment discipline, and operational oversight aligned to Indonesian labor practices.",
    outcome: "Reliable headcount readiness with controlled deployment and ongoing support.",
    painPoints: [
      "Hiring velocity does not match operational demand",
      "Multi-site teams are hard to supervise consistently",
      "HR capacity is stretched by volume recruitment",
      "Compliance risk grows as deployments scale",
    ],
    approach: [
      "Structured workforce planning with the client",
      "Recruitment and assessment aligned to role requirements",
      "Onboarding and deployment with clear accountability",
      "Field and hybrid supervision with SLA awareness",
    ],
    capabilities: [
      "Workforce planning and role mapping",
      "Sourcing, screening, and shortlisting",
      "Interview coordination and assessment support",
      "Hiring and onboarding coordination",
      "Field supervision and escalation paths",
      "Labor-aware operating practices and BPJS awareness",
    ],
    workflow: [
      { step: 1, title: "Consultation", description: "Clarify workforce needs, locations, and SLAs." },
      { step: 2, title: "Planning", description: "Define roles, volumes, and deployment timeline." },
      { step: 3, title: "Recruitment", description: "Source, screen, and assess candidates." },
      { step: 4, title: "Deployment", description: "Onboard and place teams with clear ownership." },
      { step: 5, title: "Supervision", description: "Operate with field and hybrid oversight." },
    ],
    outcomes: [
      "Faster readiness for operational roles",
      "More consistent multi-site workforce control",
      "Reduced burden on internal HR capacity",
      "Clearer accountability for deployed teams",
    ],
    industries: ["Manufacturing", "Retail", "Logistics", "Construction & Engineering"],
  },
  {
    slug: "business-process-outsourcing",
    title: "Business Process Outsourcing",
    group: "operations",
    summary:
      "Admin support, virtual assistance, data entry, and back-office delivery.",
    description:
      "MSG provides outsourced administrative and back-office capacity so client teams can focus on core business priorities while routine processes run with structure and accountability.",
    outcome: "Stable back-office throughput without expanding fixed internal headcount.",
    painPoints: [
      "Admin work consumes high-cost internal capacity",
      "Data entry and documentation quality varies",
      "Peak volumes create process bottlenecks",
      "Process ownership is unclear across teams",
    ],
    approach: [
      "Map priority processes and service levels",
      "Staff and train delivery teams to agreed SOPs",
      "Operate with reporting and issue escalation",
      "Continuously refine throughput and quality",
    ],
    capabilities: [
      "Virtual assistance and admin support",
      "Data entry and document processing",
      "Back-office operational delivery",
      "Process documentation and SOP alignment",
      "Quality checks and volume reporting",
    ],
    workflow: [
      { step: 1, title: "Process discovery", description: "Identify workflows ready for outsourcing." },
      { step: 2, title: "Service design", description: "Define scope, SLAs, and controls." },
      { step: 3, title: "Team setup", description: "Staff, train, and equip the delivery team." },
      { step: 4, title: "Operate", description: "Run daily operations with supervision." },
      { step: 5, title: "Improve", description: "Review quality, volume, and refinements." },
    ],
    outcomes: [
      "More predictable admin and back-office delivery",
      "Internal teams free for higher-value work",
      "Clearer process ownership and reporting",
      "Flexible capacity for demand peaks",
    ],
    industries: ["Professional Services", "Financial Services", "Retail", "Manufacturing"],
  },
  {
    slug: "managed-security",
    title: "Managed Security Services",
    group: "technology",
    summary:
      "Remote monitoring support, threat awareness, and compliance-oriented practices.",
    description:
      "MSG supports organizations that need structured security operations assistance—including monitoring support, threat awareness workflows, and compliance-oriented process management—without overstating uncertified guarantees.",
    outcome: "Stronger day-to-day security operations discipline and response readiness.",
    painPoints: [
      "Security operations are understaffed",
      "Alerts lack structured triage and ownership",
      "Compliance tasks are reactive rather than planned",
      "Documentation for audits is incomplete",
    ],
    approach: [
      "Define monitoring and response operating models",
      "Support remote monitoring and escalation routines",
      "Align process documentation to client policy",
      "Improve reporting visibility for leadership",
    ],
    capabilities: [
      "Remote monitoring support",
      "Threat awareness and triage workflows",
      "Compliance process management support",
      "Operational reporting for security stakeholders",
      "Escalation coordination with client IT owners",
    ],
    workflow: [
      { step: 1, title: "Scope", description: "Clarify systems, coverage windows, and contacts." },
      { step: 2, title: "Operate", description: "Run monitoring and awareness routines." },
      { step: 3, title: "Triage", description: "Classify and escalate material events." },
      { step: 4, title: "Report", description: "Provide structured operational summaries." },
      { step: 5, title: "Review", description: "Improve controls with client stakeholders." },
    ],
    outcomes: [
      "Clearer ownership of security operations tasks",
      "Faster awareness-to-escalation pathways",
      "Better documentation for reviews",
      "Reduced operational blind spots",
    ],
    industries: ["Financial Services", "Professional Services", "Manufacturing", "Retail"],
  },
  {
    slug: "it-infrastructure",
    title: "IT Infrastructure Outsourcing",
    group: "technology",
    summary:
      "Cloud management, network support, and help desk services for enterprise operations.",
    description:
      "MSG helps organizations stabilize and scale IT operations through infrastructure support, help desk delivery, and cloud or network operational assistance tailored to business priorities.",
    outcome: "More reliable IT support capacity for users and operations teams.",
    painPoints: [
      "Help desk queues grow faster than internal capacity",
      "Network and cloud issues disrupt operations",
      "IT documentation is incomplete or outdated",
      "Support quality varies by location or shift",
    ],
    approach: [
      "Assess current IT support model and priorities",
      "Define service coverage and response expectations",
      "Deploy support capacity with clear escalation paths",
      "Report service performance and improvement opportunities",
    ],
    capabilities: [
      "Help desk and end-user support",
      "Network support coordination",
      "Cloud management assistance",
      "Operational documentation support",
      "Incident logging and escalation routines",
    ],
    workflow: [
      { step: 1, title: "Assessment", description: "Review systems, tickets, and support gaps." },
      { step: 2, title: "Service design", description: "Agree coverage model and priorities." },
      { step: 3, title: "Transition", description: "Onboard knowledge and access paths." },
      { step: 4, title: "Delivery", description: "Operate help desk and infrastructure support." },
      { step: 5, title: "Optimization", description: "Reduce repeat issues and improve SLAs." },
    ],
    outcomes: [
      "More consistent user support experience",
      "Better operational continuity for IT services",
      "Clearer escalation and ownership",
      "Flexible support capacity without overstaffing",
    ],
    industries: ["Professional Services", "Financial Services", "Manufacturing", "Logistics"],
  },
  {
    slug: "sales-lead-generation",
    title: "Sales and Lead Generation",
    group: "operations",
    summary:
      "B2B lead generation, appointment setting, and sales pipeline support.",
    description:
      "MSG supports growth teams with structured outbound and pipeline assistance—helping generate qualified conversations and keep sales processes moving with disciplined follow-up.",
    outcome: "More consistent top-of-funnel activity and cleaner pipeline hygiene.",
    painPoints: [
      "Sales teams spend too much time on non-selling admin",
      "Lead follow-up is inconsistent",
      "Pipeline data quality is weak",
      "Appointment volume is hard to sustain",
    ],
    approach: [
      "Align target segments and messaging with sales leadership",
      "Run structured outreach and qualification routines",
      "Support appointment setting and pipeline updates",
      "Report activity and conversion insights regularly",
    ],
    capabilities: [
      "B2B lead generation support",
      "Appointment setting",
      "Sales pipeline management assistance",
      "CRM hygiene support",
      "Weekly activity and conversion reporting",
    ],
    workflow: [
      { step: 1, title: "Target design", description: "Define ICP, territories, and offers." },
      { step: 2, title: "Outreach", description: "Execute structured lead generation activity." },
      { step: 3, title: "Qualify", description: "Screen interest and readiness." },
      { step: 4, title: "Book", description: "Set appointments for sales owners." },
      { step: 5, title: "Report", description: "Track pipeline and conversion signals." },
    ],
    outcomes: [
      "Higher consistency in outbound activity",
      "Better use of sales team time",
      "Cleaner pipeline visibility",
      "More predictable appointment flow",
    ],
    industries: ["Professional Services", "Financial Services", "Technology", "Manufacturing"],
  },
  {
    slug: "engineering-outsourcing",
    title: "Engineering Outsourcing",
    group: "workforce",
    summary:
      "Specialized engineering talent with flexible team models and local integration.",
    description:
      "MSG provides access to engineering professionals and flexible team structures so organizations can accelerate project delivery, reduce overhead pressure, and integrate specialized capability with local operating needs.",
    outcome: "Faster project staffing with flexible engineering capacity.",
    painPoints: [
      "Specialized engineering roles are hard to fill quickly",
      "Project timelines slip due to talent gaps",
      "Fixed headcount models raise cost risk",
      "Global expertise is difficult to integrate locally",
    ],
    approach: [
      "Clarify project skill requirements and delivery model",
      "Source and assess specialized engineering talent",
      "Deploy flexible teams with clear project ownership",
      "Support integration with local stakeholders and operations",
    ],
    capabilities: [
      "Specialized engineering talent sourcing",
      "Scalable and flexible team models",
      "Project-aligned staffing support",
      "Local integration coordination",
      "Delivery timeline acceleration support",
    ],
    workflow: [
      { step: 1, title: "Requirement mapping", description: "Define skills, duration, and outcomes." },
      { step: 2, title: "Talent search", description: "Source and shortlist specialists." },
      { step: 3, title: "Assessment", description: "Evaluate fit for project requirements." },
      { step: 4, title: "Deployment", description: "Onboard and integrate with project teams." },
      { step: 5, title: "Support", description: "Maintain continuity and replacement readiness." },
    ],
    outcomes: [
      "Reduced time-to-staff for critical roles",
      "More flexible cost structures",
      "Accelerated project delivery capacity",
      "Stronger access to specialized skills",
    ],
    industries: ["Construction & Engineering", "Manufacturing", "Energy", "Infrastructure"],
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
    description: "Recruitment, staffing, engineering professionals, and scalable talent pools.",
  },
  {
    id: "operations",
    title: "Business Operations",
    description: "Administrative support, sales enablement, and process delivery.",
  },
  {
    id: "technology",
    title: "Technology and Security",
    description: "IT infrastructure, managed security, and MSG digital products.",
  },
] as const;
