import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
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
        destination: "/request-consultation?intent=proqpay-demo",
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
        source: "/resources/downloads",
        destination: "/resources",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
