"use client"

import { Code } from "lucide-react"
import { organizedTechStack } from "../resource/iconData"
import { usePressReveal } from "../hooks/usePressReveal"
import { useLanguage } from "../i18n/LanguageContext"

export default function Skills() {
  const { t } = useLanguage()
  const { ref, isVisible } = usePressReveal<HTMLElement>()

  const skillCategories = [
    { title: t.skills.categories.backend, skills: organizedTechStack.backend },
    { title: t.skills.categories.frontend, skills: organizedTechStack.frontend },
    { title: t.skills.categories.databases, skills: organizedTechStack.databases },
    { title: t.skills.categories.tools, skills: organizedTechStack.tools },
  ]

  return (
    <section id="skills" ref={ref} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 w-full bg-paper-plate/40">
      <div className="max-w-5xl mx-auto registration-guide pl-6 sm:pl-10">
        <div className={`press-reveal mb-10 sm:mb-14 ${isVisible ? "is-visible" : ""}`}>
          <span className="font-label text-xs uppercase tracking-[0.3em] text-muted-foreground">Type Specimen 04</span>
          <h2 className="font-display font-black uppercase text-3xl sm:text-4xl lg:text-5xl text-foreground mt-2">
            {t.skills.heading} <span className="ink-emphasis dark:text-ink-400">{t.skills.headingHighlight}</span>
          </h2>
          <div className={`press-rule w-24 mt-4 mb-5 ${isVisible ? "is-visible" : ""}`} />
          <p className="text-foreground/75 text-base sm:text-lg max-w-[60ch]">{t.skills.subtitle}</p>
        </div>

        <div className="space-y-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`press-reveal ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-baseline gap-3 border-b-2 border-foreground/15 pb-2 mb-4">
                <span className="ink-stamp px-2 py-0.5 font-label text-[11px] uppercase tracking-widest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl uppercase tracking-wide text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2.5 group">
                    {skill.icon ? (
                      <skill.icon className="w-6 h-6 flex-shrink-0" />
                    ) : (
                      <Code className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                    <span className="font-sans text-sm sm:text-base text-foreground group-hover:text-ink-500 dark:group-hover:text-ink-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
