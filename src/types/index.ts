export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  category: "frontend" | "backend" | "fullstack" | "devops" | "cloud"
  github?: string
  demo?: string
  featured: boolean
  date: string
}

export interface Skill {
  name: string
  icon: string
  category: "frontend" | "backend" | "cloud" | "devops" | "tools"
  level: number
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
  type: "internship" | "education"
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  image: string
  readTime: number
  content: string
}

export interface NavLink {
  label: string
  href: string
}
