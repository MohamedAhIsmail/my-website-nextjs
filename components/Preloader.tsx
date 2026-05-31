"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/motion";

const DURATION = 4900;

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.classList.add("preloading");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(dismiss, reduce ? 400 : DURATION);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    document.body.classList.remove("preloading");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] bg-background grid place-items-center"
          role="status"
          aria-label="Loading"
        >
          {/* Skip */}
          <motion.button
            type="button"
            aria-label="Skip intro"
            onClick={dismiss}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="absolute top-[22px] end-7 bg-transparent border-0 cursor-pointer font-mono text-sm text-muted-foreground tracking-[0.04em] px-2.5 py-1.5 rounded-lg hover:text-primary hover:bg-primary-soft transition-colors"
          >
            Skip
          </motion.button>

          <div className="relative text-center px-6">

            {/* "I'm" — slides in from right */}
            <motion.span
              className="block font-mono text-primary tracking-[0.14em] text-sm mb-2.5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            >
              I&apos;m
            </motion.span>

            {/* Name */}
            <h1 className="m-0 font-display font-extrabold leading-[0.96] tracking-[-0.02em] text-[clamp(1.6rem,6vw,3.4rem)] text-foreground flex flex-col items-center gap-0.5">
              {/* "Mohamed" — slides in from left */}
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, x: -54 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.15, ease: EASE, delay: 0.6 }}
              >
                Mohamed
              </motion.span>

              {/* "Elsaka" — slides in from right, italic, primary color */}
              <motion.span
                className="inline-block italic font-bold text-primary"
                initial={{ opacity: 0, x: 54 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.15, ease: EASE, delay: 1.0 }}
              >
                Elsaka
              </motion.span>
            </h1>

            {/* Arrow + role */}
            <div className="flex items-center justify-center gap-1 mt-2.5">
              <svg
                viewBox="0 0 150 96"
                fill="none"
                aria-hidden="true"
                className="w-[clamp(80px,14vw,120px)] h-auto text-foreground block shrink-0"
              >
                <motion.path
                  d="M14 10 C 12 56, 48 78, 120 74"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.3, ease: "easeInOut", delay: 1.7 }}
                />
                <motion.path
                  d="M104 58 L124 74 L104 90"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 2.85 }}
                />
              </svg>

              {/* "Software Engineer" — slides in from right */}
              <motion.span
                className="font-mono text-muted-foreground text-[clamp(0.95rem,2.6vw,1.2rem)] self-end mb-2"
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 2.95 }}
              >
                Software Engineer
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
