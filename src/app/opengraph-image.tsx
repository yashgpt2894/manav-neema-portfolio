import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt =
  "Manav Neema - Data Engineer and Machine Learning Systems Builder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#d5cfbe",
          color: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: "58px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#f8ff3d",
            display: "flex",
            fontSize: 224,
            fontWeight: 900,
            letterSpacing: "-16px",
            lineHeight: 0.8,
          }}
        >
          MANAV
        </div>
        <div
          style={{
            alignItems: "flex-end",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              width: 780,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 59,
                fontWeight: 800,
                letterSpacing: "-3px",
                lineHeight: 0.98,
              }}
            >
              Data systems, engineered for real decisions.
            </div>
            <div style={{ display: "flex", fontSize: 23 }}>
              Data engineering · Analytics · ML systems · Amsterdam
            </div>
          </div>
          <div
            style={{
              alignItems: "center",
              background: "#0a0a0a",
              borderRadius: 22,
              color: "#f8f7f3",
              display: "flex",
              fontSize: 36,
              fontWeight: 800,
              height: 108,
              justifyContent: "center",
              width: 108,
            }}
          >
            MN
          </div>
        </div>
      </div>
    ),
    size,
  );
}
