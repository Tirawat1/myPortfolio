"use client"

import { Github, Linkedin, Mail, MapPin, Calendar } from "lucide-react"
import { usePressReveal } from "../hooks/usePressReveal"
import { useLanguage } from "../i18n/LanguageContext"

export default function AboutMe() {
  const { t } = useLanguage()
  const { ref, isVisible } = usePressReveal<HTMLElement>()

  return (
    <section id="about" ref={ref} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-6xl mx-auto registration-guide pl-6 sm:pl-10">
        <div className={`press-reveal mb-10 sm:mb-14 ${isVisible ? "is-visible" : ""}`}>
          <span className="font-label text-xs uppercase tracking-[0.3em] text-muted-foreground">Column 01</span>
          <h2 className="font-display font-black uppercase text-3xl sm:text-4xl lg:text-5xl text-foreground mt-2">
            {t.about.heading} <span className="ink-emphasis dark:text-ink-400">{t.about.headingHighlight}</span>
          </h2>
          <div className={`press-rule w-24 mt-4 ${isVisible ? "is-visible" : ""}`} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <div
            className={`press-reveal order-2 lg:order-1 ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="deckle-edge bg-paper-plate p-2 max-w-sm mx-auto lg:mx-0">
              <img
                src="/profileImage.jpg"
                alt="Portrait of Tirawat Pongpratisonthi"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>

          <div
            className={`press-reveal order-1 lg:order-2 space-y-6 ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: "250ms" }}
          >
            <div className="font-sans text-foreground/85 text-base sm:text-lg leading-relaxed max-w-[68ch]">
              {t.about.paragraphs.map((paragraph, index) => (
                <p key={index} className={index < t.about.paragraphs.length - 1 ? "mb-4" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-label text-xs uppercase tracking-wider text-muted-foreground border-t-2 border-foreground/10 pt-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-ink-500 dark:text-ink-400 flex-shrink-0" />
                <span>{t.about.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-ink-500 dark:text-ink-400 flex-shrink-0" />
                <span>{t.about.availability}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://github.com/Tirawat1"
                target="_blank"
                rel="noopener noreferrer"
                className="press-down flex items-center gap-2 px-4 py-2 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-label text-xs uppercase tracking-widest transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>{t.about.githubLabel}</span>
              </a>
              <a
                href="https://www.linkedin.com/in/tirawat-pongpratisonthi-00351324a/"
                target="_blank"
                rel="noopener noreferrer"
                className="press-down flex items-center gap-2 px-4 py-2 bg-ink-500 dark:bg-ink-400 text-paper dark:text-[#1c1712] border-2 border-ink-500 dark:border-ink-400 hover:bg-ink-600 dark:hover:bg-ink-300 font-label text-xs uppercase tracking-widest transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>{t.about.linkedinLabel}</span>
              </a>
              <a
                href="mailto:Tirawat.pst@gmail.com"
                className="press-down flex items-center gap-2 px-4 py-2 ink-stamp font-label text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                Tirawat.pst@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
