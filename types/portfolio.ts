export interface TechItem {
  name: string;
  slug: string;
  group: string;
  url?: string;
}

export interface ProjectItem {
  name: string;
  glyph: string;
  cat: string;
  badge: string;
  desc: string;
  tags: string[];
  live: string;
  code: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  contract: string;
  bullets: string[];
  stack: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  date: string;
  bullets: string[];
}

export interface CertificationItem {
  t: string;
  s: string;
}

export interface SocialItem {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export interface FactItem {
  k: string;
  v: string;
  icon: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
}
