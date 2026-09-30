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
          background: "#090909",
          position: "relative",
        }}
      >
        <svg width="134" height="150" viewBox="0 0 134 150" fill="none">
          <path
            d="M67 5 126 28v44c0 37-23 60-59 75C31 132 8 109 8 72V28L67 5Z"
            fill="#101010"
            stroke="#b89962"
            strokeWidth="4"
          />
          <path
            d="M67 22v33m-23-21h46m-23-12-5 12h10l-5-12"
            stroke="#d7c08c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </svg>
        <div
          style={{
            position: "absolute",
            top: "82px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            color: "#ffffff",
            fontFamily: "Georgia,serif",
            fontSize: "43px",
            fontWeight: 700,
            letterSpacing: "-5px",
          }}
        >
          VB
        </div>
      </div>
    ),
    size,
  );
}
