import type { Variants } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1] as const;
export const EASE_OUT = [0, 0, 0.2, 1] as const;

/* Single element fade up */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  }),
};

/* Container that staggers children */
export const staggerContainer: Variants = {
  hidden: {},
  visible: (stagger: number = 0.1) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.1 },
  }),
};

/* Card-level item (used inside stagger container) */
export const cardItem: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE },
  },
};

export const viewport = { once: true, amount: 0.1 } as const;
