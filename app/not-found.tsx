import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh", gap: 16, padding: 24 }}>
      <h2 style={{ margin: 0, fontSize: "3rem", fontWeight: 700, letterSpacing: "-0.02em" }}>404</h2>
      <p style={{ margin: 0, color: "var(--muted-foreground)" }}>This page could not be found.</p>
      <Link href="/" style={{ padding: "10px 18px", borderRadius: 10, background: "var(--primary)", color: "var(--primary-foreground)", textDecoration: "none", fontWeight: 600 }}>
        Go home
      </Link>
    </div>
  );
}
