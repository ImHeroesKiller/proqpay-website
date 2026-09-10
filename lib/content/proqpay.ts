export const proqpayProduct = {
  name: "ProQPay",
  label: "An MSG Technology Product",
  headline: "Process payroll. Approve payments. Disburse salaries. Reconcile everything.",
  description:
    "ProQPay is MSG's enterprise payroll operating platform for payroll processing, multi-level approval, salary disbursement, reconciliation, audit, and reporting.",
  problem: {
    title: "Payroll needs control, not more complexity",
    description:
      "Enterprise payroll teams must reconcile employee data, attendance, allowances, deductions, statutory obligations, approval authority, and salary disbursement under fixed cut-off pressure.",
    points: [
      "Manual handoffs create avoidable payroll risk",
      "Calculation and data errors affect employee trust",
      "Approval ownership is often unclear across HR and finance",
      "Mass salary disbursement requires strong payment controls",
      "Multi-branch and multi-entity payroll needs one operating standard",
      "Sensitive payroll activity requires traceability and access control",
    ],
  },
  engagementModels: [
    {
      title: "ProQPay Platform",
      description:
        "Your team operates payroll through ProQPay with controlled processing, approvals, disbursement workflow, reconciliation, and reporting.",
    },
    {
      title: "MSG Managed Payroll",
      description:
        "MSG operates the payroll service using ProQPay as the control platform, including agreed payroll administration and reporting activities.",
    },
    {
      title: "Optional Payroll Funding",
      description:
        "Eligible clients may request temporary payroll funding. Availability, amount, and terms are subject to MSG financial and credit assessment.",
    },
  ],
  features: [
    {
      title: "Payroll Processing",
      description:
        "Prepare salary, allowances, overtime, deductions, and payroll exceptions before approval.",
      status: "Available" as const,
    },
    {
      title: "Multi-Level Approval",
      description:
        "Route payroll through clear HR and finance authorization before payment instructions are released.",
      status: "Available" as const,
    },
    {
      title: "Salary Disbursement Workflow",
      description:
        "Generate and track payment instructions through client-funded or approved funded execution paths.",
      status: "Available" as const,
    },
    {
      title: "Reconciliation",
      description:
        "Match payroll instructions and execution status so finance can close the cycle with clear visibility.",
      status: "Available" as const,
    },
    {
      title: "Reporting",
      description:
        "Provide HR, finance, and management with structured payroll and operational reporting.",
      status: "Available" as const,
    },
    {
      title: "Audit Trail",
      description:
        "Retain traceable records of material payroll actions, approvals, and workflow status.",
      status: "Available" as const,
    },
  ],
  modules: [
    {
      title: "Payroll processing",
      body: "Prepare payroll components and exceptions in a controlled cycle before approval.",
    },
    {
      title: "Approval workflow",
      body: "Give HR and finance clear review and authorization checkpoints before money moves.",
    },
    {
      title: "Client-funded execution",
      body: "The normal path keeps payroll funds in the client's designated account while ProQPay coordinates the workflow.",
    },
    {
      title: "Optional payroll funding",
      body: "Approved clients may use temporary funding to bridge payroll timing, subject to separate assessment and approval.",
    },
    {
      title: "Payment instructions",
      body: "Prepare and track salary payment instructions with status visibility through execution.",
    },
    {
      title: "Reconciliation & reporting",
      body: "Close the cycle with traceable payroll status, settlement visibility, and finance-ready reporting.",
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
      "Yes. ProQPay is MSG's enterprise payroll operating platform and sits within PT Mandiri Semesta Gemilang's Workforce Technology capability.",
  },
  {
    question: "What does ProQPay cover today?",
    answer:
      "ProQPay focuses on payroll processing, approval workflow, salary disbursement workflow, reconciliation, reporting, and auditability. Optional payroll funding is available only for approved clients through a separate assessment.",
  },
  {
    question: "What is the difference between ProQPay and MSG Payroll Service?",
    answer:
      "ProQPay is the technology platform. MSG Payroll Service is a managed service operated by MSG using ProQPay as the payroll control platform. Eligible managed-service clients may also request optional payroll funding.",
  },
  {
    question: "How are PPh 21 and BPJS handled?",
    answer:
      "MSG Managed Payroll can support agreed PPh 21 and BPJS administration as part of the service scope. Native ProQPay automation should only be treated as live when specifically confirmed as available for the client's implementation.",
  },
  {
    question: "Who is ProQPay for?",
    answer:
      "Enterprise companies, manufacturers, outsourcing operators, and multi-entity organizations that need controlled payroll operations in Indonesia.",
  },
  {
    question: "What is client-funded payroll vs payroll funding?",
    answer:
      "Client-funded payroll keeps the source of funds in the client's designated account. Payroll funding is an optional temporary facility that requires separate financial and credit assessment by MSG.",
  },
];
