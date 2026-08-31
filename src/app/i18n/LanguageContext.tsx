"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { content, type Language, type SiteContent } from "./content"

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  t: SiteContent
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const STORAGE_KEY = "portfolio-language"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "en" || stored === "th") {
      setLanguageState(stored)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    window.localStorage.setItem(STORAGE_KEY, lang)
  }

  const toggleLanguage = () => setLanguage(language === "en" ? "th" : "en")

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t: content[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider")
  return ctx
}
