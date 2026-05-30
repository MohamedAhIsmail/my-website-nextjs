"use client";

import { useEffect } from "react";

export default function Error({
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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 16, padding: 24 }}>
      <h2 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 600 }}>Something went wrong</h2>
      <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--muted-foreground)" }}>{error.message}</p>
      <button
        onClick={reset}
        style={{ padding: "10px 18px", borderRadius: 10, background: "var(--primary)", color: "var(--primary-foreground)", border: "none", cursor: "pointer", fontWeight: 600 }}
      >
        Try again
      </button>
    </div>
  );
}
