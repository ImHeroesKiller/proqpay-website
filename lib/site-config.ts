export const siteConfig = {
  name: "MSG",
  legalName: "PT Mandiri Semesta Gemilang",
  brand: "MSG",
  tagline: "Enterprise Workforce & Business Transformation Partner",
  supportingLine:
    "Strategy. People. Operations. Technology. Integrated for measurable business impact.",
  description:
    "PT Mandiri Semesta Gemilang (MSG) is an Enterprise Workforce & Business Transformation Partner integrating Strategic Advisory, Workforce Solutions, and Workforce Technology.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.msg-os.com",
  websiteDisplay: "www.msg-os.com",
  /** ProQPay payroll application (subdomain) */
  appUrl:
    process.env.NEXT_PUBLIC_PROQPAY_APP_URL ?? "https://proqpay.msg-os.com",
  appLoginUrl: process.env.NEXT_PUBLIC_PROQPAY_APP_URL
    ? `${process.env.NEXT_PUBLIC_PROQPAY_APP_URL.replace(/\/$/, "")}/login`
    : "https://proqpay.msg-os.com/login",
  locale: "en_US",
  founded: 2019,
  companyMessage: "Enterprise Workforce & Business Transformation Partner",
  slogan: "People · Operations · Technology",
  positioning:
    "PT Mandiri Semesta Gemilang integrates strategic advisory, workforce operations, and practical technology to improve business performance and enable sustainable growth.",
  seoKeywords: [
    "business advisory Indonesia",
    "business transformation",
    "operational excellence",
    "enterprise workforce solutions",
    "outsourcing consulting",
    "business recovery",
    "investment readiness",
    "merger acquisition advisory",
    "corporate advisory Indonesia",
    "workforce technology",
  ],
  hero: {
    eyebrow: "Enterprise Workforce & Business Transformation Partner",
    headline: "One Partner. Integrated Solutions. Measurable Impact.",
    subheadline:
      "MSG mengintegrasikan strategic advisory, workforce operations, dan technology untuk membantu perusahaan meningkatkan kinerja, mengelola tenaga kerja, dan bertumbuh secara berkelanjutan.",
    subheadlineEn:
      "MSG integrates strategic advisory, workforce operations, and technology to improve performance, strengthen workforce execution, and enable sustainable growth.",
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
      label: "Technology Solution · Enterprise Payroll Platform",
      headline: "One controlled payroll workflow.",
      description:
        "ProQPay is MSG's enterprise payroll operating platform for payroll processing, multi-level approval, salary disbursement, reconciliation, audit, and reporting.",
      appUrl:
        process.env.NEXT_PUBLIC_PROQPAY_APP_URL ?? "https://proqpay.msg-os.com",
    },
  },
  /**
   * Unverified / placeholder fields — update when confirmed.
   * Do not invent leadership names, legal numbers, headcount, or certifications.
   */
  placeholders: {
    leadership: [] as {
      name: string;
      role: string;
      bio?: string;
    }[],
    legal: {
      nib: null as string | null,
      npwp: null as string | null,
      siup: null as string | null,
    },
    metrics: {
      employees: null as number | null,
      clients: null as number | null,
      locations: null as number | null,
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
