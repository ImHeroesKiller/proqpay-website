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
  { title: "About", href: "/about" },
  {
    title: "Services",
    href: "/services",
    mega: {
      columns: [
        {
          heading: "Workforce Services",
          items: [
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
              title: "Business Process Outsourcing",
              href: "/services/business-process-outsourcing",
              description: "Admin support, data entry, and back-office delivery.",
            },
          ],
        },
        {
          heading: "Technology & Growth",
          items: [
            {
              title: "Managed Security",
              href: "/services/managed-security",
              description: "Monitoring, threat awareness, and compliance support.",
            },
            {
              title: "IT Infrastructure",
              href: "/services/it-infrastructure",
              description: "Cloud, network, and help desk operations.",
            },
            {
              title: "Sales & Lead Generation",
              href: "/services/sales-lead-generation",
              description: "B2B pipeline support and appointment setting.",
            },
          ],
        },
      ],
      cta: {
        title: "Explore all services",
        description: "See how MSG integrates people, operations, and technology.",
        href: "/services",
      },
    },
  },
  {
    title: "Products",
    href: "/products",
    mega: {
      columns: [
        {
          heading: "Technology Products",
          items: [
            {
              title: "ProQPay",
              href: "/products/proqpay",
              description: "Enterprise payroll infrastructure — an MSG technology product.",
            },
            {
              title: "Future Products",
              href: "/products",
              description: "Content Coming Soon — additional MSG products will appear here.",
            },
          ],
        },
      ],
      cta: {
        title: "Discover ProQPay",
        description: "Payroll processing, disbursement, and controlled working capital.",
        href: "/products/proqpay",
      },
    },
  },
  {
    title: "Industries",
    href: "/industries",
    children: [
      { title: "Manufacturing", href: "/industries/manufacturing" },
      { title: "Retail", href: "/industries/retail" },
      { title: "Construction & Engineering", href: "/industries/construction-engineering" },
      { title: "Logistics", href: "/industries/logistics" },
      { title: "Professional Services", href: "/industries/professional-services" },
      { title: "Financial Services", href: "/industries/financial-services" },
    ],
  },
  { title: "Operational Excellence", href: "/operational-excellence" },
  { title: "Portfolio", href: "/portfolio" },
  {
    title: "Resources",
    href: "/resources",
    children: [
      { title: "Blog", href: "/resources/blog" },
      { title: "Guides", href: "/resources/guides" },
      { title: "FAQ", href: "/resources/faq" },
    ],
  },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: "/contact" },
];

export const footerNavigation = {
  services: [
    { title: "Workforce Outsourcing", href: "/services/workforce-outsourcing" },
    { title: "Business Process Outsourcing", href: "/services/business-process-outsourcing" },
    { title: "Engineering Outsourcing", href: "/services/engineering-outsourcing" },
    { title: "IT Infrastructure", href: "/services/it-infrastructure" },
  ],
  products: [
    { title: "ProQPay", href: "/products/proqpay" },
    { title: "All Products", href: "/products" },
  ],
  company: [
    { title: "About MSG", href: "/about" },
    { title: "Operational Excellence", href: "/operational-excellence" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" },
  ],
  resources: [
    { title: "Blog", href: "/resources/blog" },
    { title: "Guides", href: "/resources/guides" },
    { title: "FAQ", href: "/resources/faq" },
    { title: "Request Consultation", href: "/request-consultation" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Use", href: "/terms" },
  ],
};
