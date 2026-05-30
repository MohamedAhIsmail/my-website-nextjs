"use client";

import { PORTFOLIO } from "@/lib/portfolio-data";
import { Icon } from "./icons";

export function Contact() {
  return (
    <section className="section wrap" id="contact">
      <div className="contact-card reveal">
        <span className="eyebrow" style={{ justifyContent: "center" }}>Contact</span>
        <h2>Let&apos;s build something together</h2>
        <p>Have a project, a role, or just want to say hi? My inbox is always open.</p>
        <div className="contact-cta">
          <a className="btn btn-primary" href={`mailto:${PORTFOLIO.email}`}>
            <Icon name="mail" /> Contact me
          </a>
          <a className="btn btn-ghost" href={PORTFOLIO.socials[0].href} target="_blank" rel="noreferrer">
            <Icon name="github" /> GitHub
          </a>
          <a className="btn btn-ghost" href={PORTFOLIO.socials[1].href} target="_blank" rel="noreferrer">
            <Icon name="linkedin" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
