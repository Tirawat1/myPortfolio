"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function HeroLanding() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const roles = ["FullSnack🍦🍟🍕 Developer", "Full Stack Developer", "Software Engineer", "Problem Solver"]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500)
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-800/20"
      ></div>

      {/* Animated background elements with parallax */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"
        ></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 items-center p-6">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent line-clamp-2">
                  Tirawat Pongpratisonthi
                </span>
              </h1>

              <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 h-12">
                I'm a{" "}
                <span className="text-blue-400 font-semibold">
                  {text}
                  <span className="animate-pulse">|</span>
                </span>
              </div>

              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl">
                Passionate about creating innovative solutions and building amazing digital experiences. Welcome to my
                portfolio where creativity meets functionality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToAbout}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore My Work
                </button>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-6 sm:px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 text-center text-sm sm:text-base"
                >
                  Get In Touch
                </button>

              </div>
            </div>

            {/* Right Image */}
            <div
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Main profile image */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <img
                    src="/heroLandingImage.svg"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-blue-400/30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full"></div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-white text-2xl">💻</span>
                </div>

                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-white text-xl">🚀</span>
                </div>

                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center animate-ping">
                  <span className="text-white text-sm">⚡</span>
                </div>

                {/* Background decoration */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl transform scale-110"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </section>
  )
}
