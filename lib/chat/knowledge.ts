import { siteConfig } from "@/lib/site-config";
import { services, strategicAdvisoryContent, servicePillars } from "@/lib/content/services";
import { industries } from "@/lib/content/industries";
import { faqs } from "@/lib/content/faq";
import { aboutContent } from "@/lib/content/about";
import { proqpayProduct } from "@/lib/content/proqpay";
import {
  getPortfolioChatFacts,
  getPublishedPortfolioCompanies,
  isManagedPortfolioPublished,
  managedPortfolioConfig,
} from "@/lib/content/portfolio";

export type KnowledgeChunk = {
  id: string;
  title: string;
  tags: string[];
  content: string;
};

/**
 * Mini knowledge corpus for RAG retrieval about MSG and products.
 * Keep factual and free of invented metrics/clients.
 */
export function buildKnowledgeBase(): KnowledgeChunk[] {
  const chunks: KnowledgeChunk[] = [
    {
      id: "company-overview",
      title: "Profil MSG",
      tags: [
        "msg",
        "perusahaan",
        "profil",
        "tentang",
        "about",
        "siapa",
        "company",
        "mandiri",
        "semesta",
        "gemilang",
        "berdiri",
        "2019",
        "transformasi",
        "transformation",
      ],
      content: [
        `${siteConfig.legalName} (MSG) adalah Enterprise Workforce Solutions & Business Transformation Partner di Indonesia.`,
        `Berdiri tahun ${siteConfig.founded}.`,
        `Positioning: ${siteConfig.positioning}`,
        `Tiga pilar: Strategic Advisory, Workforce Solutions, Workforce Technology.`,
        `Tagline: ${siteConfig.tagline}.`,
        "MSG membantu perusahaan improve, operate, transform, grow, dan scale—bukan hanya menyalurkan tenaga kerja.",
      ].join(" "),
    },
    {
      id: "pillars",
      title: "Tiga pilar MSG",
      tags: [
        "pilar",
        "framework",
        "model",
        "cara kerja",
        "advisory",
        "workforce",
        "technology",
        "strategic",
      ],
      content: aboutContent.pillars
        .map((p) => `${p.title}: ${p.description}`)
        .join(" "),
    },
    {
      id: "strategic-advisory",
      title: "Strategic Advisory",
      tags: [
        "strategic advisory",
        "advisory",
        "konsultan",
        "business recovery",
        "recovery",
        "cashflow",
        "restrukturisasi",
        "restructuring",
        "investment readiness",
        "investor",
        "valuation",
        "due diligence",
        "m&a",
        "merger",
        "akuisisi",
        "acquisition",
        "jual perusahaan",
        "exit",
        "business transformation",
        "transformasi",
        "operational excellence",
        "corporate advisory",
        "outsourcing consulting",
      ],
      content: [
        "Strategic Advisory adalah Featured Service MSG.",
        strategicAdvisoryContent.subheadline,
        "Cakupan: Business Recovery, Outsourcing Business Advisory, Investment Readiness, M&A Advisory, Business Transformation.",
        ...strategicAdvisoryContent.serviceLines.map(
          (s) => `${s.title}: ${s.items.join(", ")}`,
        ),
        `Disclaimer: ${strategicAdvisoryContent.disclaimer}`,
        "URL: /services/strategic-advisory",
        "CTA: Request Strategic Assessment / Talk to Our Advisory Team",
        "Jika user ingin jual perusahaan, cari investor, kesulitan cashflow, merger/akuisisi, atau transformasi bisnis → arahkan ke Strategic Advisory.",
      ].join(" "),
    },
    {
      id: "contact",
      title: "Kontak & Kantor MSG",
      tags: [
        "kontak",
        "contact",
        "email",
        "telepon",
        "phone",
        "whatsapp",
        "alamat",
        "kantor",
        "office",
        "jakarta",
        "hubungi",
      ],
      content: [
        `Email: ${siteConfig.contact.email}`,
        `Marketing: ${siteConfig.contact.marketingEmail}`,
        `Telepon: ${siteConfig.contact.phoneDisplay}`,
        `WhatsApp bisnis: ${siteConfig.contact.whatsappDisplay}`,
        `Kantor: ${siteConfig.contact.addressDetail}`,
        `Website: ${siteConfig.websiteDisplay}`,
        `Konsultasi: /request-consultation atau /contact`,
        `Strategic assessment: /request-consultation?intent=strategic-advisory`,
      ].join(" · "),
    },
    {
      id: "how-we-work",
      title: "Cara kerja MSG",
      tags: [
        "proses",
        "process",
        "cara kerja",
        "workflow",
        "understand",
        "design",
        "mobilize",
        "operate",
        "measure",
        "improve",
      ],
      content: aboutContent.howWeWork
        .map((s) => `${s.step}. ${s.title}: ${s.description}`)
        .join(" "),
    },
    {
      id: "proqpay-overview",
      title: "ProQPay overview",
      tags: [
        "proqpay",
        "payroll",
        "gaji",
        "produk",
        "product",
        "software",
        "platform",
        "demo",
        "login",
        "workforce technology",
      ],
      content: [
        `${proqpayProduct.name} adalah produk Workforce Technology MSG (${siteConfig.products.proqpay.label}).`,
        siteConfig.products.proqpay.headline,
        proqpayProduct.description,
        `App: ${siteConfig.appUrl}`,
        `Login: ${siteConfig.appLoginUrl}`,
        `Halaman: /technology dan /products/proqpay`,
        "Default model: client-funded payroll. Working capital bersifat opsional dan terpisah.",
      ].join(" "),
    },
    {
      id: "proqpay-features",
      title: "Fitur ProQPay",
      tags: [
        "fitur",
        "feature",
        "approval",
        "disbursement",
        "working capital",
        "reporting",
        "audit",
        "payroll",
        "proqpay",
      ],
      content: [
        proqpayProduct.solution.description,
        ...proqpayProduct.features.map(
          (f) => `${f.title} [${f.status}]: ${f.description}`,
        ),
      ].join(" "),
    },
    {
      id: "proqpay-roadmap",
      title: "Roadmap ProQPay",
      tags: [
        "roadmap",
        "planned",
        "development",
        "bpjs",
        "pph",
        "tax",
        "ess",
        "api",
        "proqpay",
      ],
      content: proqpayProduct.roadmap
        .map((r) => `${r.title}: ${r.status}`)
        .join(" · "),
    },
    {
      id: "workforce-technology-future",
      title: "Future Workforce Technology",
      tags: [
        "hr platform",
        "analytics",
        "ai",
        "dashboard",
        "coming soon",
        "technology",
      ],
      content:
        "Future products (Coming Soon, not live features): HR Platform, Workforce Analytics, AI Solutions, Operational Dashboard. Architecture ready for expansion under Workforce Technology.",
    },
    {
      id: "careers",
      title: "Karir di MSG",
      tags: [
        "karir",
        "career",
        "lowongan",
        "job",
        "lamar",
        "rekrutmen",
        "recruitment",
        "hr",
      ],
      content: [
        "Lowongan dipublikasikan hanya jika status open.",
        "MSG tidak memungut biaya rekrutmen.",
        "Verifikasi komunikasi lewat kanal resmi MSG.",
        `Kirim minat ke ${siteConfig.contact.email} atau form /contact?intent=career`,
        "Halaman: /careers",
      ].join(" "),
    },
    {
      id: "cta-paths",
      title: "Langkah berikutnya",
      tags: [
        "konsultasi",
        "consultation",
        "demo",
        "harga",
        "pricing",
        "penawaran",
        "mulai",
        "next",
        "assessment",
      ],
      content: [
        "Request consultation: /request-consultation",
        "Strategic assessment: /request-consultation?intent=strategic-advisory",
        "Contact form: /contact",
        "ProQPay demo: /contact?intent=payroll-demo atau /products/proqpay",
        "Strategic interest: /contact/strategic-interest",
        "Portfolio: /portfolio",
        "MKB: /portfolio/mitra-kreasi-bersama",
        "Jangan sebut harga pasti jika belum ada data resmi; arahkan ke konsultasi.",
      ].join(" "),
    },
    {
      id: "managed-portfolio-overview",
      title: "Managed Portfolio MSG",
      tags: [
        "portfolio",
        "managed portfolio",
        "portfolio company",
        "investor",
        "akuisisi",
        "acquisition",
        "strategic partnership",
        "mitra strategis",
        "investment",
        "dijual",
      ],
      content: isManagedPortfolioPublished()
        ? [
            managedPortfolioConfig.sectionTitle,
            managedPortfolioConfig.sectionSubtitle,
            "Portfolio companies dikelola dan dikembangkan melalui Strategic Advisory dan Value Creation Program MSG.",
            "Bukan klaim kepemilikan saham / anak perusahaan kecuali dinyatakan terpisah.",
            "Informasi transaksi bersifat confidential; NDA dapat diperlukan.",
            "Tidak ada valuasi, data keuangan, atau penawaran sekuritas di website.",
            "URL: /portfolio · CTA: /contact/strategic-interest",
            "Jika ditanya apakah MKB dijual: jawab bahwa MKB dikelola dan dikembangkan melalui program Strategic Advisory dan Value Creation MSG; MSG terbuka untuk diskusi confidential dengan investor/mitra yang memenuhi kualifikasi; detail transaksi hanya setelah review internal dan bila perlu NDA.",
          ].join(" ")
        : [
            "Tidak ada portfolio company publik saat ini.",
            "Arahkan ke Strategic Advisory: /services/strategic-advisory",
          ].join(" "),
    },
  ];

  if (isManagedPortfolioPublished()) {
    for (const company of getPublishedPortfolioCompanies()) {
      chunks.push({
        id: `portfolio-${company.slug}`,
        title: company.name,
        tags: [
          company.slug,
          company.shortName.toLowerCase(),
          company.name.toLowerCase(),
          "mkb",
          "mitra kreasi",
          "manpower",
          "brand activation",
          "fmcg",
          "jupiter",
          "portfolio",
          "investor",
          "akuisisi",
          "partnership",
          "dijual",
        ],
        content: getPortfolioChatFacts(company),
      });
    }
  }

  for (const pillar of servicePillars) {
    chunks.push({
      id: `pillar-${pillar.id}`,
      title: pillar.title,
      tags: [
        pillar.id,
        pillar.title.toLowerCase(),
        "layanan",
        "service",
        "pilar",
        ...pillar.solutions.slice(0, 6).map((s) => s.toLowerCase()),
      ],
      content: [
        pillar.title,
        pillar.summary,
        pillar.description,
        pillar.positioning,
        `Solutions: ${pillar.solutions.join("; ")}`,
        `Benefits: ${pillar.benefits.join("; ")}`,
        `URL: ${pillar.href}`,
      ].join(" "),
    });
  }

  for (const service of services) {
    chunks.push({
      id: `service-${service.slug}`,
      title: service.title,
      tags: [
        service.slug,
        service.title.toLowerCase(),
        "layanan",
        "service",
        "outsourcing",
        "workforce",
        "engineering",
        "managed",
        "business support",
        "advisory",
        ...service.capabilities.slice(0, 8).map((c) => c.toLowerCase()),
      ],
      content: [
        service.title,
        service.summary,
        service.description,
        `Benefit: ${service.benefit}`,
        `Outcome: ${service.outcome}`,
        `Scope: ${service.capabilities.slice(0, 12).join("; ")}`,
        `URL: /services/${service.slug}`,
      ].join(" "),
    });
  }

  for (const industry of industries) {
    chunks.push({
      id: `industry-${industry.slug}`,
      title: industry.title,
      tags: [
        industry.slug,
        industry.title.toLowerCase(),
        "industri",
        "industry",
        "sektor",
      ],
      content: [
        industry.title,
        industry.summary,
        industry.description,
        `How MSG helps: ${industry.howWeHelp.join("; ")}`,
        `URL: /industries/${industry.slug}`,
        "Ini peta kapabilitas, bukan daftar endorsement klien bernama.",
      ].join(" "),
    });
  }

  for (const [i, faq] of faqs.entries()) {
    chunks.push({
      id: `faq-${i}`,
      title: faq.question,
      tags: ["faq", ...faq.question.toLowerCase().split(/\W+/).filter(Boolean)],
      content: `Q: ${faq.question} A: ${faq.answer}`,
    });
  }

  return chunks;
}
