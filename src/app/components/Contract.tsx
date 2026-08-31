"use client"

import { Mail, MapPin, Phone, Send, Github, Linkedin, MessageCircle } from "lucide-react"
import { usePressReveal } from "../hooks/usePressReveal"
import { useLanguage } from "../i18n/LanguageContext"

export default function Contact() {
  const { t } = useLanguage()
  const { ref, isVisible } = usePressReveal<HTMLElement>()

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 w-full bg-paper-plate/40">
      <div className="max-w-6xl mx-auto registration-guide pl-6 sm:pl-10">
        <div className={`press-reveal mb-10 sm:mb-14 ${isVisible ? "is-visible" : ""}`}>
          <span className="font-label text-xs uppercase tracking-[0.3em] text-muted-foreground">Colophon 06</span>
          <h2 className="font-display font-black uppercase text-3xl sm:text-4xl lg:text-5xl text-foreground mt-2">
            {t.contact.heading} <span className="ink-emphasis dark:text-ink-400">{t.contact.headingHighlight}</span>
          </h2>
          <div className={`press-rule w-24 mt-4 mb-5 ${isVisible ? "is-visible" : ""}`} />
          <p className="text-foreground/75 text-base sm:text-lg max-w-[60ch]">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
          {/* Ledger */}
          <div className={`press-reveal ${isVisible ? "is-visible" : ""}`} style={{ transitionDelay: "150ms" }}>
            <div className="border-t-2 border-foreground/15">
              <a
                href="mailto:Tirawat.pst@gmail.com"
                className="press-down group flex items-center gap-4 py-5 border-b-2 border-foreground/15"
              >
                <Mail className="w-5 h-5 text-ink-500 dark:text-ink-400 flex-shrink-0" />
                <div>
                  <h4 className="font-label text-xs uppercase tracking-widest text-muted-foreground mb-0.5">
                    {t.contact.emailCardTitle}
                  </h4>
                  <p className="text-foreground group-hover:text-ink-500 dark:group-hover:text-ink-400 transition-colors">
                    Tirawat.pst@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 py-5 border-b-2 border-foreground/15">
                <MapPin className="w-5 h-5 text-ink-500 dark:text-ink-400 flex-shrink-0" />
                <div>
                  <h4 className="font-label text-xs uppercase tracking-widest text-muted-foreground mb-0.5">
                    {t.contact.locationCardTitle}
                  </h4>
                  <p className="text-foreground">{t.contact.locationValue}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 py-5 border-b-2 border-foreground/15">
                <Phone className="w-5 h-5 text-ink-500 dark:text-ink-400 flex-shrink-0" />
                <div>
                  <h4 className="font-label text-xs uppercase tracking-widest text-muted-foreground mb-0.5">
                    {t.contact.availabilityCardTitle}
                  </h4>
                  <p className="text-foreground">{t.contact.availabilityValue}</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <p className="font-label text-xs uppercase tracking-widest text-muted-foreground mb-3">
                {t.contact.otherPlatformsLabel}
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Tirawat1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="press-down p-2 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:Tirawat.pst@gmail.com"
                  aria-label="Email"
                  className="press-down p-2 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Order form panel */}
          <div className={`press-reveal ${isVisible ? "is-visible" : ""}`} style={{ transitionDelay: "300ms" }}>
            <div className="border-2 border-foreground p-6 sm:p-8 lg:p-10 bg-background">
              <div className="flex items-center gap-3 mb-6 border-b-2 border-foreground/15 pb-6">
                <span className="ink-stamp w-11 h-11 flex items-center justify-center flex-shrink-0">
                  <Send className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground">
                    {t.contact.formHeading}
                  </h3>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed text-sm sm:text-base mb-6 max-w-[55ch]">
                {t.contact.formSubtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-4 h-4 text-ink-500 dark:text-ink-400" />
                    <h4 className="font-label text-xs uppercase tracking-widest text-foreground">
                      {t.contact.quickResponseTitle}
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-sm">{t.contact.quickResponseDesc}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-ink-500 dark:text-ink-400" />
                    <h4 className="font-label text-xs uppercase tracking-widest text-foreground">
                      {t.contact.flexScheduleTitle}
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-sm">{t.contact.flexScheduleDesc}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:Tirawat.pst@gmail.com?subject=Project%20Inquiry&body=Hi%20Tirawat,%0A%0AI'm%20interested%20in%20discussing%20a%20project%20with%20you.%0A%0AProject%20Details:%0A-%20%0A%0ATimeline:%0A-%20%0A%0ABudget:%0A-%20%0A%0ALooking%20forward%20to%20hearing%20from%20you!"
                  className="press-down flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-ink-500 dark:bg-ink-400 text-paper dark:text-[#1c1712] border-2 border-ink-500 dark:border-ink-400 hover:bg-ink-600 dark:hover:bg-ink-300 font-label text-sm uppercase tracking-widest transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t.contact.sendEmailLabel}</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/tirawat-pongpratisonthi-00351324a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press-down flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-label text-sm uppercase tracking-widest transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>{t.contact.connectLinkedinLabel}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
