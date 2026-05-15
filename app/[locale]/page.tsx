"use client";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export default function Home() {
  const t = useTranslations("common");

  function clickBtn() {
    window.alert(t("greeting"));
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">{t("appName")}</h1>
      <p>{t("greeting")}</p>
      <Button onClick={clickBtn}>{t("actions.click")}</Button>
    </div>
  );
}
