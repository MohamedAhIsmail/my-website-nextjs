"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { PORTFOLIO } from "@/lib/portfolio-data";
import {
  staggerContainer,
  cardItem,
  viewport,
  hoverTransition,
} from "@/lib/motion";
import { Icon } from "./icons";

export function Certifications() {
  return (
    <section className="section wrap" id="certifications">
      <FadeIn className="mb-10 max-w-160">
        <span className="eyebrow">Certifications</span>
        <h2 className="text-h2 font-bold tracking-[-0.02em] leading-[1.1] mt-3.5 mb-0">
          Always learning
        </h2>
        <p className="text-muted-foreground mt-3 mb-0 text-body-lg max-w-[56ch]">
          Credentials that back up the work — placeholders for now, swap in your
          own anytime.
        </p>
      </FadeIn>

      <motion.div
        className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
        variants={staggerContainer}
        custom={0.08}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {PORTFOLIO.certifications.map((c) => (
          <motion.div
            key={c.t}
            variants={cardItem}
            whileHover={{ x: 3, transition: hoverTransition }}
            className="flex items-center gap-3.5 border border-border bg-card rounded-xl px-4 py-3.5 transition-[border-color] duration-300 hover:border-primary-line"
          >
            <span className="w-10 h-10 rounded-[10px] grid place-items-center shrink-0 bg-primary-soft text-primary border border-primary-line [&_svg]:w-5 [&_svg]:h-5">
              <Icon name="award" />
            </span>
            <div>
              <div className="font-semibold text-body">{c.t}</div>
              <div className="text-muted-foreground text-sm">{c.s}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
