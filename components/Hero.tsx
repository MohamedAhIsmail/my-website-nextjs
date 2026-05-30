"use client";

import { PORTFOLIO } from "@/lib/portfolio-data";
import { Icon, SocialIcon } from "./icons";

export function Hero() {
  return (
    <header className="hero wrap" id="top">
      <div className="hero-grid">
        <div className="hero-main">
          <div className="hero-avatar reveal">
            <img
              src="/image.jpg"
              alt="Mohamed Elsaka"
              className="hero-avatar-img"
              width={184}
              height={184}
            />
          </div>
          <h1 className="reveal">{PORTFOLIO.name}</h1>
          <div className="hero-title reveal">{PORTFOLIO.role}</div>
          <div className="hero-socials reveal">
            {PORTFOLIO.socials.map((s) => (
              <a
                key={s.id}
                className="social-btn"
                href={s.href}
                aria-label={s.label}
                title={s.label}
                target={s.href.startsWith("#") || s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
              >
                <SocialIcon icon={s.icon} />
              </a>
            ))}
          </div>
          <div className="hero-bio reveal">
            {PORTFOLIO.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="fact-grid reveal">
            {PORTFOLIO.facts.map((f) => (
              <div className="fact" key={f.k}>
                <div className="k">{f.k}</div>
                <div className="v">
                  <Icon name={f.icon as never} /> {f.v}
                </div>
              </div>
            ))}
          </div>
          <div className="hero-cta reveal">
            <a className="btn btn-primary" href="#projects">
              <Icon name="layers" /> View my work
            </a>
            <a className="btn btn-ghost" href="#contact">
              <Icon name="calendar" /> Schedule a call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
