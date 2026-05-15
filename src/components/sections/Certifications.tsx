import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

const certifications = [
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/certificates/...",
  },
  {
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/certificates/...",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-4 pb-20">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Certifications</h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {certifications.map((cert) => (
            <a key={cert.title} href={cert.href} target="_blank" rel="noopener noreferrer">
              <Card className="flex items-center gap-3 p-4">
                <span className="text-2xl">🏅</span>
                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">{cert.title}</p>
                  <Badge variant="outline">{cert.issuer}</Badge>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
