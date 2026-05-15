import { cn } from "@/lib/utils"

interface CardProps {
  className?: string
  children: React.ReactNode
  hover?: boolean
}

export function Card({ className, children, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900",
        hover && "transition-all hover:shadow-lg hover:-translate-y-0.5 dark:hover:border-zinc-700",
        className
      )}
    >
      {children}
    </div>
  )
}
