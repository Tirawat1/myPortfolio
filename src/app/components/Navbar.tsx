"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon, Languages } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "../i18n/LanguageContext"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()

  const navItems = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.education, href: "#education" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-background z-50 border-b-2 border-foreground/10 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Masthead mark */}
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-2 flex-shrink-0 group"
            aria-label="Scroll to top"
          >
            <span className="ink-stamp w-9 h-9 flex items-center justify-center font-display font-bold text-sm">
              TP
            </span>
            <span className="hidden sm:block font-label text-[11px] uppercase tracking-widest text-muted-foreground">
              Pongpratisonthi&nbsp;Press
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-baseline gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-3 py-2 font-label text-xs uppercase tracking-widest transition-colors press-down ${
                      isActive ? "text-ink-500 dark:text-ink-400" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-3 right-3 -bottom-0.5 h-0.5 bg-ink-500 dark:bg-ink-400 origin-left transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                )
              })}
            </div>

            <div className="flex items-center gap-2 pl-3 border-l-2 border-foreground/10">
              <button
                onClick={toggleLanguage}
                aria-label="Toggle language"
                className="flex items-center gap-1 px-3 py-2 font-label text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground press-down"
              >
                <Languages className="w-4 h-4" />
                {language === "en" ? "EN" : "TH"}
              </button>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="p-2 text-muted-foreground hover:text-foreground press-down"
              >
                {mounted && theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="flex items-center justify-center w-9 h-9 text-muted-foreground hover:text-foreground press-down"
            >
              <Languages className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="flex items-center justify-center w-9 h-9 text-muted-foreground hover:text-foreground press-down"
            >
              {mounted && theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-9 h-9 text-muted-foreground hover:text-foreground press-down focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden w-full border-t-2 border-foreground/10">
            <div className="py-2 w-full bg-background">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-1 py-3 font-label text-sm uppercase tracking-widest border-b border-foreground/10 transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "text-ink-500 dark:text-ink-400"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
