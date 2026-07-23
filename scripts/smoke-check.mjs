/**
 * Lightweight smoke checks against a running site (local or production).
 * Usage: node scripts/smoke-check.mjs [baseUrl]
 */
const base = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");

const routes = [
  "/",
  "/about",
  "/services",
  "/services/strategic-advisory",
  "/services/workforce-solutions",
  "/services/workforce-outsourcing",
  "/services/engineering-talent",
  "/services/business-support",
  "/services/managed-workforce",
  "/technology",
  "/products",
  "/products/proqpay",
  "/industries",
  "/careers",
  "/news",
  "/faq",
  "/contact",
  "/contact/strategic-interest",
  "/request-consultation",
  "/portfolio",
  "/portfolio/mitra-kreasi-bersama",
  "/privacy",
  "/terms",
  "/sitemap.xml",
  "/robots.txt",
  "/brand/logo-msg.webp",
];

let failed = 0;

for (const route of routes) {
  const url = `${base}${route}`;
  try {
    const res = await fetch(url, { redirect: "follow" });
    const ok = res.status >= 200 && res.status < 400;
    console.log(`${ok ? "OK " : "FAIL"} ${res.status} ${route}`);
    if (!ok) failed += 1;
  } catch (error) {
    console.log(`FAIL ERR ${route} — ${error.message}`);
    failed += 1;
  }
}

if (failed > 0) {
  console.error(`\n${failed} route(s) failed.`);
  process.exit(1);
}

console.log(`\nAll ${routes.length} routes OK on ${base}`);
