import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
  expanded?: boolean
}

const categoryConfig = {
  devops: { label: "DevOps", bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30", icon: "☁️" },
  fullstack: { label: "FullStack", bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30", icon: "💻" },
  frontend: { label: "Frontend", bg: "bg-zinc-500/10", text: "text-zinc-400", border: "border-zinc-500/30", icon: "🎨" },
  backend: { label: "Backend", bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30", icon: "⚙️" },
  cloud: { label: "Cloud", bg: "bg-sky-500/10", text: "text-sky-400", border: "border-sky-500/30", icon: "🌐" },
}

export function ProjectCard({ project, expanded }: ProjectCardProps) {
  const cfg = categoryConfig[project.category] ?? categoryConfig.frontend

  return (
    <Card className="group flex flex-col" hover={false}>
      <div className="relative mb-4 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 overflow-hidden">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
        <span className="text-4xl relative z-10">{cfg.icon}</span>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-xs font-semibold ${cfg.bg} ${cfg.text} ${cfg.border}`}>
            {cfg.icon}
            {cfg.label}
          </span>
          {project.featured && (
            <Badge variant="outline">Featured</Badge>
          )}
        </div>

        <h3 className="text-lg font-semibold text-zinc-100">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="mt-4 text-center text-xs font-medium text-zinc-600 group-hover:text-zinc-400 transition-colors">
          {expanded ? "▲ Show less" : "▼ View more"}
        </div>
      </div>
    </Card>
  )
}
