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
      <div className="mb-[clamp(32px,5vw,56px)] max-w-[640px] reveal">
        <span className="eyebrow">Services</span>
        <h2 className="text-h2 font-bold tracking-[-0.02em] leading-[1.1] mt-[14px] mb-0">What I can do for you</h2>
        <p className="text-muted-foreground mt-3 mb-0 text-body-lg max-w-[56ch]">End-to-end engineering, from the database to the pixels — pick a piece or the whole thing.</p>
      </div>
      <div className="grid gap-[26px] [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
        {PORTFOLIO.services.map((s) => (
          <article className="service-card reveal" key={s.title} onMouseMove={onMove}>
            <div className="w-[46px] h-[46px] rounded-xl grid place-items-center bg-primary-soft text-primary border border-primary-line mb-[18px] [&_svg]:w-[23px] [&_svg]:h-[23px]">
              <Icon name={s.icon as never} />
            </div>
            <h3 className="text-h3 font-[650] tracking-[-0.01em] mt-0 mb-2">{s.title}</h3>
            <p className="text-muted-foreground m-0 text-body">{s.desc}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {s.tags.map((t) => (
                <span key={t} className="font-mono text-caption text-muted-foreground bg-accent px-2 py-[3px] rounded-md">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
