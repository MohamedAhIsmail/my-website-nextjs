"use client";

import { motion } from "framer-motion";
import { PORTFOLIO } from "@/lib/portfolio-data";
import { fadeUp, viewport, hoverTransition } from "@/lib/motion";
import { Icon } from "./icons";

export function Contact() {
  return (
    <section className="section wrap" id="contact">
      <motion.div
        className="contact-card border border-border bg-card rounded-[22px] p-10 text-center relative overflow-hidden"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <span className="eyebrow justify-center">Contact</span>
        <h2 className="text-h1 font-[750] tracking-[-0.03em] mt-3.5 mb-0">
          Let&apos;s build something together
        </h2>
        <p className="text-muted-foreground text-body-lg max-w-[50ch] mx-auto mt-3.5 mb-0">
          Have a project, a role, or just want to say hi? My inbox is always
          open.
        </p>

        {/* Primary CTA */}
        <div className="flex justify-center mt-7.5 relative z-1">
          <motion.a
            href={`mailto:${PORTFOLIO.email}`}
            whileHover={{ y: -2, transition: hoverTransition }}
            className="inline-flex items-center gap-2 font-semibold text-body px-4.5 py-2.5 rounded-[10px] no-underline bg-primary text-primary-foreground transition-[background-color,color,box-shadow] duration-200 ease-out hover:bg-primary-strong [&_svg]:w-4 [&_svg]:h-4"
          >
            <Icon name="mail" /> Contact me
          </motion.a>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-3 mt-4 relative z-1">
          <motion.a
            href={PORTFOLIO.socials[0].href}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            whileHover={{ y: -2, transition: hoverTransition }}
            className="w-10 h-10 grid place-items-center rounded-[10px] border border-border bg-card text-muted-foreground transition-[color,border-color,background-color] duration-200 ease-out hover:text-primary hover:border-primary-line hover:bg-primary-soft [&_svg]:w-4.5 [&_svg]:h-4.5"
          >
            <Icon name="github" />
          </motion.a>
          <motion.a
            href={PORTFOLIO.socials[1].href}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            whileHover={{ y: -2, transition: hoverTransition }}
            className="w-10 h-10 grid place-items-center rounded-[10px] border border-border bg-card text-muted-foreground transition-[color,border-color,background-color] duration-200 ease-out hover:text-primary hover:border-primary-line hover:bg-primary-soft [&_svg]:w-4.5 [&_svg]:h-4.5"
          >
            <Icon name="linkedin" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
