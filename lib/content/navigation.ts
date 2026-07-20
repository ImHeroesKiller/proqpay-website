export type NavLink = {
  title: string;
  href: string;
  description?: string;
};

export type NavItem = {
  title: string;
  href: string;
  description?: string;
  children?: NavLink[];
  mega?: {
    columns: { heading: string; items: NavLink[] }[];
    cta?: { title: string; description: string; href: string };
  };
};

export const mainNavigation: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "Solutions",
    href: "/solutions",
    mega: {
      columns: [
        {
          heading: "Core Services",
          items: [
            {
              title: "Payroll Processing",
              href: "/solutions/payroll-processing",
              description: "End-to-end payroll management with accuracy guaranteed.",
            },
            {
              title: "Payroll Disbursement",
              href: "/solutions/payroll-disbursement",
              description: "Fast, secure multi-bank salary payments at scale.",
            },
            {
              title: "Payroll Working Capital",
              href: "/solutions/payroll-working-capital",
              description: "Structured support so payroll is always on time.",
            },
          ],
        },
        {
          heading: "Control & Compliance",
          items: [
            {
              title: "Approval Workflow",
              href: "/solutions/approval-workflow",
              description: "Multi-level approvals with full auditability.",
            },
            {
              title: "Reports",
              href: "/solutions/reports",
              description: "Real-time dashboards for finance and HR leaders.",
            },
            {
              title: "Compliance",
              href: "/solutions/compliance",
              description: "PPh 21, BPJS, and regulatory alignment built in.",
            },
          ],
        },
      ],
      cta: {
        title: "Talk to Sales",
        description: "See how ProQPay fits your payroll operating model.",
        href: "/contact?intent=sales",
      },
    },
  },
  {
    title: "Industries",
    href: "/industries",
    children: [
      { title: "Manufacturing", href: "/industries/manufacturing" },
      { title: "Retail", href: "/industries/retail" },
      { title: "Construction", href: "/industries/construction" },
      { title: "Logistics", href: "/industries/logistics" },
      { title: "Professional Services", href: "/industries/professional-services" },
      { title: "Outsourcing", href: "/industries/outsourcing" },
    ],
  },
  {
    title: "Platform",
    href: "/platform",
    children: [
      { title: "Architecture", href: "/platform#architecture" },
      { title: "Security", href: "/platform#security" },
      { title: "Approval Workflow", href: "/platform#approval-workflow" },
      { title: "Role Management", href: "/platform#role-management" },
      { title: "Audit Trail", href: "/platform#audit-trail" },
      { title: "Multi Company", href: "/platform#multi-company" },
      { title: "Scalability", href: "/platform#scalability" },
      { title: "Integrations", href: "/platform#integrations" },
      { title: "Future AI", href: "/platform#future-ai" },
    ],
  },
  { title: "About", href: "/about" },
  {
    title: "Resources",
    href: "/resources",
    children: [
      { title: "Blog", href: "/resources/blog" },
      { title: "Payroll Guide", href: "/resources/guides" },
      { title: "FAQ", href: "/resources/faq" },
      { title: "Downloads", href: "/resources/downloads" },
    ],
  },
  { title: "Contact", href: "/contact" },
];

export const footerNavigation = {
  solutions: [
    { title: "Payroll Processing", href: "/solutions/payroll-processing" },
    { title: "Payroll Disbursement", href: "/solutions/payroll-disbursement" },
    { title: "Working Capital", href: "/solutions/payroll-working-capital" },
    { title: "Compliance", href: "/solutions/compliance" },
  ],
  industries: [
    { title: "Manufacturing", href: "/industries/manufacturing" },
    { title: "Outsourcing", href: "/industries/outsourcing" },
    { title: "Logistics", href: "/industries/logistics" },
    { title: "Retail", href: "/industries/retail" },
  ],
  platform: [
    { title: "Overview", href: "/platform" },
    { title: "Security", href: "/platform#security" },
    { title: "Integrations", href: "/platform#integrations" },
    { title: "Future AI", href: "/platform#future-ai" },
  ],
  company: [
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Request Demo", href: "/request-demo" },
  ],
  resources: [
    { title: "Blog", href: "/resources/blog" },
    { title: "Guides", href: "/resources/guides" },
    { title: "FAQ", href: "/resources/faq" },
    { title: "Downloads", href: "/resources/downloads" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
  ],
};
