"use client";

import { PORTFOLIO } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section className="section wrap" id="education">
      <div className="section-head reveal">
        <span className="eyebrow">Education</span>
        <h2>Foundations</h2>
        <p>Where I built my computer-science and engineering fundamentals.</p>
      </div>
      <div className="timeline">
        {PORTFOLIO.education.map((e, i) => (
          <div className="tl-item reveal" key={i}>
            <span className="tl-dot" />
            <div className="tl-head">
              <h3>{e.degree}</h3>
              <span className="tl-co">· {e.school}</span>
              <span className="tl-date">{e.date}</span>
            </div>
            <ul className="tl-bullets">
              {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
