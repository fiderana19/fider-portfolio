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
        "rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm",
        hover && "transition-all hover:shadow-lg hover:-translate-y-0.5 hover:border-zinc-700",
        className
      )}
    >
      {children}
    </div>
  )
}
