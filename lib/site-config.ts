export const siteConfig = {
  name: "MSG",
  legalName: "PT Mandiri Semesta Gemilang",
  brand: "MSG",
  tagline: "Enterprise Workforce Solutions & Business Transformation",
  supportingLine:
    "Strategic advisory, workforce solutions, and workforce technology for Indonesian enterprises.",
  description:
    "PT Mandiri Semesta Gemilang (MSG) is an Enterprise Workforce Solutions & Business Transformation Partner. We help organizations improve, operate, transform, grow, and scale through Strategic Advisory, Workforce Solutions, and Workforce Technology.",
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
  companyMessage:
    "Enterprise Workforce Solutions & Business Transformation Partner",
  slogan: "Improve · Operate · Transform · Grow · Scale",
  positioning:
    "PT Mandiri Semesta Gemilang is an Enterprise Workforce Solutions & Business Transformation Partner that helps organizations build, improve, manage, transform, and grow through Strategic Advisory, Workforce Solutions, and Workforce Technology.",
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
    eyebrow: "PT Mandiri Semesta Gemilang",
    headline: "Building Better Businesses Through People, Operations & Technology",
    subheadline:
      "MSG membantu organisasi meningkatkan performa bisnis melalui strategic advisory, workforce solutions, dan workforce technology.",
    subheadlineEn:
      "MSG helps organizations improve business performance through strategic advisory, workforce solutions, and workforce technology.",
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
      label: "Workforce Technology · Flagship Product",
      headline: "Technology that empowers workforce operations.",
      description:
        "ProQPay is MSG's payroll technology product for processing, approval, disbursement, working capital support, and reporting—built for modern enterprise workforce operations.",
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
