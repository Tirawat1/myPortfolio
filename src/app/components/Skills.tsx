"use client"

import { Code, Database, Globe, Smartphone } from "lucide-react"
import { useEffect, useState } from "react"
import { organizedTechStack } from "../resource/iconData"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1, rootMargin: "50px" }
    )

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
      observer.disconnect()
    }
  }, [])

  // 🔁 Combine organized data with title + icon
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      skills: organizedTechStack.programming,
    },
    {
      title: "Frontend & Frameworks",
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      skills: organizedTechStack.frameworks,
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
      skills: organizedTechStack.databases,
    },
    {
      title: "Tools",
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      skills: organizedTechStack.tools,
    },
  ]

  return (
    <section
      id="skills"
      className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 relative overflow-hidden w-full transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background blur elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-blue-400">Tools</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900/50 rounded-2xl p-4 sm:p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="text-blue-400">{category.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center p-2 sm:p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors group"
                  >
                    <div className="text-lg sm:text-2xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                      {skill.icon ? (
                        <skill.icon className="w-5 h-5 sm:w-7 sm:h-7 text-blue-400" />
                      ) : (
                        <Code className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400" />
                      )}
                    </div>
                    <span className="text-gray-300 text-xs sm:text-sm text-center font-medium">
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
