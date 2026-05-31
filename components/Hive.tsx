"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { PORTFOLIO, getIconUrl, type TechItem } from "@/lib/portfolio-data";

function Hex({ tech, delay }: { tech: TechItem; delay: number }) {
  return (
    <motion.div
      className="hex"
      title={tech.name}
      initial={{ opacity: 0, scale: 0.35, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ type: "spring", stiffness: 220, damping: 18, delay: delay / 1000 }}
    >
      <div className="hex-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="tech-ic" src={getIconUrl(tech)} alt={tech.name} loading="lazy" />
        <span className="tech-label">{tech.name}</span>
      </div>
    </motion.div>
  );
}

export function Hive() {
  const rows = [
    PORTFOLIO.tech.slice(0, 4),
    PORTFOLIO.tech.slice(4, 9),
    PORTFOLIO.tech.slice(9, 13),
  ];

  return (
    <section className="section wrap" id="stack">
      <FadeIn className="mb-[clamp(32px,5vw,56px)] text-center">
        <span className="eyebrow justify-center">Tech stack</span>
        <h2 className="text-h2 font-bold tracking-[-0.02em] leading-[1.1] mt-3.5 mb-0">Tools I build with</h2>
        <p className="text-muted-foreground mt-3 mb-0 text-body-lg mx-auto max-w-[56ch]">
          A focused, battle-tested stack for shipping full-stack products fast.
        </p>
      </FadeIn>

      <div className="hive-wrap">
        <div className="hive">
          {rows.map((row, ri) => (
            <div className={"hive-row" + (ri % 2 === 0 ? " indent" : "")} key={ri}>
              {row.map((t, ci) => {
                const center = (row.length - 1) / 2;
                const dist = Math.abs(ci - center);
                const rowDelay = ri === 1 ? 0 : 110;
                const delay = Math.round(rowDelay + dist * 60);
                return <Hex key={t.name} tech={t} delay={delay} />;
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
