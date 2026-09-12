"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { name: "Home", href: "#home"},
  { name: "Sobre", href: "#about"},
  { name: "Projetos", href: "#projects"},
  { name: "Experiencia", href: "#experience"},
  { name: "Ferramentas", href: "#tools"},
]

export function Navigation() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 px-4 pt-8 pb-4 pointer-events-none">
      <nav aria-label="Menu principal" className="pointer-events-auto flex items-center justify-between bg-background border-4 border-border rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_var(--color-border)]">
        <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center shrink-0">
          <div className="w-6 h-6 bg-background rounded-full"></div>
        </div>

        <ul className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-foreground text-[18px] font-bold leading-5 hover:opacity-70 transition-opacity"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Alternar tema" 
          className="bg-foreground text-background hover:bg-foreground/90 rounded-sm px-5 h-12 min-w-12 shrink-0"
        >
          {theme === "dark" ? (
            <Sun className="w-10 h-10" strokeWidth={2.5} />
          ) : (
            <Moon className="w-10 h-10" strokeWidth={2.5} />
          )}
        </Button>
      </nav>
    </header>
  )
}
