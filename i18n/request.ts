import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

const LOCALES_DIR = path.join(process.cwd(), "locales");

async function loadMessages(locale: string): Promise<Record<string, unknown>> {
  const dir = path.join(LOCALES_DIR, locale);
  const files = await readdir(dir);
  const messages: Record<string, unknown> = {};

  await Promise.all(
    files
      .filter((file) => file.endsWith(".json"))
      .map(async (file) => {
        const namespace = file.slice(0, -".json".length);
        const raw = await readFile(path.join(dir, file), "utf-8");
        messages[namespace] = JSON.parse(raw);
      }),
  );

  return messages;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = (routing.locales as readonly string[]).includes(requested ?? "")
    ? (requested as string)
    : routing.defaultLocale;

  return {
    locale,
    messages: await loadMessages(locale),
  };
});
