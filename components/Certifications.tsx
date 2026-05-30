"use client";

import { PORTFOLIO } from "@/lib/portfolio-data";
import { Icon } from "./icons";

export function Certifications() {
  return (
    <section className="section wrap" id="certifications">
      <div className="section-head reveal">
        <span className="eyebrow">Certifications</span>
        <h2>Always learning</h2>
        <p>Credentials that back up the work — placeholders for now, swap in your own anytime.</p>
      </div>
      <div className="cert-grid">
        {PORTFOLIO.certifications.map((c) => (
          <div className="cert reveal" key={c.t}>
            <span className="cert-ic">
              <Icon name="award" />
            </span>
            <div>
              <div className="t">{c.t}</div>
              <div className="s">{c.s}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
