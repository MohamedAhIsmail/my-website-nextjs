import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ar", "en"] as const,
  defaultLocale: "ar",
  localePrefix: "always",
  localeDetection: false,
});

export type AppLocale = (typeof routing.locales)[number];
