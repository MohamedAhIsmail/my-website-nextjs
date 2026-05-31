"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          padding: 24,
          fontFamily: "system-ui, -apple-system, sans-serif",
          background: "#141620",
          color: "#f0f0f5",
          textAlign: "center",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 16,
            background: "rgba(226, 76, 76, 0.12)",
            border: "1px solid rgba(226, 76, 76, 0.25)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#e24c4c"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            width={28}
            height={28}
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <h2 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 700 }}>
            Critical error
          </h2>
          <p style={{ margin: 0, fontSize: "0.875rem", color: "#8a8fa8", maxWidth: "36ch" }}>
            The application encountered an unexpected error and could not recover.
          </p>
        </div>

        <button
          onClick={reset}
          style={{
            padding: "10px 22px",
            borderRadius: 10,
            background: "#c9a880",
            color: "#2a1f14",
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: "0.9375rem",
            fontFamily: "inherit",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
