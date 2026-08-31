"use client"

import type { ReactNode } from "react"
import { ThemeProvider } from "next-themes"
import { LanguageProvider } from "./i18n/LanguageContext"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  )
}
