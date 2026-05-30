"use client";

import { useState, useEffect, useRef } from "react";
import { PORTFOLIO, getIconUrl, type TechItem } from "@/lib/portfolio-data";

function Hex({ tech, delay, shown }: { tech: TechItem; delay: number; shown: boolean }) {
  return (
    <div
      className={"hex" + (shown ? " pop" : "")}
      style={{ "--d": `${delay}ms` } as React.CSSProperties}
      title={tech.name}
    >
      <div className="hex-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="tech-ic" src={getIconUrl(tech)} alt={tech.name} loading="lazy" />
        <span className="tech-label">{tech.name}</span>
      </div>
    </div>
  );
}

export function Hive() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.85 && r.bottom > 0) {
        setShown(true);
        window.removeEventListener("scroll", check);
      }
    };
    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  const rows = [
    PORTFOLIO.tech.slice(0, 4),
    PORTFOLIO.tech.slice(4, 9),
    PORTFOLIO.tech.slice(9, 13),
  ];

  return (
    <section className="section wrap" id="stack">
      <div className="section-head reveal" style={{ textAlign: "center", marginInline: "auto" }}>
        <span className="eyebrow" style={{ justifyContent: "center" }}>Tech stack</span>
        <h2>Tools I build with</h2>
        <p style={{ marginInline: "auto" }}>A focused, battle-tested stack for shipping full-stack products fast.</p>
      </div>
      <div className="hive-wrap" ref={ref}>
        <div className="hive">
          {rows.map((row, ri) => (
            <div className={"hive-row" + (ri % 2 === 0 ? " indent" : "")} key={ri}>
              {row.map((t, ci) => {
                const center = (row.length - 1) / 2;
                const dist = Math.abs(ci - center);
                const rowDelay = ri === 1 ? 0 : 110;
                const delay = Math.round(rowDelay + dist * 60);
                return <Hex key={t.name} tech={t} delay={delay} shown={shown} />;
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
