export const siteConfig = {
  name: "ProQPay",
  legalName: "ProQPay",
  tagline: "YOUR PAYROLL SOLUTION",
  description:
    "Modern payroll processing and disbursement platform for Indonesian enterprises. Accurate, compliant, and built for scale.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://proqpay.id",
  appUrl: "https://app.proqpay.id",
  locale: "en_US",
  founded: 2019,
  slogan: "Payroll Made Simple. Business Made Better.",
  hero: {
    headline: "Simplifying Payroll.\nEmpowering Indonesia's Workforce.",
    subheadline:
      "Modern Payroll Processing & Payroll Disbursement Platform for Indonesian Enterprises.",
  },
  contact: {
    email: "hello@proqpay.id",
    salesEmail: "sales@proqpay.id",
    phone: "+62 21 0000 0000",
    address: "Jakarta, Indonesia",
    addressDetail: "Content Coming Soon — office address will be published here.",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/proqpay",
    twitter: "https://x.com/proqpay",
    instagram: "https://www.instagram.com/proqpay",
  },
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
} as const;

export type SiteConfig = typeof siteConfig;
