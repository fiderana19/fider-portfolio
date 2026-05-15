"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/Badge"
import type { Experience } from "@/types"

interface TimelineProps {
  experiences: Experience[]
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-px bg-zinc-800" />

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={`${exp.company}-${exp.period}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="relative pl-12"
          >
            <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-blue-500 bg-zinc-950" />

            <div className="mb-1 flex items-center gap-2">
              <Badge variant={exp.type === "internship" ? "default" : "outline"}>
                {exp.type === "internship" ? "Internship" : "Education"}
              </Badge>
              <span className="text-sm text-zinc-400">{exp.period}</span>
            </div>

            <h3 className="text-lg font-semibold text-zinc-100">
              {exp.role}
            </h3>
            <p className="text-sm font-medium text-blue-400">{exp.company}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              {exp.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {exp.technologies.map((tech) => (
                <Badge key={tech} variant="outline">{tech}</Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
