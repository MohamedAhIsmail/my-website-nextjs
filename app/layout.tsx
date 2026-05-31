import type { Metadata } from "next";
import { Rubik, Playfair_Display } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import { AppProviders } from "@/providers/app-providers";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import profile from "@/data/profile.json";
import seo from "@/data/seo.json";
import socials from "@/data/socials.json";

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

const title = `${profile.name} — ${profile.role}`;
const description = `${profile.about[0]}`;

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),

  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },

  description,

  keywords: [
    "Full Stack Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Web Developer Egypt",
    "Cairo Developer",
    profile.name,
  ],

  authors: [{ name: profile.name }],
  creator: profile.name,
  publisher: profile.name,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: seo.url,
    siteName: profile.name,
    title,
    description,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${profile.name} — ${profile.role}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: seo.twitterHandle,
    images: [seo.ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: seo.url,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: seo.googleVerification,
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const githubUrl = socials.find((s) => s.id === "github")?.href ?? seo.url;
  const linkedinUrl = socials.find((s) => s.id === "linkedin")?.href ?? seo.url;

  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={cn(rubik.variable, playfairDisplay.variable)}
    >
      <head>
        <JsonLd
          url={seo.url}
          name={profile.name}
          role={profile.role}
          description={description}
          location={profile.location}
          email={profile.email}
          githubUrl={githubUrl}
          linkedinUrl={linkedinUrl}
          image={`${seo.url}${seo.ogImage}`}
        />
      </head>
      <body suppressHydrationWarning>
        <AppProviders>
          {children}
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
