import { ImageResponse } from "next/og";

export const alt = "Hamza Rehman | Backend & Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#F8F7F4",
          color: "#111",
          border: "12px solid #111",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            background: "#7DD3FC",
            border: "4px solid #111",
            borderRadius: 999,
            padding: "8px 24px",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          Actively looking: Full-Stack / SRE / Golang
        </div>
        <div style={{ fontSize: 110, fontWeight: 800, marginTop: 36, lineHeight: 1 }}>
          Hamza Rehman
        </div>
        <div style={{ fontSize: 44, marginTop: 24 }}>
          Backend & Full-Stack Software Engineer
        </div>
        <div style={{ fontSize: 30, marginTop: 36, color: "#3B82F6" }}>
          Go · Node.js · PostgreSQL · Redis
        </div>
      </div>
    ),
    size,
  );
}
