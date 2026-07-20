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
      "Handle shift premiums, multi-site workforces, and complex allowances with control.",
    description:
      "Manufacturing payroll often spans plants, shifts, overtime rules, and union or policy-driven allowances. ProQPay helps operations and finance keep every site accurate and on schedule.",
    painPoints: [
      "Shift and overtime calculations vary by plant and role",
      "Multi-site payroll lacks a single source of truth",
      "Attendance feeds arrive late or inconsistently",
      "Compliance risk grows as headcount scales",
    ],
    howWeHelp: [
      "Standardize pay components across factories while keeping local rules",
      "Connect attendance inputs into a controlled payroll engine",
      "Route plant and HO approvals before disbursement",
      "Deliver finance-ready cost reports by site and cost center",
    ],
    expectedResults: [
      "Fewer payroll exceptions at cut-off",
      "Clearer plant-level labor cost visibility",
      "More reliable pay day across all facilities",
      "Stronger audit posture for workforce costs",
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    summary:
      "Support store networks with high employee turnover and variable schedules.",
    description:
      "Retail teams move quickly—new hires, part-time schedules, store transfers, and peak-season spikes. ProQPay keeps payroll resilient under that operational tempo.",
    painPoints: [
      "High turnover creates constant master-data change",
      "Variable hours and incentives complicate pay runs",
      "Store managers need simple, controlled inputs",
      "Finance needs consolidated views across outlets",
    ],
    howWeHelp: [
      "Streamline employee lifecycle data into payroll",
      "Support variable pay and incentive structures",
      "Centralize disbursement for multi-outlet networks",
      "Provide outlet and region reporting for leadership",
    ],
    expectedResults: [
      "Faster onboarding-to-first-pay cycles",
      "Reduced store-level payroll friction",
      "Better regional cost control",
      "Improved employee experience on payday",
    ],
  },
  {
    slug: "construction",
    title: "Construction",
    summary:
      "Manage project-based workforces, site mobility, and project cost tracking.",
    description:
      "Construction payroll is project-driven. Teams move between sites, and cost attribution matters as much as timely pay. ProQPay supports both operational speed and project finance clarity.",
    painPoints: [
      "Workers and supervisors rotate across projects",
      "Project cost coding is easy to get wrong",
      "Site attendance capture is uneven",
      "Cash-flow timing can pressure payroll readiness",
    ],
    howWeHelp: [
      "Structure project-aware payroll components and allocations",
      "Support approval paths that include project controls",
      "Enable reliable mass disbursement for field teams",
      "Offer working capital pathways where approved and appropriate",
    ],
    expectedResults: [
      "Cleaner project labor cost reporting",
      "More predictable payday for field staff",
      "Reduced reconciliation burden after each cycle",
      "Stronger coordination between HO and sites",
    ],
  },
  {
    slug: "logistics",
    title: "Logistics",
    summary:
      "Scale payroll for drivers, warehouse staff, and distributed operations.",
    description:
      "Logistics organizations run on punctuality. Payroll must match that standard—supporting large mobile workforces, allowance structures, and multi-location operations.",
    painPoints: [
      "Large mobile workforce with complex allowances",
      "Warehouse and fleet teams operate on different schedules",
      "Disbursement volume is high every cycle",
      "Leadership needs operational cost visibility fast",
    ],
    howWeHelp: [
      "Process high-volume payroll with controlled exceptions",
      "Support multi-bank disbursement at scale",
      "Align approvals to operations and finance stakeholders",
      "Surface payroll analytics for network performance reviews",
    ],
    expectedResults: [
      "On-time pay for distributed teams",
      "Lower payment failure rates",
      "Better network-wide labor cost insight",
      "Less manual effort from central payroll teams",
    ],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    summary:
      "Serve knowledge firms with multi-entity structures and executive reporting needs.",
    description:
      "Professional services firms need polished execution: multi-company structures, confidential pay data, clean approvals, and reports that stand up in partner and board discussions.",
    painPoints: [
      "Sensitive compensation data requires strict access control",
      "Partner or leadership approvals can slow cycles",
      "Multi-entity setups create process fragmentation",
      "Clients and auditors expect clean documentation",
    ],
    howWeHelp: [
      "Role-based access and audit trails for confidential payroll",
      "Configurable approval workflows for firm governance",
      "Multi-company processing on one platform",
      "Executive-ready reports and export packages",
    ],
    expectedResults: [
      "Tighter control over sensitive pay data",
      "More predictable monthly close support",
      "Consistent process across entities",
      "Higher confidence in partner reporting",
    ],
  },
  {
    slug: "outsourcing",
    title: "Outsourcing",
    summary:
      "Run client-site workforces with multi-principal complexity and strict SLAs.",
    description:
      "Outsourcing companies manage employees deployed across many client environments. ProQPay helps maintain SLA-grade payroll accuracy, compliance, and disbursement reliability.",
    painPoints: [
      "Employees are deployed across many client sites",
      "Billing and payroll cycles must stay aligned",
      "Compliance obligations remain with the employer of record",
      "Scale creates pressure on every cut-off",
    ],
    howWeHelp: [
      "Support multi-client workforce structures",
      "Standardize processing while preserving client-specific rules",
      "Deliver reliable mass disbursement under SLA pressure",
      "Provide transparent reports for internal and client reviews",
    ],
    expectedResults: [
      "Higher SLA adherence on payroll timelines",
      "Fewer disputes driven by pay errors",
      "Improved client confidence and retention",
      "Operational scale without proportional headcount growth",
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((item) => item.slug === slug);
}

export const industrySlugs = industries.map((item) => item.slug);
