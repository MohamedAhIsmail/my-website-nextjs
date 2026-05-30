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

import profile from "@/data/profile.json";
import facts from "@/data/facts.json";
import socials from "@/data/socials.json";
import services from "@/data/services.json";
import tech from "@/data/tech.json";
import projects from "@/data/projects.json";
import experience from "@/data/experience.json";
import education from "@/data/education.json";
import certifications from "@/data/certifications.json";

export const PORTFOLIO = {
  ...profile,
  facts: facts as FactItem[],
  socials: socials as SocialItem[],
  services: services as ServiceItem[],
  tech: tech as TechItem[],
  projects: projects as ProjectItem[],
  experience: experience as ExperienceItem[],
  education: education as EducationItem[],
  certifications: certifications as CertificationItem[],
};

export function getIconUrl(tech: TechItem): string {
  return tech.url ?? `https://cdn.simpleicons.org/${tech.slug}/3b82f6`;
}
