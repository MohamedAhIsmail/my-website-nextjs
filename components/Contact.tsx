"use client";

import { PORTFOLIO } from "@/lib/portfolio-data";
import { Icon } from "./icons";

export function Contact() {
  return (
    <section className="section wrap" id="contact">
      <div className="contact-card reveal border border-border bg-card rounded-[22px] p-[clamp(32px,6vw,64px)] text-center relative overflow-hidden">
        <span className="eyebrow justify-center">Contact</span>
        <h2 className="text-h1 font-[750] tracking-[-0.03em] mt-[14px] mb-0">Let&apos;s build something together</h2>
        <p className="text-muted-foreground text-body-lg max-w-[50ch] mx-auto mt-[14px] mb-0">
          Have a project, a role, or just want to say hi? My inbox is always open.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-[30px] relative z-[1]">
          <a className="inline-flex items-center gap-[9px] font-semibold text-body px-[18px] py-[11px] rounded-[10px] no-underline bg-primary text-primary-foreground transition-[transform,background-color] duration-150 hover:bg-primary-strong hover:-translate-y-px [&_svg]:w-[17px] [&_svg]:h-[17px]" href={`mailto:${PORTFOLIO.email}`}>
            <Icon name="mail" /> Contact me
          </a>
          <a className="inline-flex items-center gap-[9px] font-semibold text-body px-[18px] py-[11px] rounded-[10px] no-underline bg-transparent text-foreground border border-border transition-[background-color,border-color] duration-150 hover:bg-accent hover:border-muted-foreground [&_svg]:w-[17px] [&_svg]:h-[17px]" href={PORTFOLIO.socials[0].href} target="_blank" rel="noreferrer">
            <Icon name="github" /> GitHub
          </a>
          <a className="inline-flex items-center gap-[9px] font-semibold text-body px-[18px] py-[11px] rounded-[10px] no-underline bg-transparent text-foreground border border-border transition-[background-color,border-color] duration-150 hover:bg-accent hover:border-muted-foreground [&_svg]:w-[17px] [&_svg]:h-[17px]" href={PORTFOLIO.socials[1].href} target="_blank" rel="noreferrer">
            <Icon name="linkedin" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
