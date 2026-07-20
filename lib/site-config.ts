export const siteConfig = {
  name: "MSG",
  legalName: "PT Mandiri Semesta Gemilang",
  brand: "MSG",
  tagline: "Workforce Built for Performance",
  supportingLine:
    "Enterprise workforce solutions through people, operations, and technology.",
  description:
    "PT Mandiri Semesta Gemilang (MSG) is an Indonesian enterprise workforce solutions company. We help organizations build, manage, and develop workforce operations through people, operational excellence, and technology.",
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
  companyMessage: "Enterprise workforce solutions for Indonesian businesses",
  slogan: "People · Operations · Technology",
  positioning:
    "PT Mandiri Semesta Gemilang is an Indonesian enterprise workforce solutions company that helps organizations grow through people, operational excellence, and technology.",
  hero: {
    eyebrow: "PT Mandiri Semesta Gemilang",
    headline: "Workforce Built for Performance",
    subheadline:
      "PT Mandiri Semesta Gemilang membantu perusahaan membangun, mengelola, dan mengembangkan tenaga kerja melalui integrasi people, operational discipline, dan technology.",
    subheadlineEn:
      "MSG helps enterprises build, manage, and develop workforce operations through the integration of people, operational discipline, and technology.",
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
      headline: "Payroll visibility built for modern workforce operations.",
      description:
        "ProQPay is MSG's payroll technology product for processing, approval, disbursement, working capital support, and reporting.",
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
