import { ImageResponse } from "next/og";

export const alt = "J&R Home Creation — Verbouwingen, aanbouw en nieuwbouw in Antwerpen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#192B3C",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Amber accent bar */}
        <div
          style={{
            width: 64,
            height: 6,
            background: "#D4892A",
            borderRadius: 3,
            marginBottom: 32,
          }}
        />

        {/* Business name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#F6F4F0",
            lineHeight: 1,
            letterSpacing: "-1px",
            marginBottom: 20,
          }}
        >
          J&amp;R Home Creation
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: "rgba(246, 244, 240, 0.65)",
            lineHeight: 1.3,
            maxWidth: 700,
          }}
        >
          Verbouwingen · Aanbouw · Nieuwbouw
        </div>

        {/* Region + year */}
        <div
          style={{
            position: "absolute",
            bottom: 64,
            left: 80,
            fontSize: 22,
            color: "#D4892A",
            fontWeight: 600,
          }}
        >
          Regio Antwerpen · Actief depuis 2008
        </div>
      </div>
    ),
    { ...size }
  );
}
