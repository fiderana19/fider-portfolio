"use client"

import { useState, useEffect, useCallback } from "react"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/metadata"

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  const handleScroll = useCallback(() => {
    const sections = navLinks.map((l) => l.href.slice(1))
    const scrollPos = window.scrollY + 120

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i])
      if (el && el.offsetTop <= scrollPos) {
        setActiveSection(sections[i])
        break
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <button onClick={() => scrollTo("#hero")} className="text-lg font-bold tracking-tight">
          Fiderana
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                activeSection === link.href.slice(1)
                  ? "bg-zinc-800 text-zinc-100"
                  : "text-zinc-400 hover:text-zinc-100"
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 md:hidden"
            aria-label="Menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-zinc-800 bg-zinc-950 px-4 pb-4 pt-2 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={cn(
                "block w-full text-left rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                activeSection === link.href.slice(1)
                  ? "bg-zinc-800 text-zinc-100"
                  : "text-zinc-400 hover:text-zinc-100"
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
