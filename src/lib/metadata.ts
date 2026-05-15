import type { Metadata } from "next"

export const siteConfig = {
  name: "Andriaherilanto Antsa Fiderana",
  title: "DevOps Engineer & Fullstack JavaScript Developer",
  description:
    "Portfolio of Andriaherilanto Antsa Fiderana — DevOps Engineer & Fullstack JavaScript Developer. React, NestJS, Docker, Kubernetes, AWS, CI/CD.",
  url: "http://fiderana-portfolio.vercel.app",
  ogImage: "/images/og.png",
  links: {
    github: "https://github.com/fiderana19",
    linkedin: "https://linkedin.com/in/fiderana-antsa-andriaherilanto",
    twitter: "https://twitter.com/fiderana19",
  },
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
} = {}): Metadata {
  const fullTitle = title
    ? `${title} — ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.title}`

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: siteConfig.url },
  }
}
