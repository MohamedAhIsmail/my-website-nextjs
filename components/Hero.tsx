"use client";

import { PORTFOLIO } from "@/lib/portfolio-data";
import { Icon, SocialIcon } from "./icons";

export function Hero() {
  return (
    <header className="hero wrap section" id="top">
      <div className="flex flex-col items-center gap-[clamp(36px,5vw,56px)]">
        <div className="w-full text-center">

          <div className="reveal flex justify-center mb-[26px]">
            <img
              src="/image.jpg"
              alt="Mohamed Elsaka"
              width={184}
              height={184}
              className="w-[184px] h-[184px] rounded-full border border-border shadow-md bg-card outline-[4px] outline-primary-soft outline-offset-[5px]"
            />
          </div>

          <h1 className="reveal text-[clamp(1.4rem,1.15rem+1vw,1.9rem)] font-bold leading-[1.1] tracking-[-0.02em] text-foreground m-0">
            {PORTFOLIO.name}
          </h1>

          <p className="reveal text-[clamp(0.95rem,0.85rem+0.4vw,1.1rem)] text-muted-foreground font-medium mt-[9px] mb-0">
            {PORTFOLIO.role}
          </p>

          <div className="reveal flex gap-[10px] mt-5 justify-center">
            {PORTFOLIO.socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                aria-label={s.label}
                title={s.label}
                target={s.href.startsWith("#") || s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="w-10 h-10 grid place-items-center rounded-[10px] border border-border bg-card text-muted-foreground transition-[color,border-color,transform,background-color] duration-150 hover:text-primary hover:border-primary-line hover:bg-primary-soft hover:-translate-y-0.5 [&_svg]:w-[19px] [&_svg]:h-[19px]"
              >
                <SocialIcon icon={s.icon} />
              </a>
            ))}
          </div>

          <div className="reveal mt-7 max-w-[680px] mx-auto">
            {PORTFOLIO.about.map((p, i) => (
              <p key={i} className="text-muted-foreground text-body-lg m-0">{p}</p>
            ))}
          </div>

          <div className="reveal grid gap-3 mt-[30px] max-w-[680px] mx-auto [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))]">
            {PORTFOLIO.facts.map((f) => (
              <div key={f.k} className="border border-border bg-card rounded-xl p-4 text-center">
                <div className="text-muted-foreground text-caption font-mono uppercase tracking-[0.08em]">{f.k}</div>
                <div className="font-semibold mt-1.5 flex items-center justify-center gap-2 [&_svg]:w-4 [&_svg]:h-4 [&_svg]:text-primary">
                  <Icon name={f.icon as never} /> {f.v}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal flex flex-wrap gap-3 mt-[30px] justify-center">
            <a className="inline-flex items-center gap-[9px] font-semibold text-body px-[18px] py-[11px] rounded-[10px] no-underline whitespace-nowrap bg-primary text-primary-foreground transition-[transform,background-color,opacity] duration-150 hover:bg-primary-strong hover:-translate-y-px [&_svg]:w-[17px] [&_svg]:h-[17px]" href="#projects">
              <Icon name="layers" /> View my work
            </a>
            <a className="inline-flex items-center gap-[9px] font-semibold text-body px-[18px] py-[11px] rounded-[10px] no-underline whitespace-nowrap bg-transparent text-foreground border border-border transition-[transform,background-color,border-color,opacity] duration-150 hover:bg-accent hover:border-muted-foreground [&_svg]:w-[17px] [&_svg]:h-[17px]" href="#contact">
              <Icon name="calendar" /> Schedule a call
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
