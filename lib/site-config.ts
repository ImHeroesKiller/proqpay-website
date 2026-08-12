export const siteConfig = {
  name: "MSG",
  legalName: "PT Mandiri Semesta Gemilang",
  brand: "MSG",
  tagline: "Workforce Management Partner",
  supportingLine:
    "People. Operations. Technology. Integrated solutions for sustainable business growth.",
  description:
    "PT Mandiri Semesta Gemilang (MSG) is a Workforce Management Partner integrating strategy, people, and technology through Strategic Advisory, Workforce Solutions, and Technology.",
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
  companyMessage: "Workforce Management Partner",
  slogan: "People · Operations · Technology",
  positioning:
    "PT Mandiri Semesta Gemilang integrates strategy, people, and technology to deliver end-to-end solutions that drive business transformation and sustainable growth.",
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
    headline: "One Partner. Integrated Solutions. Measurable Impact.",
    subheadline:
      "MSG mengintegrasikan strategi, people, dan technology untuk mendorong transformasi bisnis dan pertumbuhan berkelanjutan.",
    subheadlineEn:
      "MSG integrates strategy, people, and technology to drive business transformation and sustainable growth.",
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
      label: "Technology Solution · Payroll Platform",
      headline: "One payroll platform. Three levels of service.",
      description:
        "ProQPay Lite supports payment processing, managed payroll, and automation and integration through one controlled payroll ecosystem.",
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
