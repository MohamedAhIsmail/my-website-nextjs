"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { PORTFOLIO } from "@/lib/portfolio-data";
import { staggerContainer, cardItem, viewport, hoverTransition } from "@/lib/motion";
import { Icon } from "./icons";

export function Projects() {
  return (
    <section className="section wrap" id="projects">
      <FadeIn className="mb-10 max-w-160">
        <span className="eyebrow">Projects</span>
        <h2 className="text-h2 font-bold tracking-[-0.02em] leading-[1.1] mt-3.5 mb-0">Selected work</h2>
        <p className="text-muted-foreground mt-3 mb-0 text-body-lg max-w-[56ch]">
          A few things I&apos;ve built — placeholders for now, swap in your real projects anytime.
        </p>
      </FadeIn>

      <motion.div
        className="grid gap-6.5 grid-cols-1 min-[720px]:grid-cols-2 min-[920px]:grid-cols-3"
        variants={staggerContainer}
        custom={0.07}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {PORTFOLIO.projects.map((p) => (
          <motion.article
            key={p.name}
            variants={cardItem}
            whileHover={{ y: -4, transition: hoverTransition }}
            className="border border-border bg-card rounded-2xl overflow-hidden flex flex-col shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-primary-line hover:shadow-md"
          >
            <div className="aspect-[16/10] relative overflow-hidden m-3.5 mb-0 rounded-xl border border-border bg-gradient-to-br from-background-2 to-card grid place-items-center">
              <span className="absolute inset-0 opacity-50 [background-image:radial-gradient(var(--primary-line)_1px,transparent_1px)] [background-size:18px_18px]" />
              <span className="font-mono text-[2.6rem] font-bold text-primary opacity-85 relative">{p.glyph}</span>
            </div>
            <div className="p-[18px] flex flex-col flex-1">
              <div className="flex items-center justify-between gap-2.5 mb-1.5">
                <h3 className="text-h3 font-[650] tracking-[-0.01em] m-0">{p.name}</h3>
                <span className="shrink-0 font-mono text-[10.5px] font-semibold px-2.25 py-1 rounded-full bg-primary-soft border border-primary-line text-primary whitespace-nowrap">{p.badge}</span>
              </div>
              <p className="text-muted-foreground m-0 text-sm flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-3.5">
                {p.tags.map((t) => <span key={t} className="font-mono text-[11px] text-muted-foreground bg-accent px-2 py-0.5 rounded-md">{t}</span>)}
              </div>
              <div className="flex gap-2 mt-3.5">
                <a href={p.live} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary no-underline hover:underline transition-opacity duration-150 hover:opacity-80 [&_svg]:w-3.75 [&_svg]:h-3.75"><Icon name="external" /> Live</a>
                <a href={p.code} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary no-underline hover:underline transition-opacity duration-150 hover:opacity-80 [&_svg]:w-3.75 [&_svg]:h-3.75"><Icon name="github" /> Code</a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <FadeIn delay={0.2}>
        <p className="text-center text-muted-foreground font-mono text-sm mt-[30px]">More projects coming soon…</p>
      </FadeIn>
    </section>
  );
}
