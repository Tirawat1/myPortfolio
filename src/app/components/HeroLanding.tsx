"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import { useLanguage } from "../i18n/LanguageContext"

export default function HeroLanding() {
  const { t } = useLanguage()
  const roles = t.hero.roles

  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [ruleVisible, setRuleVisible] = useState(false)
  const [heroImgVisible, setHeroImgVisible] = useState(false)

  useEffect(() => {
    setLoopNum(0)
    setText("")
    setIsDeleting(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roles])

  useEffect(() => {
    const timer = setTimeout(() => setRuleVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setHeroImgVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 800)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, roles])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16 sm:pt-20">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto registration-guide pl-6 sm:pl-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
            {/* Masthead */}
            <div className="space-y-6">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {t.hero.greeting}
              </span>

              <h1 className="font-display font-black uppercase text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-foreground">
                Tirawat
                <br />
                Pongpratisonthi
              </h1>

              <div className={`press-rule w-full max-w-md ${ruleVisible ? "is-visible" : ""}`} />

              <div className="font-label text-lg sm:text-xl text-foreground/90 min-h-[2.5rem] sm:min-h-[2.75rem] flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="text-muted-foreground uppercase text-xs tracking-widest">Now setting:</span>
                <span className="ink-emphasis dark:text-ink-400">
                  {text}
                  <span className="animate-pulse">_</span>
                </span>
              </div>

              <p className="font-sans text-base sm:text-lg text-foreground/80 leading-relaxed max-w-[62ch]">
                {t.hero.intro}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={scrollToAbout}
                  className="press-down font-label text-sm uppercase tracking-widest px-6 py-3 bg-ink-500 dark:bg-ink-400 text-paper dark:text-[#1c1712] border-2 border-ink-500 dark:border-ink-400 hover:bg-ink-600 dark:hover:bg-ink-300 transition-colors"
                >
                  {t.hero.ctaExplore}
                </button>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="press-down font-label text-sm uppercase tracking-widest px-6 py-3 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  {t.hero.ctaContact}
                </button>

                <div className="flex items-center gap-3 ml-1">
                  <a
                    href="https://github.com/Tirawat1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="press-down text-muted-foreground hover:text-foreground"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tirawat-pongpratisonthi-00351324a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="press-down text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Falling illustration */}
            <div className="relative flex justify-center lg:justify-end">
              <div
                className={`hero-fall w-72 sm:w-96 lg:w-full lg:max-w-md ${heroImgVisible ? "is-visible" : ""}`}
              >
                <img
                  src="/heroFalling.png"
                  alt="Illustration of a developer working on a laptop, surrounded by floating gear"
                  className="animate-float w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        aria-label="Scroll to About"
        className="hidden sm:flex flex-col items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors press-down"
      >
        <span className="font-label text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-press-drop" />
      </button>
    </section>
  )
}
