"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/sections/ProjectCard"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import type { Project } from "@/types"

function ExpandedProject({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <div className="border-t border-zinc-200 pb-6 pl-6 pr-6 pt-4 dark:border-zinc-800">
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          {project.longDescription}
        </p>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="flex gap-3">
          {project.github && (
            <Button href={project.github} variant="secondary" size="sm">
              View on GitHub
            </Button>
          )}
          {project.demo && (
            <Button href={project.demo} size="sm">
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null)

  const toggleProject = (slug: string) => {
    setExpandedSlug(expandedSlug === slug ? null : slug)
  }

  return (
    <section id="projects" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
          <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-400">
            A selection of representative projects in fullstack, DevOps and cloud.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.slug} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
              <div onClick={() => toggleProject(project.slug)} className="cursor-pointer">
                <ProjectCard project={project} expanded={expandedSlug === project.slug} />
              </div>
              <AnimatePresence>
                {expandedSlug === project.slug && (
                  <ExpandedProject project={project} />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
