export type PlatformModule = {
  id: string;
  title: string;
  summary: string;
  description: string;
  capabilities: string[];
};

export const platformModules: PlatformModule[] = [
  {
    id: "architecture",
    title: "Architecture",
    summary: "One integrated platform for complete payroll control.",
    description:
      "ProQPay is designed as an end-to-end payroll ecosystem that connects employee data, attendance, calculation, approval, disbursement, statutory processes, and analytics into one governed workflow.",
    capabilities: [
      "Modular services aligned to the payroll value chain",
      "Entity-aware data model for multi-company groups",
      "Clear separation of processing, approval, and payment stages",
      "Export and integration points for finance systems",
    ],
  },
  {
    id: "security",
    title: "Security",
    summary: "Payroll data is sensitive—security is a product requirement.",
    description:
      "Access controls, operational safeguards, and auditability are built around the reality that payroll data includes compensation, identity, and banking details.",
    capabilities: [
      "Role-based access controls",
      "Least-privilege operational permissions",
      "Secure handling of payroll and bank-related data",
      "Monitoring patterns for unusual activity",
    ],
  },
  {
    id: "approval-workflow",
    title: "Approval Workflow",
    summary: "Flexible multi-level approval before money moves.",
    description:
      "Configure the exact chain of custody your organization needs—from HR validation to finance authorization—before a payroll run is locked for disbursement.",
    capabilities: [
      "Multi-level and multi-role approval chains",
      "Exception-first review surfaces",
      "Delegation support for operational continuity",
      "Full approval history retained for audit",
    ],
  },
  {
    id: "role-management",
    title: "Role Management",
    summary: "Right people, right actions, right entities.",
    description:
      "Enterprise payroll requires precise permissioning across HO, branches, clients, and shared service teams. Role management keeps that structure enforceable.",
    capabilities: [
      "Granular role definitions for HR, finance, and operations",
      "Entity-scoped access for multi-company groups",
      "Separation of duties between prepare, approve, and pay",
      "Administrative controls for onboarding new operators",
    ],
  },
  {
    id: "audit-trail",
    title: "Audit Trail",
    summary: "Every material action leaves a recoverable record.",
    description:
      "When auditors, banks, or leadership ask what changed and who approved it, ProQPay is designed to provide a clear operational history.",
    capabilities: [
      "Immutable event history for key payroll actions",
      "User attribution on approvals and overrides",
      "Traceability from draft run to disbursement",
      "Support for internal and external review processes",
    ],
  },
  {
    id: "multi-company",
    title: "Multi Company",
    summary: "Run group payroll without losing local control.",
    description:
      "Whether you operate subsidiaries, branches, or client-specific entities, ProQPay supports multi-company structures with shared standards and local configuration.",
    capabilities: [
      "Multiple legal entities under one operating platform",
      "Shared policy templates with entity-level variation",
      "Consolidated and entity-level reporting",
      "Controlled access boundaries between companies",
    ],
  },
  {
    id: "scalability",
    title: "Scalability",
    summary: "Built for growth in headcount, entities, and volume.",
    description:
      "From hundreds to thousands of employees, ProQPay is oriented around reliable cycle operations—not one-off spreadsheet heroics.",
    capabilities: [
      "High-volume payroll processing patterns",
      "Mass disbursement readiness",
      "Operational workflows that scale with shared services",
      "Architecture prepared for additional financial services",
    ],
  },
  {
    id: "integrations",
    title: "Integrations",
    summary: "Connect payroll to the systems your enterprise already runs.",
    description:
      "ProQPay is designed to work with attendance sources, banking rails, and finance exports so payroll does not become an isolated island.",
    capabilities: [
      "Attendance and workforce data intake patterns",
      "Multi-bank disbursement pathways",
      "Finance and GL-oriented export packages",
      "Roadmap-ready API and partner integrations",
    ],
  },
  {
    id: "future-ai",
    title: "Future AI",
    summary: "Intelligent assistance for exceptions, insights, and controls.",
    description:
      "AI capabilities are on the roadmap to help teams detect anomalies earlier, summarize payroll risk, and accelerate exception resolution—always under human approval.",
    capabilities: [
      "Anomaly detection concepts for unusual pay patterns",
      "Assisted exception triage for operators",
      "Narrative summaries for finance leadership",
      "Human-in-the-loop design—AI never silently pays",
    ],
  },
];
