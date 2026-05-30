"use client";

import { useState, useEffect } from "react";

export function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    document.body.classList.add("preloading");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(dismiss, reduce ? 400 : 4900);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    document.body.classList.remove("preloading");
    setHidden(true);
    setTimeout(() => setRemoved(true), 700);
  }

  if (removed) return null;

  return (
    <div
      id="preloader"
      className={"preloader" + (hidden ? " hide" : "")}
      role="status"
      aria-label="Loading"
    >
      <button className="pre-skip" type="button" aria-label="Skip intro" onClick={dismiss}>
        Skip
      </button>
      <div className="pre-stage">
        <span className="pre-im">I&apos;m</span>
        <h1 className="pre-name">
          <span className="w pre-first">Mohamed</span>
          <span className="w pre-last">Elsaka</span>
        </h1>
        <div className="pre-tail">
          <svg className="pre-arrow" viewBox="0 0 150 96" fill="none" aria-hidden="true">
            <path
              className="pre-arrow-line"
              d="M14 10 C 12 56, 48 78, 120 74"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              className="pre-arrow-head"
              d="M104 58 L124 74 L104 90"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="pre-role">Software Engineer</span>
        </div>
      </div>
    </div>
  );
}
