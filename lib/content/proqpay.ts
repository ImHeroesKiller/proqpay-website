export const proqpayProduct = {
  name: "ProQPay",
  label: "An MSG Technology Product",
  headline: "Simplify Payroll. Improve Visibility. Strengthen Workforce Operations.",
  description:
    "ProQPay is MSG's enterprise payroll operating system for validation, multi-level approval, payment instructions, client-funded execution orchestration, optional working capital, reconciliation, audit, and reporting.",
  problem: {
    title: "Payroll is more complex than ever",
    description:
      "Enterprise payroll teams must reconcile attendance, allowances, statutory obligations, multi-entity structures, and bank disbursement—often under fixed cut-off pressure.",
    points: [
      "Manual processes reduce HR productivity",
      "Calculation errors affect employee trust",
      "PPh 21 and BPJS complexity increases compliance risk",
      "Mass salary disbursement across banks is operationally demanding",
      "Multi-branch and multi-entity payroll lacks standardization",
      "Sensitive payroll data requires strong access control",
    ],
  },
  solution: {
    title: "Two payroll execution models under one control plane",
    description:
      "ProQPay connects payroll preparation, validation, multi-level approval, source-of-funds decisioning, payment instructions, execution monitoring, reconciliation, and reporting. Client-funded payroll is the default; working capital is an optional branch.",
  },
  features: [
    {
      title: "Client-Funded Payroll",
      description:
        "The organization keeps payroll funds in its designated bank account while ProQPay orchestrates validation, approval, payment instructions, execution monitoring, reconciliation, and audit.",
      status: "Available" as const,
    },
    {
      title: "Approval Workflow",
      description:
        "Configurable multi-level approvals before payment instructions are generated.",
      status: "Available" as const,
    },
    {
      title: "Payment Instructions",
      description:
        "Generate and track payment instructions for client-bank or funded execution paths. Integration may be simulated, file-based, or API-connected depending on deployment.",
      status: "Available" as const,
    },
    {
      title: "Optional Working Capital",
      description:
        "Eligible organizations may request temporary payroll-funding support through a separately approved funding workflow. Not required for every payroll period.",
      status: "Available" as const,
    },
    {
      title: "Reporting",
      description:
        "Dashboards and exports for finance and HR decision-making.",
      status: "Available" as const,
    },
    {
      title: "Audit Trail",
      description:
        "Traceable records of material payroll actions and approvals.",
      status: "Available" as const,
    },
  ],
  roadmap: [
    { title: "Tax modules", status: "Planned" as const },
    { title: "BPJS modules", status: "Planned" as const },
    { title: "Employee Self-Service", status: "In Development" as const },
    { title: "HRIS integrations", status: "Planned" as const },
    { title: "AI Payroll Checker", status: "Planned" as const },
    { title: "Earned Wage Access", status: "Planned" as const },
    { title: "Open API", status: "Planned" as const },
  ],
  modules: [
    {
      title: "Payroll processing",
      body: "Calculate salary, allowances, overtime, and deductions with exception handling before approval.",
    },
    {
      title: "Approval workflow",
      body: "Route multi-level review so HR and finance authorize payroll before money moves.",
    },
    {
      title: "Client-funded execution",
      body: "Default path: source of funds remains the client bank account; ProQPay does not own client payroll money.",
    },
    {
      title: "Optional working capital",
      body: "When approved and policy-aligned, temporary funding may bridge cash-flow timing—never forced on every cycle.",
    },
    {
      title: "Payment instructions & execution",
      body: "Build payment instructions and monitor execution status with reconciliation and audit.",
    },
    {
      title: "Reconciliation",
      body: "Close the cycle with finance-ready settlement and status visibility.",
    },
    {
      title: "Reporting",
      body: "Provide leadership and operations with cost, headcount, and cycle performance views.",
    },
    {
      title: "Security and auditability",
      body: "Role-based access and retained history for material payroll actions.",
    },
  ],
  stats: [
    { label: "Founded", value: 2019, suffix: "", prefix: "" },
    { label: "Corporate Clients", value: 3, suffix: "", prefix: "" },
    { label: "Employees Processed Monthly", value: 500, suffix: "+", prefix: "" },
    {
      label: "Payroll Value Managed Monthly",
      value: 650,
      suffix: "M+",
      prefix: "IDR ",
    },
  ],
};

export const proqpayFaqs = [
  {
    question: "Is ProQPay part of MSG?",
    answer:
      "Yes. ProQPay is MSG's enterprise payroll infrastructure product—developed and positioned within PT Mandiri Semesta Gemilang's technology pillar.",
  },
  {
    question: "What does ProQPay cover today?",
    answer:
      "ProQPay focuses on payroll processing, approval workflow, disbursement, reporting, auditability, and structured payroll working capital support for approved clients.",
  },
  {
    question: "Are tax and BPJS modules fully live?",
    answer:
      "Tax and BPJS-related capabilities may appear on the roadmap. Only modules labeled Available should be treated as operational. Planned and In Development items are not claimed as live.",
  },
  {
    question: "Who is ProQPay for?",
    answer:
      "Enterprise companies, manufacturers, outsourcing operators, and multi-entity organizations that need controlled payroll operations in Indonesia.",
  },
  {
    question: "How do I request a demo?",
    answer:
      "Use Contact on www.msg-os.com and select Payroll Demo. Authorized users sign in at proqpay.msg-os.com/login.",
  },
  {
    question: "What is client-funded payroll vs working capital?",
    answer:
      "Client-funded payroll keeps source of funds in the client bank account; ProQPay coordinates execution without owning the money. Working capital is optional temporary funding support that requires a separate approval and allocation workflow.",
  },
];
