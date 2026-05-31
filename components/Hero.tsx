"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PORTFOLIO } from "@/lib/portfolio-data";
import { EASE, staggerContainer, cardItem, hoverTransition } from "@/lib/motion";
import { Icon, SocialIcon } from "./icons";

/* Each hero element slides up on page load */
function heroItem(delay: number) {
  return {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: EASE, delay },
  };
}

export function Hero() {
  return (
    <header
      id="top"
      className="wrap min-h-screen flex items-center justify-center pt-8 pb-28"
    >
      <div className="w-full text-center">

        <motion.div className="flex justify-center mb-6" {...heroItem(0)}>
          <Image
            src="/image.jpg"
            alt="Mohamed Elsaka — Full Stack Software Engineer"
            width={148}
            height={148}
            priority
            className="w-37 h-37 rounded-full border border-border shadow-md bg-card outline-4 outline-primary-soft outline-offset-[5px]"
          />
        </motion.div>

        <motion.h1
          className="text-[clamp(1.35rem,1.1rem+1vw,1.75rem)] font-bold leading-[1.1] tracking-[-0.02em] text-foreground m-0"
          {...heroItem(0.1)}
        >
          {PORTFOLIO.name}
        </motion.h1>

        <motion.p
          className="text-body text-muted-foreground font-medium mt-2.5 mb-0"
          {...heroItem(0.18)}
        >
          {PORTFOLIO.role}
        </motion.p>

        <motion.div className="flex gap-2.5 mt-5 justify-center" {...heroItem(0.26)}>
          {PORTFOLIO.socials.map((s) => (
            <motion.a
              key={s.id}
              href={s.href}
              aria-label={s.label}
              title={s.label}
              target={s.href.startsWith("#") || s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              whileHover={{ y: -2, transition: hoverTransition }}
              className="w-10 h-10 grid place-items-center rounded-[10px] border border-border bg-card text-muted-foreground transition-[color,border-color,background-color] duration-200 ease-out hover:text-primary hover:border-primary-line hover:bg-primary-soft [&_svg]:w-4.5 [&_svg]:h-4.5"
            >
              <SocialIcon icon={s.icon} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div className="mt-6 max-w-175 mx-auto" {...heroItem(0.34)}>
          {PORTFOLIO.about.map((p, i) => (
            <p key={i} className="text-muted-foreground text-body leading-relaxed m-0">{p}</p>
          ))}
        </motion.div>

        {/* Fact cards — staggered */}
        <motion.div
          className="grid gap-3 mt-6 max-w-175 mx-auto grid-cols-[repeat(auto-fit,minmax(150px,1fr))]"
          variants={staggerContainer}
          custom={0.08}
          initial="hidden"
          animate="visible"
        >
          {PORTFOLIO.facts.map((f) => (
            <motion.div
              key={f.k}
              variants={cardItem}
              className="border border-border bg-card rounded-xl p-4 text-center"
            >
              <div className="text-muted-foreground text-caption font-mono uppercase tracking-[0.08em]">{f.k}</div>
              <div className="font-semibold text-sm mt-1.5 flex items-center justify-center gap-2 [&_svg]:w-4 [&_svg]:h-4 [&_svg]:text-primary">
                <Icon name={f.icon as never} /> {f.v}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="flex flex-wrap gap-3 mt-7 justify-center" {...heroItem(0.55)}>
          <motion.a
            href="#projects"
            whileHover={{ y: -2, transition: hoverTransition }}
            className="inline-flex items-center gap-2 font-medium text-body px-4.5 py-2.5 rounded-[10px] no-underline whitespace-nowrap bg-primary text-primary-foreground transition-[background-color,color,box-shadow] duration-200 ease-out hover:bg-primary-strong [&_svg]:w-4 [&_svg]:h-4"
          >
            <Icon name="layers" /> View my work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ y: -2, transition: hoverTransition }}
            className="inline-flex items-center gap-2 font-medium text-body px-4.5 py-2.5 rounded-[10px] no-underline whitespace-nowrap bg-card text-foreground border border-border transition-[background-color,border-color,color] duration-200 ease-out hover:bg-accent hover:border-muted-foreground [&_svg]:w-4 [&_svg]:h-4"
          >
            <Icon name="calendar" /> Schedule a call
          </motion.a>
        </motion.div>

      </div>
    </header>
  );
}
