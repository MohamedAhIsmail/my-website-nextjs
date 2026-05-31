"use client";

import { useState, useEffect } from "react";
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
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 24,
        delay: delay / 1000,
      }}
    >
      <div className="hex-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="tech-ic"
          src={getIconUrl(tech)}
          alt={tech.name}
          loading="lazy"
        />
        <span className="tech-label">{tech.name}</span>
      </div>
    </motion.div>
  );
}

const DESKTOP_ROWS = [
  PORTFOLIO.tech.slice(0, 5),
  PORTFOLIO.tech.slice(5, 11),
  PORTFOLIO.tech.slice(11, 16),
  PORTFOLIO.tech.slice(16, 21),
];

const MOBILE_ROWS = [
  PORTFOLIO.tech.slice(0, 3),
  PORTFOLIO.tech.slice(3, 7),
  PORTFOLIO.tech.slice(7, 10),
  PORTFOLIO.tech.slice(10, 14),
  PORTFOLIO.tech.slice(14, 17),
  PORTFOLIO.tech.slice(17, 21),
];

export function Hive() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 500);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  const rows = isMobile ? MOBILE_ROWS : DESKTOP_ROWS;

  return (
    <section className="section wrap" id="stack">
      <FadeIn className="mb-10 text-center">
        <span className="eyebrow justify-center">Tech stack</span>
        <h2 className="text-h2 font-bold tracking-[-0.02em] leading-[1.1] mt-3.5 mb-0">
          Tools I build with
        </h2>
        <p className="text-muted-foreground mt-3 mb-0 text-body-lg mx-auto max-w-[56ch]">
          A focused, battle-tested stack for shipping full-stack products fast.
        </p>
      </FadeIn>

      <div className="flex justify-center">
        <div className="hive">
          {rows.map((row, ri) => (
            <div
              className={"hive-row" + (ri % 2 === 0 ? " indent" : "")}
              key={ri}
            >
              {row.map((t, ci) => {
                const center = (row.length - 1) / 2;
                const dist = Math.abs(ci - center);
                const delay = Math.round(ri * 70 + dist * 50);
                return <Hex key={t.name} tech={t} delay={delay} />;
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
