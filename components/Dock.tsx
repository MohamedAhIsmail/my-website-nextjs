"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "next-themes";
import { Icon } from "./icons";

const DOCK_ITEMS = [
  { id: "top", label: "Home", icon: "home" },
  { id: "services", label: "Services", icon: "briefcase" },
  { id: "stack", label: "Stack", icon: "grid" },
  { id: "projects", label: "Projects", icon: "folder" },
  { id: "experience", label: "Experience", icon: "clock" },
  { id: "education", label: "Education", icon: "graduation" },
] as const;

export function Dock() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState("top");
  const [hover, setHover] = useState<string | null>(null);
  const [bub, setBub] = useState({ left: 0, top: 0, w: 0, h: 0, on: false });
  const btnRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const ids = [...DOCK_ITEMS.map((d) => d.id), "contact"];
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.42;
      let cur = "top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) cur = id;
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) cur = "contact";
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const place = () => {
      const key = hover ?? (DOCK_ITEMS.some((d) => d.id === active) ? active : null);
      const el = key ? btnRefs.current[key] : null;
      if (el) {
        setBub({ left: el.offsetLeft, top: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight, on: true });
      } else {
        setBub((b) => ({ ...b, on: false }));
      }
    };
    place();
    window.addEventListener("resize", place);
    const t = setTimeout(place, 300);
    return () => { window.removeEventListener("resize", place); clearTimeout(t); };
  }, [hover, active]);

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  const isDark = !mounted || resolvedTheme === "dark";

  return (
    <nav className="dock" aria-label="Primary" onMouseLeave={() => setHover(null)}>
      <span
        className="dock-bubble"
        aria-hidden="true"
        style={{
          transform: `translate(${bub.left}px, ${bub.top}px)`,
          width: bub.w,
          height: bub.h,
          opacity: bub.on ? 1 : 0,
        }}
      />
      {DOCK_ITEMS.map((d) => (
        <a
          key={d.id}
          href={"#" + d.id}
          ref={(el) => { btnRefs.current[d.id] = el; }}
          onMouseEnter={() => setHover(d.id)}
          className={"dock-btn" + (active === d.id ? " active" : "")}
          data-tip={d.label}
          aria-label={d.label}
        >
          <Icon name={d.icon} />
        </a>
      ))}
      <span className="dock-sep" />
      <button
        className="dock-btn"
        ref={(el) => { btnRefs.current.theme = el; }}
        onMouseEnter={() => setHover("theme")}
        onClick={toggleTheme}
        data-tip={isDark ? "Light mode" : "Dark mode"}
        aria-label="Toggle theme"
      >
        <Icon name={isDark ? "sun" : "moon"} />
      </button>
      <a
        href="#contact"
        onMouseEnter={() => setHover(null)}
        className={"dock-btn dock-cta" + (active === "contact" ? " active" : "")}
        data-tip="Get in touch"
        aria-label="Get in touch"
      >
        <Icon name="send" />
      </a>
    </nav>
  );
}
