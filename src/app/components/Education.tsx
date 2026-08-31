"use client"

import { MapPin } from "lucide-react"
import { usePressReveal } from "../hooks/usePressReveal"
import { useLanguage } from "../i18n/LanguageContext"

export default function Education() {
  const { t } = useLanguage()
  const { ref, isVisible } = usePressReveal<HTMLElement>()

  return (
    <section id="education" ref={ref} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 w-full bg-paper-plate/40">
      <div className="max-w-5xl mx-auto registration-guide pl-6 sm:pl-10">
        <div className={`press-reveal mb-10 sm:mb-14 ${isVisible ? "is-visible" : ""}`}>
          <span className="font-label text-xs uppercase tracking-[0.3em] text-muted-foreground">Ledger 02</span>
          <h2 className="font-display font-black uppercase text-3xl sm:text-4xl lg:text-5xl text-foreground mt-2">
            {t.education.heading} <span className="ink-emphasis dark:text-ink-400">{t.education.headingHighlight}</span>
          </h2>
          <div className={`press-rule w-24 mt-4 ${isVisible ? "is-visible" : ""}`} />
        </div>

        <div className="border-t-2 border-foreground/15">
          {t.education.items.map((edu, index) => (
            <div
              key={index}
              className={`press-reveal grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-4 sm:gap-8 py-8 border-b-2 border-foreground/15 ${
                isVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="font-label text-xs uppercase tracking-widest text-muted-foreground space-y-2">
                <p className="tabular-nums text-foreground/90">{edu.period}</p>
                <p className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-ink-500 dark:text-ink-400 flex-shrink-0" />
                  {edu.location}
                </p>
                <p className="ink-stamp inline-block px-2 py-0.5 tabular-nums">GPA {edu.gpa}</p>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground">{edu.degree}</h3>
                <h4 className="text-lg text-ink-500 dark:text-ink-400 mb-3 font-sans font-semibold">{edu.school}</h4>
                <p className="text-foreground/80 leading-relaxed text-sm sm:text-base max-w-[65ch]">{edu.description}</p>

                {edu.achievements.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2 text-foreground/75 text-sm sm:text-base">
                        <span className="text-ink-500 dark:text-ink-400 font-label mt-0.5">—</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
