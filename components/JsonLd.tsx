interface JsonLdProps {
  url: string;
  name: string;
  role: string;
  description: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  image: string;
}

export function JsonLd({
  url,
  name,
  role,
  description,
  location,
  email,
  githubUrl,
  linkedinUrl,
  image,
}: JsonLdProps) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle: role,
    description,
    url,
    email,
    image,
    sameAs: [githubUrl, linkedinUrl],
    address: {
      "@type": "PostalAddress",
      addressLocality: location.split(",")[0]?.trim(),
      addressCountry: "EG",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Full Stack Development",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url,
    name: `${name} Portfolio`,
    description,
    author: { "@type": "Person", name },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([person, website]),
      }}
    />
  );
}
