"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { hoverTransition, EASE } from "@/lib/motion";
import { Icon } from "./icons";

export function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      animate={show
        ? { opacity: 1, y: 0, scale: 1, pointerEvents: "auto" }
        : { opacity: 0, y: 10, scale: 0.9, pointerEvents: "none" }
      }
      whileHover={show ? { y: -3, transition: hoverTransition } : {}}
      transition={{ duration: 0.2, ease: EASE }}
      className="fixed bottom-6 right-6 z-65 size-9.5 rounded-full grid place-items-center bg-card text-foreground border border-border shadow-md cursor-pointer [&_svg]:size-4 transition-[background-color,border-color,color] duration-200 hover:bg-primary-soft hover:border-primary-line hover:text-primary max-[560px]:bottom-21 max-[560px]:right-4"
    >
      <Icon name="arrowUp" />
    </motion.button>
  );
}
