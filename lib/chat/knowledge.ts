import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/content/services";
import { industries } from "@/lib/content/industries";
import { faqs } from "@/lib/content/faq";
import { aboutContent } from "@/lib/content/about";
import { proqpayProduct } from "@/lib/content/proqpay";

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
      ],
      content: [
        `${siteConfig.legalName} (MSG) adalah perusahaan enterprise workforce solutions Indonesia.`,
        `Berdiri tahun ${siteConfig.founded}.`,
        `Positioning: ${siteConfig.positioning}`,
        `Framework: People · Operations · Technology.`,
        `Tagline: ${siteConfig.tagline}.`,
        "MSG lebih dari sekadar penyedia tenaga kerja: membantu membangun, mengelola, dan mengembangkan operasi workforce.",
      ].join(" "),
    },
    {
      id: "pillars",
      title: "People Operations Technology",
      tags: [
        "people",
        "operations",
        "technology",
        "pilar",
        "framework",
        "model",
        "cara kerja",
      ],
      content: aboutContent.pillars
        .map((p) => `${p.title}: ${p.description}`)
        .join(" "),
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
      ],
      content: [
        `${proqpayProduct.name} adalah produk teknologi MSG (${proqpayProduct.label}).`,
        proqpayProduct.headline,
        proqpayProduct.description,
        `App: ${siteConfig.appUrl}`,
        `Login: ${siteConfig.appLoginUrl}`,
        `Halaman produk: /products/proqpay`,
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
      ],
      content: [
        "Request consultation: /request-consultation",
        "Contact form: /contact",
        "ProQPay demo: /contact?intent=payroll-demo atau /products/proqpay",
        "Jangan sebut harga pasti jika belum ada data resmi; arahkan ke konsultasi.",
      ].join(" "),
    },
  ];

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
        ...service.capabilities.slice(0, 8).map((c) => c.toLowerCase()),
      ],
      content: [
        service.title,
        service.summary,
        service.description,
        `Benefit: ${service.benefit}`,
        `Outcome: ${service.outcome}`,
        `Scope: ${service.capabilities.join("; ")}`,
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
