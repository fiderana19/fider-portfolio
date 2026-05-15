import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

    const variants = {
      primary: "bg-zinc-800 text-white hover:bg-zinc-700 focus:ring-zinc-500 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200",
      secondary: "border border-zinc-300 bg-white hover:bg-zinc-50 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800",
      ghost: "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 focus:ring-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800",
    }

    const sizes = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-5 text-sm",
      lg: "h-12 px-8 text-base",
    }

    const classes = cn(base, variants[variant], sizes[size], className)

    if (href) {
      return (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={classes}>
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
