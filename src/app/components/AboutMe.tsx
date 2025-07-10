"use client"

import { Github, Linkedin, Mail, MapPin, Calendar } from "lucide-react"
import { useEffect, useState } from "react"

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.2 })

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden w-full">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 order-2 lg:order-1 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative flex justify-center p-2">
              <img
                src="/profileImage.jpg"
                alt="Profile"
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 delay-400 order-1 lg:order-2 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="text-gray-300 text-base sm:text-lg leading-relaxed">
              <p className="mb-4">
                Hello! I'm Tirawat Pongpratisonthi (Prem), a passionate Computer Science student at Kasetsart University
                with a love for creating innovative solutions and building amazing digital experiences. I specialize in
                full-stack development and have experience with modern web technologies.
              </p>
              <p className="mb-4">
                My journey in software development includes internships at TCC Technology, where I worked on warehouse
                management systems and POS applications using cutting-edge technologies like Next.js, C#, and
                microservices architecture.
              </p>
              <p>
                I'm proficient in multiple programming languages including JavaScript, TypeScript, Python, Java, and C#,
                with expertise in frameworks like React, Next.js, Vue.js, and Spring Boot.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm sm:text-base">Pathum Thani, Thailand</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm sm:text-base">Available for work</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://github.com/Tirawat1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors transform hover:scale-105 text-sm sm:text-base"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span className="text-white">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/tirawat-pongpratisonthi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors transform hover:scale-105 text-sm sm:text-base"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span className="text-white">LinkedIn</span>
              </a>
              <span
                className="px-4 py-2 bg-slate-900 text-gray-300 rounded-full border border-slate-600 hover:border-blue-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
              >
                <Mail className="inline w-5 h-5 mr-1" />
                Tirawat.pst@gmail.com
              </span>
              {/* <a


                href="mailto:Tirawat.pst@gmail.com"
                className="flex items-center justify-center sm:justify-start space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors transform hover:scale-105 text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span className="text-white">Email</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
