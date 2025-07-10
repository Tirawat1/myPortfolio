"use client";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const educationData = [
  {
    image: "/kasertLogo.png",
    degree: "Bachelor of Science in Computer Science",
    school: "Kasetsart University",
    location: "Bangkok, Thailand",
    period: "2021 - 2024",
    gpa: "3.36",
    description:
      "Focused on software engineering, algorithms, and data structures.",
    achievements: [
      "Part of a team that developed a web application for virtual kasertfair 2024",
    ],
  },
  {
    image: "/suanRangsitLogo.png",
    degree: "Mathematics and Science Program",
    school: "Suankularb Wittayalai Rangsit School",
    location: "Bangkok, Thailand",
    period: "2018 - 2021",
    gpa: "3.54",
    description:
      "Graduated with honors, specializing in Mathematics and Science.",
    achievements: [],
  },
];

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    const element = document.getElementById("education");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 relative overflow-hidden w-full"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Education</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 flex-1">
                  <div className="bg-blue-600 p-3 rounded-full w-fit mx-auto sm:mx-0 flex-shrink-0">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg sm:text-xl text-blue-400 mb-2">
                      {edu.school}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-400 space-y-1 sm:space-y-0">
                      <div className="flex items-center justify-center sm:justify-start space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm sm:text-base">
                          {edu.location}
                        </span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm sm:text-base">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 rounded-full w-fit mx-auto lg:mx-0">
                  <span className="text-white font-semibold text-sm sm:text-base">
                    GPA: {edu.gpa}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                {edu.description}
              </p>

              <div>
                {edu.achievements.length > 0 ? (
                  <>
                    <h5 className="text-base sm:text-lg font-semibold text-white mb-3">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start space-x-2 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm sm:text-base">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
