"use client"
import { ExternalLink, Github, Calendar } from "lucide-react"
import { useState, useEffect } from "react"
const projects = [
  {
    title: "Diary App with ASR Model - Senior Project",
    description:
      "An AI-powered diary application that converts spoken conversations into text using Whisper ASR Model. Built with Flutter and Spring Boot for seamless voice-to-text functionality.",
    image: "/seniorProject.png",
    technologies: ["Flutter", "Spring Boot", "MongoDB", "Whisper ASR", "AI/ML"],
    category: "Senior Project",
    date: "2024",
    githubUrl: "https://github.com/Tirawat1",
    liveUrl: "",
    features: [
      "Fine-tuned Whisper ASR model for enhanced speech-to-text accuracy",
      "Backend system with Spring Boot for API communication",
      "MongoDB integration for efficient data storage and retrieval",
      "Real-time voice processing and transcription",
      "Cross-platform mobile application with Flutter",
    ],
  },
  {
    title: "School Information Management System",
    description:
      "A comprehensive web application for managing school information, including student records, attendance, and grades. Developed using Next.js and C#.",
    image: "/obacProject.png",
    technologies: ["Next.js", "C#", ".NET Core", "React", "TypeScript"],
    category: "Freelance Project",
    date: "2024",
    githubUrl: "https://github.com/OBACProject",
    liveUrl: "https://ekawit.ac.th/",
    features: [
      "Responsive frontend with Next.js for intuitive user experience",
      "Robust backend system using C# and .NET Core",
      "Dynamic and interactive components for seamless user interaction",
      "Secure authentication and authorization system",
      "Real-time data updates and notifications",
    ],
  }

  
]


export default function Projects() {
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

    const element = document.getElementById("projects")
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
      id="projects"
      className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden w-full transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and passion for development
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs sm:text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors"
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </a>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex items-center space-x-1 text-gray-400 text-xs sm:text-sm">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-gray-400 text-xs sm:text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-slate-800 text-blue-400 rounded-full text-xs border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <a
            href="https://github.com/Tirawat1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-sm sm:text-base"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}
