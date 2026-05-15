import { getSkillsByCategory, categoryLabels } from "@/lib/skills"
import type { Skill } from "@/types"

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 p-4 transition-all hover:-translate-y-0.5 hover:shadow-md">
      <i className={`${skill.icon} text-2xl text-zinc-300`} />
      <span className="text-sm font-medium text-zinc-100">
        {skill.name}
      </span>
    </div>
  )
}

export function SkillsShowcase() {
  const byCategory = getSkillsByCategory()

  return (
    <div className="space-y-12">
      {Array.from(byCategory.entries()).map(([category, categorySkills]) => (
        <div key={category}>
          <h3 className="mb-6 text-lg font-semibold text-zinc-100">
            {categoryLabels[category]}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categorySkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
