import type { Project } from "@/types"

export const projects: Project[] = [
  {
    slug: "chelsea-squad-app",
    title: "Chelsea Squad App",
    description: "GKE cluster setup and management with GitOps workflow",
    longDescription:
      "Configuration and management of a GKE cluster for hosting the Chelsea Squad App. Implementation of a GitOps workflow combining GitLab CI and ArgoCD for continuous deployment. Deployment of a monitoring and alerting stack with Prometheus and Grafana.",
    image: "/images/chelsea-squad.jpg",
    tags: ["GKE", "GitLab CI", "ArgoCD", "GitOps", "Prometheus", "Grafana", "Docker"],
    category: "devops",
    github: "https://github.com/fiderana19/chelsea-squad-app",
    featured: true,
    date: "2026-04",
  },
  {
    slug: "ic-webapp",
    title: "IC-Webapp",
    description: "Full CI/CD pipeline with Docker, Terraform and Ansible",
    longDescription:
      "Automated application build and containerization with Docker within the pipeline. Design of a unified GitLab CI/CD pipeline encompassing all phases. Automated provisioning of AWS cloud resources with Terraform directly integrated into the workflow. Server configuration and management orchestrated by Ansible in the final pipeline stages.",
    image: "/images/ic-webapp.jpg",
    tags: ["GitLab CI", "Docker", "Terraform", "Ansible", "AWS", "CI/CD"],
    category: "devops",
    github: "https://github.com/fiderana19/ic-webapp",
    featured: true,
    date: "2025-09",
  },
  {
    slug: "monitoring-aws-infra",
    title: "Monitoring AWS Infra",
    description: "Cloud observability stack with Terraform and Prometheus",
    longDescription:
      "Design of a multi-stage GitLab CI pipeline. Provisioning of AWS resources with Terraform. Advanced resource configuration with Ansible. Deployment of an observability stack combining Prometheus, Grafana and Node Exporter.",
    image: "/images/monitoring-aws.jpg",
    tags: ["Terraform", "Ansible", "Prometheus", "Grafana", "AWS", "GitLab CI", "Node Exporter"],
    category: "devops",
    github: "https://github.com/fiderana19/monitoring-aws-infra",
    featured: true,
    date: "2025-10",
  },
  {
    slug: "mininter-audience",
    title: "MININTER — Audience Management",
    description: "Audience management web application for the ministry",
    longDescription:
      "Design and development of a web application for audience management at the Ministry of the Interior. Built with ReactJS for the frontend, NestJS for the backend and MongoDB as the database.",
    image: "/images/mininter.jpg",
    tags: ["ReactJS", "NestJS", "MongoDB", "TypeScript"],
    category: "fullstack",
    featured: false,
    date: "2024-11",
  },
  {
    slug: "wbs-caisse",
    title: "WBS — Cash Register Management",
    description: "Cash register management application for World Business Solution",
    longDescription:
      "Design and development of a cash register management application at World Business Solution (WBS). Built with ReactJS, NestJS and MongoDB.",
    image: "/images/wbs-caisse.jpg",
    tags: ["ReactJS", "NestJS", "MongoDB", "TypeScript"],
    category: "fullstack",
    featured: false,
    date: "2023-11",
  },
  {
    slug: "hacktoberfest",
    title: "HacktoberFest Component Library",
    description: "Open-source contribution with React and TailwindCSS",
    longDescription:
      "Participation in HacktoberFest 2024 for the development of a React component library with TailwindCSS. Open-source contribution to a reusable component application.",
    image: "/images/hacktoberfest.jpg",
    tags: ["ReactJS", "TailwindCSS", "Open Source"],
    category: "frontend",
    github: "https://github.com/fiderana19/hacktoberfest",
    featured: false,
    date: "2024-10",
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    description: "Personal portfolio built with NextJS and TailwindCSS",
    longDescription:
      "Development of a modern personal portfolio with NextJS, TypeScript and TailwindCSS. Single-page application with dynamic sections hosted on Vercel.",
    image: "/images/portfolio.jpg",
    tags: ["NextJS", "TypeScript", "TailwindCSS"],
    category: "frontend",
    demo: "http://fiderana-portfolio.vercel.app",
    featured: false,
    date: "2024-08",
  },
  {
    slug: "train-booking",
    title: "Train Ticket Booking",
    description: "Mobile booking application with React Native",
    longDescription:
      "Mobile train ticket booking application developed with React Native for the mobile frontend, ExpressJS for the backend API and MySQL for data storage.",
    image: "/images/train-booking.jpg",
    tags: ["React Native", "ExpressJS", "MySQL", "JavaScript"],
    category: "fullstack",
    featured: false,
    date: "2024-06",
  },
  {
    slug: "note-app",
    title: "University Grade Management",
    description: "Grade management application following HCI guidelines",
    longDescription:
      "University grade management web application developed in compliance with Human-Computer Interaction (HCI) guidelines. Built with ReactJS, ExpressJS and MySQL.",
    image: "/images/note-app.jpg",
    tags: ["ReactJS", "ExpressJS", "MySQL", "UI/UX"],
    category: "fullstack",
    featured: false,
    date: "2024-04",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectCategories(): string[] {
  return [...new Set(projects.map((p) => p.category))]
}
