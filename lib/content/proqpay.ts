export const proqpayProduct = {
  name: "ProQPay",
  label: "An MSG Technology Product",
  headline: "Enterprise Payroll Infrastructure for Indonesian Businesses",
  description:
    "ProQPay transforms MSG's operational workforce experience into a technology platform for payroll processing, approval, disbursement, working capital support, and reporting.",
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
    title: "One integrated payroll control model",
    description:
      "ProQPay connects employee data, calculation, multi-level approval, disbursement, reconciliation, and reporting into a governed operating flow.",
  },
  features: [
    {
      title: "Payroll Processing",
      description:
        "End-to-end payroll management with accuracy and controlled cut-off discipline.",
      status: "Available" as const,
    },
    {
      title: "Approval Workflow",
      description:
        "Configurable multi-level approvals before payroll is locked for payment.",
      status: "Available" as const,
    },
    {
      title: "Payroll Disbursement",
      description:
        "Mass salary payment support through multi-bank disbursement pathways.",
      status: "Available" as const,
    },
    {
      title: "Payroll Working Capital",
      description:
        "Structured support model to help approved clients keep payroll on time when cash-flow timing is tight.",
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
      title: "Working capital model",
      body: "When approved and policy-aligned, structured support can help bridge cash-flow timing for on-time payroll.",
    },
    {
      title: "Payroll disbursement",
      body: "Build and track payment batches across multi-bank environments.",
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
      "Use Request Consultation or Contact on the MSG website and select a ProQPay / demo intent. Product login is available at app.proqpay.id for authorized users.",
  },
];
