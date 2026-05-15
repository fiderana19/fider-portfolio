import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
  expanded?: boolean
}

export function ProjectCard({ project, expanded }: ProjectCardProps) {
  return (
    <Card className="group flex flex-col" hover={false}>
      <div className="mb-4 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
        <span className="text-4xl">{project.category === "devops" || project.category === "cloud" ? "☁️" : "💻"}</span>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium uppercase tracking-wider text-zinc-600">{project.category}</span>
          {project.featured && (
            <Badge variant="outline">Featured</Badge>
          )}
        </div>

        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-400 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="mt-4 text-center text-xs font-medium text-zinc-600">
          {expanded ? "▲ Show less" : "▼ View more"}
        </div>
      </div>
    </Card>
  )
}
