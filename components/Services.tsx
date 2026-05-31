"use client";

import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { PORTFOLIO } from "@/lib/portfolio-data";
import { staggerContainer, cardItem, viewport } from "@/lib/motion";
import { Icon } from "./icons";

export function Services() {
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section className="section wrap" id="services">
      <FadeIn className="mb-[clamp(32px,5vw,56px)] max-w-160">
        <span className="eyebrow">Services</span>
        <h2 className="text-h2 font-bold tracking-[-0.02em] leading-[1.1] mt-3.5 mb-0">What I can do for you</h2>
        <p className="text-muted-foreground mt-3 mb-0 text-body-lg max-w-[56ch]">
          End-to-end engineering, from the database to the pixels — pick a piece or the whole thing.
        </p>
      </FadeIn>

      <motion.div
        className="grid gap-6.5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {PORTFOLIO.services.map((s) => (
          <motion.article
            key={s.title}
            variants={cardItem}
            className="service-card"
            onMouseMove={onMove}
          >
            <div className="w-11.5 h-11.5 rounded-xl grid place-items-center bg-primary-soft text-primary border border-primary-line mb-4.5 [&_svg]:w-5.75 [&_svg]:h-5.75">
              <Icon name={s.icon as never} />
            </div>
            <h3 className="text-h3 font-[650] tracking-[-0.01em] mt-0 mb-2">{s.title}</h3>
            <p className="text-muted-foreground m-0 text-body">{s.desc}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
