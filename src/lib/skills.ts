import type { Skill } from "@/types"

export const skills: Skill[] = [
  { name: "ReactJS", icon: "devicon-react-original", category: "frontend", level: 95 },
  { name: "NextJS", icon: "devicon-nextjs-original", category: "frontend", level: 85 },
  { name: "VueJS", icon: "devicon-vuejs-plain", category: "frontend", level: 70 },
  { name: "TypeScript", icon: "devicon-typescript-original", category: "frontend", level: 85 },
  { name: "JavaScript", icon: "devicon-javascript-plain", category: "frontend", level: 90 },
  { name: "TailwindCSS", icon: "devicon-tailwindcss-original", category: "frontend", level: 85 },
  { name: "React Native", icon: "devicon-react-original", category: "frontend", level: 75 },
  { name: "NestJS", icon: "devicon-nestjs-plain", category: "backend", level: 85 },
  { name: "ExpressJS", icon: "devicon-express-original", category: "backend", level: 85 },
  { name: "Node.js", icon: "devicon-nodejs-plain", category: "backend", level: 85 },
  { name: "PHP", icon: "devicon-php-plain", category: "backend", level: 70 },
  { name: "Laravel", icon: "devicon-laravel-original", category: "backend", level: 70 },
  { name: "Java", icon: "devicon-java-plain", category: "backend", level: 75 },
  { name: "Python", icon: "devicon-python-plain", category: "backend", level: 70 },
  { name: "MySQL", icon: "devicon-mysql-plain", category: "backend", level: 85 },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain", category: "backend", level: 75 },
  { name: "MongoDB", icon: "devicon-mongodb-plain", category: "backend", level: 80 },
  { name: "Oracle", icon: "devicon-oracle-original", category: "backend", level: 60 },
  { name: "AWS", icon: "devicon-amazonwebservices-original", category: "cloud", level: 80 },
  { name: "GCP", icon: "devicon-googlecloud-plain", category: "cloud", level: 70 },
  { name: "Docker", icon: "devicon-docker-plain", category: "devops", level: 90 },
  { name: "Kubernetes", icon: "devicon-kubernetes-plain", category: "devops", level: 80 },
  { name: "Terraform", icon: "devicon-terraform-plain", category: "devops", level: 80 },
  { name: "Ansible", icon: "devicon-ansible-plain", category: "devops", level: 75 },
  { name: "GitLab CI", icon: "devicon-gitlab-plain", category: "devops", level: 80 },
  { name: "Jenkins", icon: "devicon-jenkins-plain", category: "devops", level: 70 },
  { name: "ArgoCD", icon: "devicon-argocd-plain", category: "devops", level: 75 },
  { name: "Prometheus", icon: "devicon-prometheus-original", category: "devops", level: 75 },
  { name: "Grafana", icon: "devicon-grafana-original", category: "devops", level: 75 },
  { name: "Linux", icon: "devicon-linux-plain", category: "devops", level: 80 },
  { name: "Bash", icon: "devicon-bash-plain", category: "devops", level: 75 },
  { name: "Git", icon: "devicon-git-plain", category: "tools", level: 90 },
  { name: "Agile/SCRUM", icon: "devicon-jira-plain", category: "tools", level: 75 },
  { name: "UI/UX Design", icon: "devicon-figma-plain", category: "tools", level: 65 },
]

export function getSkillsByCategory() {
  const map = new Map<Skill["category"], Skill[]>()
  for (const skill of skills) {
    if (!map.has(skill.category)) map.set(skill.category, [])
    map.get(skill.category)!.push(skill)
  }
  return map
}

export const categoryLabels: Record<Skill["category"], string> = {
  frontend: "Frontend",
  backend: "Backend & Databases",
  cloud: "Cloud",
  devops: "DevOps",
  tools: "Tools & Methodologies",
}
