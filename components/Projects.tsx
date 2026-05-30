"use client";

import { PORTFOLIO } from "@/lib/portfolio-data";
import { Icon } from "./icons";

export function Projects() {
  return (
    <section className="section wrap" id="projects">
      <div className="section-head reveal">
        <span className="eyebrow">Projects</span>
        <h2>Selected work</h2>
        <p>A few things I&apos;ve built — placeholders for now, swap in your real projects anytime.</p>
      </div>
      <div className="proj-grid">
        {PORTFOLIO.projects.map((p) => (
          <article className="proj-card reveal" key={p.name}>
            <div className="proj-thumb">
              <span className="mesh" />
              <span className="glyph">{p.glyph}</span>
            </div>
            <div className="proj-body">
              <div className="proj-title-row">
                <h3>{p.name}</h3>
                <span className="proj-badge">{p.badge}</span>
              </div>
              <p>{p.desc}</p>
              <div className="proj-tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              <div className="proj-links">
                <a href={p.live}><Icon name="external" /> Live</a>
                <a href={p.code}><Icon name="github" /> Code</a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="proj-more">More projects coming soon…</p>
    </section>
  );
}
