import type {
  TechItem,
  ProjectItem,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  SocialItem,
  FactItem,
  ServiceItem,
} from "@/types/portfolio";

export type {
  TechItem,
  ProjectItem,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  SocialItem,
  FactItem,
  ServiceItem,
};

export const PORTFOLIO = {
  name: "Mohamed Elsaka",
  initials: "ME",
  role: "Software Engineer",
  location: "Cairo, Egypt",
  email: "mohamadahmed1k@gmail.com",

  roleRotation: [
    "Full Stack Software Engineer",
    "React & Next.js Developer",
    "Node.js / NestJS Backend Engineer",
    "I build scalable web products.",
  ],

  about: [
    "I'm Mohamed Elsaka, a full stack software engineer based in Egypt who builds fast, maintainable web products end to end — accessible React and Next.js interfaces on the frontend, and robust Node.js, Express and NestJS services backed by PostgreSQL and MongoDB on the backend, always with an eye on performance, clean architecture and code the next person can read.",
  ],

  facts: [
    { k: "Location", v: "Cairo, Egypt", icon: "pin" },
    { k: "Experience", v: "2 years", icon: "clock" },
    { k: "Focus", v: "Full Stack Web", icon: "layers" },
  ] as FactItem[],

  socials: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/",
      icon: "github",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/in/",
      icon: "linkedin",
    },
    {
      id: "mail",
      label: "Email",
      href: "mailto:mohamadahmed1k@gmail.com",
      icon: "mail",
    },
  ] as SocialItem[],

  services: [
    {
      icon: "code",
      title: "Frontend Development",
      desc: "Accessible, responsive interfaces with React and Next.js — fast, polished, and built to scale.",
      tags: ["React", "Next.js", "Tailwind", "shadcn/ui"],
    },
    {
      icon: "server",
      title: "Backend Development",
      desc: "Robust services and clean REST/GraphQL APIs with Node.js, Express and NestJS, modeled for growth.",
      tags: ["Node.js", "NestJS", "PostgreSQL", "MongoDB"],
    },
    {
      icon: "layers",
      title: "Full Stack Development",
      desc: "End-to-end product delivery — from data model to deployed UI — with one engineer owning the whole flow.",
      tags: ["TypeScript", "REST", "Auth", "CI/CD"],
    },
  ] as ServiceItem[],

  tech: [
    { name: "React", slug: "react", group: "Frontend" },
    { name: "Next.js", slug: "nextdotjs", group: "Frontend" },
    { name: "Tailwind", slug: "tailwindcss", group: "Frontend" },
    { name: "shadcn/ui", slug: "shadcnui", group: "Frontend" },
    { name: "Node.js", slug: "nodedotjs", group: "Backend" },
    { name: "Express", slug: "express", group: "Backend" },
    { name: "NestJS", slug: "nestjs", group: "Backend" },
    { name: "PostgreSQL", slug: "postgresql", group: "Data" },
    { name: "MongoDB", slug: "mongodb", group: "Data" },
    {
      name: "VS Code",
      slug: "visualstudiocode",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      group: "Tools",
    },
    { name: "GitHub", slug: "github", group: "Tools" },
    { name: "Jira", slug: "jira", group: "Tools" },
    { name: "Bitbucket", slug: "bitbucket", group: "Tools" },
  ] as TechItem[],

  projects: [
    {
      name: "WorkRemote",
      glyph: "WR",
      cat: "Full Stack",
      badge: "Full Stack",
      desc: "A remote-job platform with advanced search, filters and real-time alerts.",
      tags: ["Next.js", "Node.js", "PostgreSQL"],
      live: "#",
      code: "#",
    },
    {
      name: "DevBoard",
      glyph: "DB",
      cat: "Full Stack",
      badge: "Full Stack",
      desc: "A team kanban + sprint tool with drag-and-drop boards and role-based access.",
      tags: ["React", "NestJS", "MongoDB"],
      live: "#",
      code: "#",
    },
    {
      name: "ShopCore API",
      glyph: "SC",
      cat: "Backend",
      badge: "Backend",
      desc: "A modular e-commerce backend: catalog, cart, payments and webhooks.",
      tags: ["NestJS", "PostgreSQL", "Stripe"],
      live: "#",
      code: "#",
    },
    {
      name: "Analytics Studio",
      glyph: "AS",
      cat: "Frontend",
      badge: "Frontend",
      desc: "A dashboard for product analytics with live charts and saved views.",
      tags: ["Next.js", "Tailwind", "Recharts"],
      live: "#",
      code: "#",
    },
    {
      name: "AuthKit",
      glyph: "AK",
      cat: "Backend",
      badge: "Backend",
      desc: "Drop-in authentication service: sessions, OAuth, magic links and 2FA.",
      tags: ["Node.js", "Express", "JWT"],
      live: "#",
      code: "#",
    },
    {
      name: "Portfolio CMS",
      glyph: "PC",
      cat: "Full Stack",
      badge: "Full Stack",
      desc: "A headless CMS that powers content, blog and SEO for marketing sites.",
      tags: ["Next.js", "MongoDB", "tRPC"],
      live: "#",
      code: "#",
    },
    {
      name: "Pixel UI",
      glyph: "PX",
      cat: "Frontend",
      badge: "Frontend",
      desc: "A component library and design tokens built on shadcn/ui primitives.",
      tags: ["React", "Tailwind", "shadcn/ui"],
      live: "#",
      code: "#",
    },
    {
      name: "TaskFlow",
      glyph: "TF",
      cat: "Full Stack",
      badge: "Full Stack",
      desc: "A productivity app with offline sync, reminders and team workspaces.",
      tags: ["Next.js", "Node.js", "PostgreSQL"],
      live: "#",
      code: "#",
    },
    {
      name: "Realtime Chat",
      glyph: "RC",
      cat: "Backend",
      badge: "Backend",
      desc: "A scalable WebSocket chat service with presence and message history.",
      tags: ["NestJS", "Socket.io", "Redis"],
      live: "#",
      code: "#",
    },
  ] as ProjectItem[],

  experience: [
    {
      role: "Full Stack Software Engineer",
      company: "Company name",
      date: "2024 — Present",
      contract: "Full-time",
      bullets: [
        "Build and ship full-stack features across React/Next.js frontends and Node.js services.",
        "Improved key page load times and API latency through profiling and query optimization.",
        "Led adoption of TypeScript and a shared component library to speed up delivery.",
      ],
      stack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    },
    {
      role: "Backend Engineer",
      company: "Company name",
      date: "2023 — 2024",
      contract: "Contract",
      bullets: [
        "Designed and maintained REST APIs and background jobs for a high-traffic product.",
        "Modeled relational and document data and managed migrations safely in production.",
      ],
      stack: ["Node.js", "Express", "MongoDB", "Redis"],
    },
    {
      role: "Frontend Developer",
      company: "Company name",
      date: "2022 — 2023",
      contract: "Full-time",
      bullets: [
        "Built responsive, accessible interfaces and reusable components with React.",
        "Collaborated with design to turn Figma into pixel-accurate, performant UI.",
      ],
      stack: ["React", "Tailwind", "JavaScript"],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "BSc in Computer Science",
      school: "University name",
      date: "2018 — 2022",
      bullets: [
        "Focus on software engineering, algorithms and databases.",
        "Graduated with honors; led the student dev community.",
      ],
    },
    {
      degree: "High school diploma",
      school: "School name",
      date: "2015 — 2018",
      bullets: [
        "Science track with strong math and computing foundation.",
        "Led coding club and competitive programming team.",
      ],
    },
  ] as EducationItem[],

  certifications: [
    { t: "Meta Front-End Developer", s: "Professional Certificate" },
    { t: "AWS Certified Developer", s: "Associate" },
    { t: "MongoDB Developer", s: "Associate Certification" },
    { t: "Google Project Management", s: "Professional Certificate" },
    { t: "freeCodeCamp Full Stack", s: "Certification" },
  ] as CertificationItem[],
};

export function getIconUrl(tech: TechItem): string {
  return tech.url ?? `https://cdn.simpleicons.org/${tech.slug}/3b82f6`;
}
