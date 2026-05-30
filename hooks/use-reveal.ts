"use client";

import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const check = () => {
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.9 && r.bottom > 0) el.classList.add("in");
      });
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    const id = setInterval(check, 400);
    const stop = setTimeout(() => clearInterval(id), 5000);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      clearInterval(id);
      clearTimeout(stop);
    };
  }, []);
}
