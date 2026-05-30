"use client";

import type { MouseEvent } from "react";
import { PORTFOLIO } from "@/lib/portfolio-data";
import { Icon } from "./icons";

export function Services() {
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section className="section wrap" id="services">
      <div className="section-head reveal">
        <span className="eyebrow">Services</span>
        <h2>What I can do for you</h2>
        <p>End-to-end engineering, from the database to the pixels — pick a piece or the whole thing.</p>
      </div>
      <div className="services-grid">
        {PORTFOLIO.services.map((s) => (
          <article className="service-card reveal" key={s.title} onMouseMove={onMove}>
            <div className="service-ic">
              <Icon name={s.icon as never} />
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="service-tags">
              {s.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
