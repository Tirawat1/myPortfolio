"use client"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { useState, useEffect } from "react"

const experienceData = [
  {
    title: "WMS-Agent Intern",
    company: "TCC Technology",
    location: "Thailand",
    period: "2024",
    type: "Internship",
    description:
      "Developed a website application for managing warehouse processes from beginning to end using Next.js and C#.",
    achievements: [
      "Utilized Next.js to implement responsive and user-friendly frontend interfaces",
      "Designed and implemented UI/UX features focusing on usability and functionality",
      "Enhanced user experience through intuitive interface design",
    ],
    technologies: ["Next.js", "C#", "React", "TypeScript"],
  },
  {
    title: "MCMC Intern",
    company: "TCC Technology",
    location: "Thailand",
    period: "2024",
    type: "Internship",
    description:
      "Contributed to the development of a Point-of-Sale (POS) system for managing retail store inventory using microservices architecture.",
    achievements: [
      "Developed authentication system ensuring secure user access across the platform",
      "Improved backend performance by optimizing code and enhancing system efficiency",
      "Reduced response times through performance optimization",
    ],
    technologies: ["C#", "Microservices", ".NET Core", "Authentication"],
  },
  {
    title: "School Information Management System",
    company: "Freelance",
    location: "Remote",
    period: "2024",
    type: "Freelance",
    description:
      "Designed and developed a comprehensive School Information Management System with modern web technologies.",
    achievements: [
      "Built responsive frontend using Next.js with intuitive user interface",
      "Developed robust backend system using C#",
      "Implemented dynamic and interactive components for seamless user experience",
    ],
    technologies: ["Next.js", "C#", ".NET Core", "React", "TypeScript"],
  },
]


export default function WorkExperience() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    const element = document.getElementById("experience")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
      observer.disconnect()
    }
  }, [])

  return (
    <section
      id="experience"
      className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden w-full transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background elements */}
      <div className="absolute top-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Work <span className="text-blue-400">Experience</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400 hidden lg:block"></div>

          <div className="space-y-8 sm:space-y-12">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900 hidden lg:block"></div>

                <div
                  className={`lg:ml-16 bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 flex-1">
                      <div className="bg-blue-600 p-3 rounded-full w-fit mx-auto sm:mx-0 lg:hidden flex-shrink-0">
                        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="text-center sm:text-left flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <h4 className="text-lg sm:text-xl text-blue-400 mb-2">{exp.company}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-400 space-y-1 sm:space-y-0">
                          <div className="flex items-center justify-center sm:justify-start space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm sm:text-base">{exp.location}</span>
                          </div>
                          <div className="flex items-center justify-center sm:justify-start space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm sm:text-base">{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 rounded-full w-fit mx-auto lg:mx-0">
                      <span className="text-white font-semibold text-sm sm:text-base">{exp.type}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">{exp.description}</p>

                  <div className="mb-6">
                    <h5 className="text-base sm:text-lg font-semibold text-white mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-2 text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm sm:text-base">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold text-white mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-800 text-blue-400 rounded-full text-xs sm:text-sm border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
