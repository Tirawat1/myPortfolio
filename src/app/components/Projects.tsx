"use client"
import { ExternalLink, Github, Code2 } from "lucide-react"
import { usePressReveal } from "../hooks/usePressReveal"
import { useLanguage } from "../i18n/LanguageContext"

export default function Projects() {
  const { t } = useLanguage()
  const { ref, isVisible } = usePressReveal<HTMLElement>()

  return (
    <section id="projects" ref={ref} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-6xl mx-auto registration-guide pl-6 sm:pl-10">
        <div className={`press-reveal mb-10 sm:mb-14 ${isVisible ? "is-visible" : ""}`}>
          <span className="font-label text-xs uppercase tracking-[0.3em] text-muted-foreground">Broadsides 05</span>
          <h2 className="font-display font-black uppercase text-3xl sm:text-4xl lg:text-5xl text-foreground mt-2">
            {t.projects.heading} <span className="ink-emphasis dark:text-ink-400">{t.projects.headingHighlight}</span>
          </h2>
          <div className={`press-rule w-24 mt-4 mb-5 ${isVisible ? "is-visible" : ""}`} />
          <p className="text-foreground/75 text-base sm:text-lg max-w-[60ch]">{t.projects.subtitle}</p>
        </div>

        <div className="border-t-2 border-foreground/15">
          {t.projects.items.map((project, index) => {
            const reversed = index % 2 === 1
            return (
              <div
                key={index}
                className={`press-reveal grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 border-b-2 border-foreground/15 ${
                  isVisible ? "is-visible" : ""
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={reversed ? "lg:order-2" : ""}>
                  <div className="deckle-edge bg-paper-plate p-2">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-[3/2] object-cover"
                      />
                    ) : (
                      <div className="w-full aspect-[3/2] flex items-center justify-center bg-paper-plate">
                        <Code2 className="w-14 h-14 text-muted-foreground/40" />
                      </div>
                    )}
                  </div>
                </div>

                <div className={`flex flex-col justify-center ${reversed ? "lg:order-1" : ""}`}>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="ink-stamp px-2 py-0.5 font-label text-[11px] uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="font-label text-xs tabular-nums text-muted-foreground">{project.date}</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
                    {project.title}
                  </h3>

                  <p className="text-foreground/80 leading-relaxed text-sm sm:text-base mb-4 max-w-[60ch]">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-label text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      {t.projects.keyFeaturesLabel}
                    </h4>
                    <ul className="space-y-1.5">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-foreground/75 text-sm">
                          <span className="text-ink-500 dark:text-ink-400 font-label mt-0.5">—</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="ink-stamp px-2.5 py-1 font-label text-[11px] uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="press-down p-2 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live site`}
                        className="press-down p-2 border-2 border-ink-500 dark:border-ink-400 text-ink-500 dark:text-ink-400 hover:bg-ink-500 dark:hover:bg-ink-400 hover:text-paper dark:hover:text-[#1c1712] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <a
            href="https://github.com/Tirawat1"
            target="_blank"
            rel="noopener noreferrer"
            className="press-down inline-flex items-center gap-2 px-6 py-3 bg-ink-500 dark:bg-ink-400 text-paper dark:text-[#1c1712] border-2 border-ink-500 dark:border-ink-400 hover:bg-ink-600 dark:hover:bg-ink-300 font-label text-sm uppercase tracking-widest transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>{t.projects.viewMoreLabel}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
