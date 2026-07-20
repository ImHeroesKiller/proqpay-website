import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Legacy ProQPay-first routes → MSG architecture
      {
        source: "/solutions",
        destination: "/products/proqpay",
        permanent: true,
      },
      {
        source: "/solutions/:slug",
        destination: "/products/proqpay",
        permanent: true,
      },
      {
        source: "/platform",
        destination: "/products/proqpay",
        permanent: true,
      },
      {
        source: "/request-demo",
        destination: "/contact?intent=payroll-demo",
        permanent: true,
      },
      {
        source: "/industries/construction",
        destination: "/industries/construction-engineering",
        permanent: true,
      },
      {
        source: "/industries/outsourcing",
        destination: "/services/workforce-outsourcing",
        permanent: true,
      },
      {
        source: "/industries/logistics",
        destination: "/industries/logistics-distribution",
        permanent: true,
      },
      {
        source: "/industries/retail",
        destination: "/industries/retail-consumer",
        permanent: true,
      },
      // Legacy service slugs
      {
        source: "/services/engineering-outsourcing",
        destination: "/services/engineering-talent",
        permanent: true,
      },
      {
        source: "/services/business-process-outsourcing",
        destination: "/services/business-support",
        permanent: true,
      },
      {
        source: "/services/managed-security",
        destination: "/services/managed-workforce",
        permanent: true,
      },
      {
        source: "/services/it-infrastructure",
        destination: "/services/business-support",
        permanent: true,
      },
      {
        source: "/services/sales-lead-generation",
        destination: "/services/business-support",
        permanent: true,
      },
      {
        source: "/resources/downloads",
        destination: "/resources",
        permanent: false,
      },
      // Clean aliases keep canonical content pages too
      {
        source: "/resources/blog",
        destination: "/news",
        permanent: false,
      },
      {
        source: "/resources/faq",
        destination: "/faq",
        permanent: false,
      },
    ];
  },
};


export default nextConfig;
