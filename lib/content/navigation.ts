export type NavLink = {
  title: string;
  href: string;
  description?: string;
  badge?: string;
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
        title: "Strategic Advisory",
        href: "/services/strategic-advisory",
        description:
          "Business recovery, growth, investment readiness, M&A, and transformation.",
        badge: "Featured",
      },
      {
        title: "Workforce Solutions",
        href: "/services/workforce-solutions",
        description:
          "Outsourcing, engineering talent, business support, and managed workforce.",
      },
      {
        title: "Workforce Technology",
        href: "/technology",
        description:
          "Technology that empowers workforce operations—starting with ProQPay.",
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
    title: "Technology",
    href: "/technology",
    children: [
      {
        title: "ProQPay",
        href: "/products/proqpay",
        description: "Payroll visibility for modern workforce operations.",
      },
      {
        title: "Workforce Technology",
        href: "/technology",
        description: "Product stack and future workforce platforms.",
      },
    ],
  },
  { title: "Careers", href: "/careers" },
  { title: "News", href: "/news" },
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
    { title: "Strategic Advisory", href: "/services/strategic-advisory" },
    { title: "Workforce Solutions", href: "/services/workforce-solutions" },
    { title: "Workforce Technology", href: "/technology" },
    { title: "Workforce Outsourcing", href: "/services/workforce-outsourcing" },
  ],
  products: [
    { title: "ProQPay", href: "/products/proqpay" },
    { title: "Technology Overview", href: "/technology" },
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
