"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const labels: Record<AppLocale, string> = {
  ar: "العربية",
  en: "English",
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={cn("flex gap-1", className)}>
      {(routing.locales as readonly AppLocale[]).map((l) => (
        <Button
          key={l}
          variant={l === locale ? "default" : "ghost"}
          size="sm"
          onClick={() => router.replace(pathname, { locale: l })}
        >
          {labels[l]}
        </Button>
      ))}
    </div>
  );
}
