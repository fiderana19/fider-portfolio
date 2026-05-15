import { Hero } from "@/components/sections/Hero"
import { SkillsShowcase } from "@/components/sections/SkillsShowcase"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { Timeline } from "@/components/sections/Timeline"
import { Certifications } from "@/components/sections/Certifications"
import { ContactSection } from "@/components/sections/ContactSection"
import { experiences } from "@/lib/experience"

export default function Home() {
  return (
    <>
      <Hero />
      <section id="skills" className="scroll-mt-20">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills</h2>
<p className="mt-4 text-lg text-zinc-400">
               Technologies and tools I work with on a daily basis.
             </p>
          </div>
          <SkillsShowcase />
        </div>
      </section>
      <ProjectsSection />
      <section id="experience" className="scroll-mt-20">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience</h2>
<p className="mt-4 text-lg text-zinc-400">
               My professional journey.
             </p>
          </div>
          <Timeline experiences={experiences.filter((e) => e.type === "internship")} />
        </div>
      </section>
      <section id="education" className="scroll-mt-20">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Education</h2>
<p className="mt-4 text-lg text-zinc-400">
               My academic background.
             </p>
          </div>
          <Timeline experiences={experiences.filter((e) => e.type === "education")} />
        </div>
      </section>
      <Certifications />
      <ContactSection />
    </>
  )
}
