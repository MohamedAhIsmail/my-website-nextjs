"use client";

import { PORTFOLIO } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section className="section wrap" id="education">
      <div className="mb-[clamp(32px,5vw,56px)] max-w-160 reveal">
        <span className="eyebrow">Education</span>
        <h2 className="text-h2 font-bold tracking-[-0.02em] leading-[1.1] mt-3.5 mb-0">Foundations</h2>
        <p className="text-muted-foreground mt-3 mb-0 text-body-lg max-w-[56ch]">Where I built my computer-science and engineering fundamentals.</p>
      </div>

      <div className="timeline relative max-w-205">
        {PORTFOLIO.education.map((e, i) => (
          <div key={i} className="reveal relative pl-9.5 pb-9 last:pb-0">
            <span className="tl-dot" />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-h3 font-[650] tracking-[-0.01em] m-0">{e.degree}</h3>
              <span className="text-primary font-[550]">· {e.school}</span>
              <span className="font-mono text-sm text-muted-foreground ml-auto bg-accent px-2.5 py-0.75 rounded-full">{e.date}</span>
            </div>
            <ul className="tl-bullets mt-3.5 p-0 list-none flex flex-col gap-2">
              {e.bullets.map((b, j) => (
                <li key={j} className="text-muted-foreground text-body">{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
