import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MSG — PT Mandiri Semesta Gemilang";
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
          <div style={{ fontSize: 52, fontWeight: 700 }}>
            <span style={{ color: "#F28C28" }}>M</span>SG
          </div>
          <div
            style={{
              marginTop: 12,
              fontSize: 18,
              letterSpacing: 2,
              color: "#9FB3C8",
              textTransform: "uppercase",
            }}
          >
            PT Mandiri Semesta Gemilang
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: 980,
            }}
          >
            Enterprise Workforce Solutions Powered by People, Operations &
            Technology
          </div>
          <div style={{ fontSize: 22, color: "#CBD5E1", maxWidth: 860 }}>
            Integrated workforce solutions built for sustainable business growth.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            color: "#F28C28",
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          msg-os.com
        </div>
      </div>
    ),
    { ...size },
  );
}
