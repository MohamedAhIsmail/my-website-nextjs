"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
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
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-[65]",
        "size-[38px] rounded-full grid place-items-center",
        "bg-card text-foreground border border-border shadow-md cursor-pointer",
        "[&_svg]:size-4",
        "transition-[opacity,transform,background-color,border-color,color] duration-200",
        "hover:bg-primary-soft hover:border-primary-line hover:text-primary hover:-translate-y-[3px]",
        "max-[560px]:bottom-21 max-[560px]:right-4",
        show
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-[10px] scale-90 pointer-events-none",
      )}
    >
      <Icon name="arrowUp" />
    </button>
  );
}
