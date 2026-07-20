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
          background: "#0B3A6E",
          color: "white",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              background: "white",
              color: "#0B3A6E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 22,
            }}
          >
            MSG
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 36, fontWeight: 700 }}>MSG</div>
            <div style={{ fontSize: 16, color: "rgba(255,255,255,0.75)" }}>
              PT Mandiri Semesta Gemilang
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 52, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
            Enterprise Workforce Solutions
          </div>
          <div style={{ fontSize: 22, color: "rgba(255,255,255,0.8)", maxWidth: 800 }}>
            People. Operations. Technology.
          </div>
        </div>
        <div style={{ fontSize: 20, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>
          msg-os.com
        </div>
      </div>
    ),
    { ...size },
  );
}
