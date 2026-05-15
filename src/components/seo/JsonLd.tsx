import { siteConfig } from "@/lib/metadata"

interface JsonLdProps {
  type?: "Person" | "WebSite" | "Article" | "BreadcrumbList"
  data?: Record<string, unknown>
}

export function JsonLd({ type = "Person", data }: JsonLdProps) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": type,
  }

  const schemas: Record<string, Record<string, unknown>> = {
    Person: {
      ...base,
      name: siteConfig.name,
      jobTitle: "Fullstack & DevOps Engineer",
      url: siteConfig.url,
      sameAs: [siteConfig.links.github, siteConfig.links.linkedin, siteConfig.links.twitter],
    },
    WebSite: {
      ...base,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
    },
  }

  const schema = data ?? schemas[type] ?? base

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
