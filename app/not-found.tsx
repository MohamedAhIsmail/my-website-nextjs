import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body className="flex flex-col items-center justify-center min-h-screen gap-4 p-6 bg-background text-foreground">
        <h2 className="text-4xl font-bold">404</h2>
        <p className="text-muted-foreground">This page could not be found.</p>
        <Link
          href="/"
          className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm"
        >
          Go home
        </Link>
      </body>
    </html>
  );
}
