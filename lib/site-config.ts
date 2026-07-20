export const siteConfig = {
  name: "MSG",
  legalName: "PT Mandiri Semesta Gemilang",
  brand: "MSG",
  tagline: "Empowering Businesses Through People, Operations & Technology",
  supportingLine:
    "Integrated workforce solutions built for sustainable business growth.",
  description:
    "PT Mandiri Semesta Gemilang (MSG) is an Indonesian enterprise workforce solutions company. We combine people, operations, and technology to help organizations scale with confidence.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://msg-os.com",
  websiteDisplay: "www.msg-os.com",
  /** Product application under the corporate domain */
  appUrl: "https://msg-os.com/app",
  locale: "en_US",
  founded: 2019,
  companyMessage: "Reliable Outsourcing Solution Strategic Partner",
  slogan: "Empowering Businesses Through People, Operations & Technology",
  hero: {
    eyebrow: "PT Mandiri Semesta Gemilang",
    headline: "Enterprise Workforce Solutions",
    subheadline:
      "MSG helps Indonesian enterprises build efficient, compliant, and scalable workforce operations through people, operational excellence, and technology.",
  },
  contact: {
    email: "info@msg-os.com",
    marketingEmail: "marketing@msg-os.com",
    supportEmail: "info@msg-os.com",
    phone: "+62 856-9766-6101",
    phoneDisplay: "+62 856-9766-6101",
    whatsapp: "081316671371",
    whatsappDisplay: "0813-1667-1371",
    whatsappUrl: "https://wa.me/6281316671371",
    address: "South Jakarta, Indonesia",
    addressDetail: "Pondok Pinang Office Center No. 22, South Jakarta",
    salesContact: "Dina Marliana",
    salesRole: "Sales and Marketing",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/msg-os",
    twitter: "https://x.com/msg_os",
    instagram: "https://www.instagram.com/msg.os",
  },
  products: {
    proqpay: {
      name: "ProQPay",
      label: "An MSG Technology Product",
      headline: "Enterprise Payroll Infrastructure for Indonesian Businesses",
      description:
        "ProQPay is MSG's payroll technology product for processing, approval, disbursement, working capital support, and reporting.",
      appUrl: "https://msg-os.com/app",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
