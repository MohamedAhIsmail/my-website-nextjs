"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export function FadeIn({ delay = 0, ...props }: FadeInProps) {
  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      {...props}
    />
  );
}
