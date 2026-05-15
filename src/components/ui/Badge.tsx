import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline"
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === "default" &&
          "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
        variant === "outline" &&
          "border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400",
        className
      )}
    >
      {children}
    </span>
  )
}
