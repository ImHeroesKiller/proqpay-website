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
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Workforce Outsourcing",
        href: "/services/workforce-outsourcing",
        description: "Scalable staffing and field workforce deployment.",
      },
      {
        title: "Engineering Outsourcing",
        href: "/services/engineering-outsourcing",
        description: "Specialized engineering talent for project delivery.",
      },
      {
        title: "Business Support",
        href: "/services/business-process-outsourcing",
        description: "Admin, back-office, and operational support services.",
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
        description: "Enterprise payroll infrastructure by MSG.",
      },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    children: [
      { title: "News", href: "/resources/blog", description: "Insights and updates." },
      { title: "Careers", href: "/careers", description: "Join the MSG talent network." },
      { title: "FAQ", href: "/resources/faq", description: "Common questions answered." },
    ],
  },
  { title: "Contact", href: "/contact" },
];

export const footerNavigation = {
  company: [
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Products", href: "/products" },
    { title: "Resources", href: "/resources" },
    { title: "Contact", href: "/contact" },
  ],
  products: [
    { title: "ProQPay", href: "/products/proqpay" },
    { title: "Product Login", href: "https://msg-os.com/app" },
  ],
  resources: [
    { title: "News", href: "/resources/blog" },
    { title: "Careers", href: "/careers" },
    { title: "FAQ", href: "/resources/faq" },
  ],
  legal: [
    { title: "Privacy", href: "/privacy" },
    { title: "Terms", href: "/terms" },
  ],
};
