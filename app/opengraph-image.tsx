import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GymVision: the gym OS that thinks ahead";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Typographic OG card in brand colors. Rendered at request time by next/og,
// so it stays in sync with copy changes without a design round-trip.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(230,51,41,0.25), transparent)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 900, color: "#ffffff" }}>
          Gym<span style={{ color: "#e63329" }}>Vision</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            The gym OS that thinks ahead.
          </div>
          <div style={{ fontSize: 34, color: "rgba(255,255,255,0.6)" }}>
            AI-native gym management. Stripe at-cost. One-afternoon migration.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "rgba(255,255,255,0.4)" }}>
          gymvision.app
        </div>
      </div>
    ),
    size,
  );
}
