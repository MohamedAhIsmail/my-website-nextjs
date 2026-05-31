"use client";

import { PORTFOLIO } from "@/lib/portfolio-data";
import { Icon } from "./icons";

export function Certifications() {
  return (
    <section className="section wrap" id="certifications">
      <div className="mb-[clamp(32px,5vw,56px)] max-w-160 reveal">
        <span className="eyebrow">Certifications</span>
        <h2 className="text-h2 font-bold tracking-[-0.02em] leading-[1.1] mt-3.5 mb-0">Always learning</h2>
        <p className="text-muted-foreground mt-3 mb-0 text-body-lg max-w-[56ch]">Credentials that back up the work — placeholders for now, swap in your own anytime.</p>
      </div>

      <div className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
        {PORTFOLIO.certifications.map((c) => (
          <div
            key={c.t}
            className="reveal flex items-center gap-3.5 border border-border bg-card rounded-xl px-4 py-3.5 transition-[border-color,transform] duration-[180ms] hover:border-primary-line hover:translate-x-[3px]"
          >
            <span className="w-10 h-10 rounded-[10px] grid place-items-center shrink-0 bg-primary-soft text-primary border border-primary-line [&_svg]:w-5 [&_svg]:h-5">
              <Icon name="award" />
            </span>
            <div>
              <div className="font-semibold text-body">{c.t}</div>
              <div className="text-muted-foreground text-sm">{c.s}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
