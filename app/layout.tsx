import type { Metadata } from "next";
import { Rubik, Playfair_Display, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import { AppProviders } from "@/providers/app-providers";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Elsaka — Full Stack Software Engineer",
  description: "Mohamed Elsaka — Full Stack Software Engineer from Egypt. React, Next.js, Node.js, NestJS, PostgreSQL & MongoDB.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={cn(rubik.variable, playfairDisplay.variable, geistMono.variable)}
    >
      <body>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
