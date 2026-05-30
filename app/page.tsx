"use client";

import { useReveal } from "@/hooks/use-reveal";
import { Preloader } from "@/components/Preloader";
import { Dock } from "@/components/Dock";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Hive } from "@/components/Hive";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { ScrollTop } from "@/components/ScrollTop";

export default function Home() {
  useReveal();

  return (
    <>
      <div className="bg-dots" aria-hidden="true" />
      <Preloader />
      <main>
        <Hero />
        <Services />
        <Hive />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Dock />
      <ScrollTop />
    </>
  );
}
