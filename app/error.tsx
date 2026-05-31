"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

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
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      <div className="bg-dots" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="border border-border bg-card rounded-2xl p-10 max-w-md w-full shadow-md"
      >
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-destructive/10 border border-destructive/20 grid place-items-center mx-auto mb-6">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7 text-destructive"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        <span className="eyebrow justify-center mb-3">Error</span>

        <h2 className="text-h2 font-bold tracking-[-0.02em] text-foreground mt-0 mb-3">
          Something went wrong
        </h2>

        {error.message && (
          <p className="text-muted-foreground text-body font-mono bg-accent rounded-lg px-4 py-3 mb-6 text-sm break-all">
            {error.message}
          </p>
        )}

        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 font-medium text-body px-5 py-2.5 rounded-[10px] bg-primary text-primary-foreground border-0 cursor-pointer transition-[background-color,color] duration-200 ease-out hover:bg-primary-strong"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-medium text-body px-5 py-2.5 rounded-[10px] no-underline bg-card text-foreground border border-border transition-[background-color,border-color] duration-200 ease-out hover:bg-accent hover:border-muted-foreground"
          >
            Go home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
