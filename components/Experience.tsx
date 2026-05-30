"use client";

import { PORTFOLIO } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section className="section wrap" id="experience">
      <div className="section-head reveal">
        <span className="eyebrow">Experience</span>
        <h2>Where I&apos;ve worked</h2>
        <p>My journey across frontend, backend and full-stack roles.</p>
      </div>
      <div className="timeline">
        {PORTFOLIO.experience.map((e, i) => (
          <div className="tl-item reveal" key={i}>
            <span className="tl-dot" />
            <div className="tl-head">
              <h3>{e.role}</h3>
              <span className="tl-co">· {e.company}</span>
              <span className="tl-date">{e.date}</span>
            </div>
            <p className="tl-meta">{e.contract}</p>
            <ul className="tl-bullets">
              {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
            <div className="tl-stack">
              {e.stack.map((s) => <span key={s}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
