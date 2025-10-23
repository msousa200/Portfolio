"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    // Check localStorage or system preference on mount
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)

    setTheme(isDark ? "dark" : "light")
    document.documentElement.classList.toggle("dark", isDark)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.theme = newTheme
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary/10"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-500 transition-transform duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 transition-transform duration-300" />
      )}
    </Button>
  )
}
