import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      <div className="bg-dots" aria-hidden="true" />

      <span className="eyebrow mb-6">404 — Page not found</span>

      <h1
        className="font-bold text-foreground leading-none tracking-[-0.04em] m-0"
        style={{ fontSize: "clamp(6rem, 20vw, 10rem)" }}
      >
        404
      </h1>

      <p className="text-h2 font-semibold text-foreground mt-4 mb-3">
        Oops, nothing here
      </p>

      <p className="text-muted-foreground text-body-lg max-w-[38ch] mb-10">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 font-medium text-body px-6 py-3 rounded-[10px] no-underline bg-primary text-primary-foreground transition-[background-color,color] duration-200 ease-out hover:bg-primary-strong"
      >
        ← Back to home
      </Link>
    </div>
  );
}
