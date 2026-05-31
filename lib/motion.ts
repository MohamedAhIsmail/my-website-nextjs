import type { Variants } from "framer-motion";

/* Smooth ease-out curve — gentle start, soft landing */
export const EASE = [0.22, 1, 0.36, 1] as const;

/* Single element fade up */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE, delay },
  }),
};

/* Container that staggers children */
export const staggerContainer: Variants = {
  hidden: {},
  visible: (stagger: number = 0.08) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.04 },
  }),
};

/* Card-level item — no scale, just opacity + y for clean reveal */
export const cardItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

/* Trigger as soon as a sliver of the element enters the viewport */
export const viewport = { once: true, amount: 0.05 } as const;

/* Shared hover lift transition */
export const hoverTransition = { duration: 0.28, ease: EASE } as const;
