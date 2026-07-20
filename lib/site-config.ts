export const siteConfig = {
  name: "MSG",
  legalName: "PT Mandiri Semesta Gemilang",
  brand: "MSG",
  tagline: "Empowering Businesses Through People, Operations & Technology",
  supportingLine:
    "Integrated workforce solutions built for sustainable business growth.",
  description:
    "PT Mandiri Semesta Gemilang (MSG) is an enterprise workforce solutions company combining people, operational expertise, and technology to help clients build efficient, compliant, and scalable workforce operations.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://msg-os.com",
  websiteDisplay: "www.msg-os.com",
  /** ProQPay product login — intentional product destination */
  proqpayAppUrl: "https://app.proqpay.id",
  locale: "en_US",
  founded: 2019,
  companyMessage: "Reliable Outsourcing Solution Strategic Partner",
  slogan: "Empowering Businesses Through People, Operations & Technology",
  hero: {
    eyebrow: "PT Mandiri Semesta Gemilang",
    headline: "Enterprise Workforce Solutions\nPowered by People, Operations & Technology",
    subheadline:
      "MSG helps organizations build scalable, efficient, and compliant workforce operations through outsourcing services, operational management, engineering talent, IT solutions, and digital products.",
  },
  contact: {
    email: "info@msg-os.com",
    marketingEmail: "marketing@msg-os.com",
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
        "ProQPay transforms MSG's operational workforce experience into a technology platform for payroll processing, approval, disbursement, working capital support, and reporting.",
      appUrl: "https://app.proqpay.id",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
