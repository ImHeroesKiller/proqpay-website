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
};

export const mainNavigation: NavItem[] = [
  { title: "About", href: "/about" },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Workforce Outsourcing",
        href: "/services/workforce-outsourcing",
        description: "Plan, source, deploy, and manage enterprise workforce capacity.",
      },
      {
        title: "Engineering Talent",
        href: "/services/engineering-talent",
        description: "Technical and engineering professionals for project delivery.",
      },
      {
        title: "Business Support",
        href: "/services/business-support",
        description: "Admin, finance, customer service, and back-office support.",
      },
      {
        title: "Managed Workforce",
        href: "/services/managed-workforce",
        description: "End-to-end workforce operations with governance and reporting.",
      },
    ],
  },
  {
    title: "Industries",
    href: "/industries",
    children: [
      {
        title: "Technology & Telecommunications",
        href: "/industries/technology-telecommunications",
      },
      {
        title: "Construction & Engineering",
        href: "/industries/construction-engineering",
      },
      {
        title: "Financial Services",
        href: "/industries/financial-services",
      },
      {
        title: "Manufacturing",
        href: "/industries/manufacturing",
      },
      {
        title: "All Industries",
        href: "/industries",
        description: "Industries we support across Indonesia.",
      },
    ],
  },
  {
    title: "Products",
    href: "/products",
    children: [
      {
        title: "ProQPay",
        href: "/products/proqpay",
        description: "Payroll visibility for modern workforce operations.",
      },
    ],
  },
  { title: "Careers", href: "/careers" },
  {
    title: "Resources",
    href: "/resources",
    children: [
      { title: "News", href: "/news", description: "Insights and company updates." },
      { title: "FAQ", href: "/faq", description: "Common questions answered." },
      { title: "Guides", href: "/resources/guides", description: "Practical operating guides." },
    ],
  },
  { title: "Contact", href: "/contact" },
];

export const footerNavigation = {
  company: [
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Industries", href: "/industries" },
    { title: "Careers", href: "/careers" },
  ],
  services: [
    { title: "Workforce Outsourcing", href: "/services/workforce-outsourcing" },
    { title: "Engineering Talent", href: "/services/engineering-talent" },
    { title: "Business Support", href: "/services/business-support" },
    { title: "Managed Workforce", href: "/services/managed-workforce" },
  ],
  products: [
    { title: "ProQPay", href: "/products/proqpay" },
    { title: "Product Login", href: "https://proqpay.msg-os.com/login" },
    { title: "Request Demo", href: "/contact?intent=payroll-demo" },
  ],
  resources: [
    { title: "News", href: "/news" },
    { title: "FAQ", href: "/faq" },
    { title: "Contact", href: "/contact" },
  ],
  legal: [
    { title: "Privacy", href: "/privacy" },
    { title: "Terms", href: "/terms" },
  ],
};
