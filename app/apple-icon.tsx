import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#101317",
        }}
      >
        <div
          style={{
            width: "82%",
            height: "82%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #d0a070",
            borderRadius: "22px",
            color: "#f0d0a0",
            fontFamily: "Georgia, serif",
            fontSize: "70px",
            fontWeight: 700,
            letterSpacing: "-10px",
            paddingRight: "10px",
          }}
        >
          RB
        </div>
      </div>
    ),
    size,
  );
}
