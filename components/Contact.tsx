"use client";

import { motion } from "framer-motion";
import { PORTFOLIO } from "@/lib/portfolio-data";
import { fadeUp, viewport } from "@/lib/motion";
import { Icon } from "./icons";

export function Contact() {
  return (
    <section className="section wrap" id="contact">
      <motion.div
        className="contact-card border border-border bg-card rounded-[22px] p-[clamp(32px,6vw,64px)] text-center relative overflow-hidden"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <span className="eyebrow justify-center">Contact</span>
        <h2 className="text-h1 font-[750] tracking-[-0.03em] mt-3.5 mb-0">Let&apos;s build something together</h2>
        <p className="text-muted-foreground text-body-lg max-w-[50ch] mx-auto mt-3.5 mb-0">
          Have a project, a role, or just want to say hi? My inbox is always open.
        </p>

        {/* Primary CTA */}
        <div className="flex justify-center mt-7.5 relative z-1">
          <a
            href={`mailto:${PORTFOLIO.email}`}
            className="inline-flex items-center gap-2 font-semibold text-body px-4.5 py-2.5 rounded-[10px] no-underline bg-primary text-primary-foreground transition-[transform,background-color] duration-150 hover:bg-primary-strong hover:-translate-y-px [&_svg]:w-4 [&_svg]:h-4"
          >
            <Icon name="mail" /> Contact me
          </a>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-3 mt-4 relative z-[1]">
          <a
            href={PORTFOLIO.socials[0].href}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 grid place-items-center rounded-[10px] border border-border bg-card text-muted-foreground transition-[color,border-color,background-color,transform] duration-150 hover:text-primary hover:border-primary-line hover:bg-primary-soft hover:-translate-y-0.5 [&_svg]:w-4.5 [&_svg]:h-4.5"
          >
            <Icon name="github" />
          </a>
          <a
            href={PORTFOLIO.socials[1].href}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 grid place-items-center rounded-[10px] border border-border bg-card text-muted-foreground transition-[color,border-color,background-color,transform] duration-150 hover:text-primary hover:border-primary-line hover:bg-primary-soft hover:-translate-y-0.5 [&_svg]:w-4.5 [&_svg]:h-4.5"
          >
            <Icon name="linkedin" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
