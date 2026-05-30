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
    <html>
      <body style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", gap: 16, padding: 24, margin: 0, fontFamily: "system-ui, sans-serif", background: "#1a1c24", color: "#f5f5f8" }}>
        <h2 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 600 }}>Something went wrong</h2>
        <p style={{ margin: 0, fontSize: "0.875rem", color: "#8a8fa8" }}>{error.message}</p>
        <button
          onClick={reset}
          style={{ padding: "10px 18px", borderRadius: 10, background: "#d4b896", color: "#3a2e24", border: "none", cursor: "pointer", fontWeight: 600 }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
