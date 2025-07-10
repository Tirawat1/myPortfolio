"use client"

import type React from "react"

import { Mail, MapPin, Phone, Send, Github, Linkedin, MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 })

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden w-full bg-slate-800/30"
    >
      {/* Enhanced Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-tr from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6">
            <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information - Mobile Optimized */}
          <div
            className={`lg:col-span-1 space-y-6 sm:space-y-8 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
              <a
                href="mailto:Tirawat.pst@gmail.com"
                className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold mb-1">Email Me</h4>
                    <p className="text-gray-400 text-sm truncate group-hover:text-blue-400 transition-colors">
                      Tirawat.pst@gmail.com
                    </p>
                  </div>
                </div>
              </a>

              <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-gray-400 text-sm">Pathum Thani, Thailand</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 sm:col-span-2 xl:col-span-1">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Availability</h4>
                    <p className="text-gray-400 text-sm">Open for freelance projects</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
           
          {/* Contact Form - Enhanced Mobile Design */}
          <div
            className={`lg:col-span-1 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-700/50 shadow-2xl">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Work Together</h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                  I'm currently available for freelance projects and full-time opportunities. Let's create something
                  amazing together!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-white font-semibold text-lg">Quick Response</h4>
                  </div>
                  <p className="text-gray-400 text-sm">I typically respond to emails within 24 hours</p>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-white font-semibold text-lg">Flexible Schedule</h4>
                  </div>
                  <p className="text-gray-400 text-sm">Available for meetings in Thailand timezone (GMT+7)</p>
                </div>
              </div>

              <div className="text-center space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:Tirawat.pst@gmail.com?subject=Project%20Inquiry&body=Hi%20Tirawat,%0A%0AI'm%20interested%20in%20discussing%20a%20project%20with%20you.%0A%0AProject%20Details:%0A-%20%0A%0ATimeline:%0A-%20%0A%0ABudget:%0A-%20%0A%0ALooking%20forward%20to%20hearing%20from%20you!"
                    className="group flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Send Email</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/tirawat-pongpratisonthi-00351324a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center space-x-3 px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 hover:border-blue-500/50 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>

                <div className="pt-8 border-t border-slate-700/50">
                  <p className="text-gray-400 text-sm mb-4">Prefer a different platform? Find me on:</p>
                  <div className="flex justify-center space-x-6">
                    <a
                      href="https://github.com/Tirawat1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href="mailto:Tirawat.pst@gmail.com"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
