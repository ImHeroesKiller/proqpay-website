import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ProQPay — Enterprise Payroll Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B1F33",
          color: "white",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 48, fontWeight: 700 }}>
            Pro<span style={{ color: "#FF5400" }}>Q</span>Pay
          </div>
          <div
            style={{
              marginTop: 12,
              fontSize: 18,
              letterSpacing: 4,
              color: "#9FB3C8",
              textTransform: "uppercase",
            }}
          >
            Your Payroll Solution
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.15, maxWidth: 900 }}>
            Simplifying Payroll. Empowering Indonesia&apos;s Workforce.
          </div>
          <div style={{ fontSize: 24, color: "#CBD5E1", maxWidth: 800 }}>
            Modern payroll processing & disbursement platform for Indonesian enterprises.
          </div>
        </div>
        <div style={{ display: "flex", color: "#F28C28", fontSize: 20, fontWeight: 600 }}>
          proqpay.id
        </div>
      </div>
    ),
    { ...size },
  );
}
