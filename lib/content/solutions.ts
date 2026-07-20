export type Solution = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  workflow: { step: number; title: string; description: string }[];
  cta: string;
};

export const solutions: Solution[] = [
  {
    slug: "payroll-processing",
    title: "Payroll Processing",
    shortTitle: "Processing",
    summary:
      "End-to-end payroll management with accuracy and compliance built in.",
    description:
      "ProQPay runs the full payroll cycle for Indonesian enterprises—from employee master data and attendance to net pay, deductions, and statutory calculations—so HR and finance teams can operate with confidence every cut-off.",
    icon: "Calculator",
    features: [
      "Centralized employee and company structure data",
      "Automated salary, allowance, overtime, and deduction engines",
      "Configurable pay components for multi-entity organizations",
      "Cut-off calendars and payroll run governance",
      "Exception handling and reconciliation workflows",
      "Digital payslip generation and distribution",
    ],
    benefits: [
      "Reduce manual calculation risk and rework",
      "Standardize payroll across branches and entities",
      "Free HR capacity for higher-value workforce programs",
      "Improve employee trust with on-time, accurate pay",
    ],
    workflow: [
      {
        step: 1,
        title: "Data intake",
        description: "Sync employee, attendance, and pay-component data.",
      },
      {
        step: 2,
        title: "Payroll engine",
        description: "Calculate gross-to-net with local rules applied.",
      },
      {
        step: 3,
        title: "Review & exceptions",
        description: "Surface anomalies for HR and finance validation.",
      },
      {
        step: 4,
        title: "Approval",
        description: "Route multi-level approvals before lock and pay.",
      },
      {
        step: 5,
        title: "Close & report",
        description: "Issue payslips and export finance-ready reports.",
      },
    ],
    cta: "Request a payroll processing demo",
  },
  {
    slug: "payroll-disbursement",
    title: "Payroll Disbursement",
    shortTitle: "Disbursement",
    summary:
      "Fast and secure mass salary payments through multi-bank integration.",
    description:
      "Disburse salaries to hundreds or thousands of employees across banks with controlled payment files, status tracking, and reconciliation designed for enterprise payroll operations.",
    icon: "Banknote",
    features: [
      "Mass salary disbursement across multiple banks",
      "Payment batch creation and validation",
      "Status tracking from submit to completion",
      "Failure handling and re-run controls",
      "Reconciliation support for finance teams",
      "Secure operational access with role controls",
    ],
    benefits: [
      "Pay employees on time at scale",
      "Reduce bank file errors and manual transfers",
      "Improve visibility for treasury and finance",
      "Support multi-entity and multi-branch payment models",
    ],
    workflow: [
      {
        step: 1,
        title: "Approved payroll lock",
        description: "Only approved runs enter the disbursement queue.",
      },
      {
        step: 2,
        title: "Payment batch build",
        description: "Generate bank-ready batches with validation checks.",
      },
      {
        step: 3,
        title: "Disbursement",
        description: "Execute multi-bank salary payments securely.",
      },
      {
        step: 4,
        title: "Monitoring",
        description: "Track success, pending, and failed payments.",
      },
      {
        step: 5,
        title: "Reconciliation",
        description: "Close the cycle with finance-ready settlement views.",
      },
    ],
    cta: "Talk to sales about disbursement",
  },
  {
    slug: "payroll-working-capital",
    title: "Payroll Working Capital",
    shortTitle: "Working Capital",
    summary:
      "Structured support that helps clients keep payroll on time every cycle.",
    description:
      "When cash-flow timing differs from payroll obligations, ProQPay can provide short-term working capital support—subject to approval and risk policy—so employees are paid on time without disrupting operations.",
    icon: "Landmark",
    features: [
      "Payroll-timed working capital support model",
      "Client onboarding and due diligence controls",
      "Contract-based payroll agreements",
      "Exposure limits aligned to client profile",
      "Short settlement cycles matched to payroll",
      "Continuous monitoring and risk review",
    ],
    benefits: [
      "Protect employee trust with on-time payment",
      "Bridge receivables and payroll timing gaps",
      "Maintain operational continuity during cash-flow pressure",
      "Keep working capital structured—not ad hoc borrowing chaos",
    ],
    workflow: [
      {
        step: 1,
        title: "Client submits payroll",
        description: "Upload payroll data and supporting documents.",
      },
      {
        step: 2,
        title: "Verification",
        description: "Validate accuracy, completeness, and compliance.",
      },
      {
        step: 3,
        title: "Processing",
        description: "Process and approve payroll inside ProQPay.",
      },
      {
        step: 4,
        title: "Working capital support",
        description: "When approved, fund payroll to keep pay on schedule.",
      },
      {
        step: 5,
        title: "Disbursement & settlement",
        description: "Pay employees, then settle with the client as agreed.",
      },
    ],
    cta: "Discuss working capital eligibility",
  },
  {
    slug: "approval-workflow",
    title: "Approval Workflow",
    shortTitle: "Approvals",
    summary:
      "Flexible multi-level approvals that keep payroll accurate and controlled.",
    description:
      "Design approval chains that match how your organization actually operates—HR, finance controllers, plant managers, and group leadership—with full visibility before money moves.",
    icon: "GitBranch",
    features: [
      "Configurable multi-level approval chains",
      "Role-based approvers by entity or department",
      "Exception flags before final approval",
      "Delegation and temporary approver support",
      "Immutable approval history",
      "Cut-off enforcement and escalation paths",
    ],
    benefits: [
      "Reduce unauthorized or incomplete payroll runs",
      "Align controls with enterprise governance",
      "Create a clear accountability trail",
      "Accelerate reviews with structured exception views",
    ],
    workflow: [
      {
        step: 1,
        title: "Draft payroll",
        description: "Operations prepare the payroll run for review.",
      },
      {
        step: 2,
        title: "HR validation",
        description: "Confirm attendance, allowances, and employee changes.",
      },
      {
        step: 3,
        title: "Finance approval",
        description: "Validate cost impact and statutory positions.",
      },
      {
        step: 4,
        title: "Final authorization",
        description: "Authorized sign-off unlocks disbursement.",
      },
      {
        step: 5,
        title: "Audit record",
        description: "Every decision is retained for later review.",
      },
    ],
    cta: "Map your approval model with us",
  },
  {
    slug: "reports",
    title: "Reports & Analytics",
    shortTitle: "Reports",
    summary:
      "Real-time dashboards and comprehensive payroll reports for better decisions.",
    description:
      "Give CFOs, finance managers, and HR directors the payroll intelligence they need—cost trends, statutory summaries, headcount impacts, and operational performance—without waiting on manual spreadsheet rebuilds.",
    icon: "BarChart3",
    features: [
      "Executive payroll dashboards",
      "Cost center and entity breakdowns",
      "Statutory summary exports",
      "Payroll cycle performance metrics",
      "Exportable reports for auditors and banks",
      "Role-based report access",
    ],
    benefits: [
      "Faster monthly close support",
      "Better visibility for leadership decisions",
      "Less dependency on manual report assembly",
      "Consistent numbers across HR and finance",
    ],
    workflow: [
      {
        step: 1,
        title: "Capture",
        description: "Payroll events feed reporting datasets automatically.",
      },
      {
        step: 2,
        title: "Aggregate",
        description: "Normalize data across entities and pay cycles.",
      },
      {
        step: 3,
        title: "Visualize",
        description: "Surface dashboards tailored to HR and finance roles.",
      },
      {
        step: 4,
        title: "Export",
        description: "Share board, auditor, and partner-ready outputs.",
      },
      {
        step: 5,
        title: "Act",
        description: "Use insights to improve controls and cost planning.",
      },
    ],
    cta: "See reporting capabilities",
  },
  {
    slug: "compliance",
    title: "Payroll Compliance",
    shortTitle: "Compliance",
    summary:
      "Automated PPh 21 and BPJS calculations aligned with Indonesian regulations.",
    description:
      "Stay aligned with Indonesia’s labor, tax, and social security requirements through automated statutory calculations, structured reporting support, and processes designed for audit readiness.",
    icon: "ShieldCheck",
    features: [
      "Automated PPh 21 calculation support",
      "BPJS administration and reporting workflows",
      "Regulatory change monitoring processes",
      "Audit-friendly documentation trails",
      "Multi-entity compliance consistency",
      "Controls that reduce penalty exposure",
    ],
    benefits: [
      "Lower non-compliance risk",
      "Reduce last-minute statutory scramble",
      "Improve readiness for audits and reviews",
      "Keep HR and finance aligned on obligations",
    ],
    workflow: [
      {
        step: 1,
        title: "Rule application",
        description: "Apply current statutory logic to payroll components.",
      },
      {
        step: 2,
        title: "Validation",
        description: "Check edge cases and incomplete employee data.",
      },
      {
        step: 3,
        title: "Filing support",
        description: "Prepare structured outputs for tax and BPJS processes.",
      },
      {
        step: 4,
        title: "Retention",
        description: "Store evidence needed for future review.",
      },
      {
        step: 5,
        title: "Continuous update",
        description: "Adapt processes as regulations evolve.",
      },
    ],
    cta: "Review compliance coverage",
  },
];

export function getSolution(slug: string) {
  return solutions.find((item) => item.slug === slug);
}

export const solutionSlugs = solutions.map((item) => item.slug);
