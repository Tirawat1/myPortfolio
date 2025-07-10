import { Code, Database, Globe, Layers, Smartphone, Wrench } from "lucide-react"
import { getProgrammingLanguages, getFrameworksAndLibraries, getDatabases, getTools } from "../resource/iconData";

const iconData = [
  {
    title: "Programming Languages",
    icon: <Code className="w-8 h-8" />,
    skills: getProgrammingLanguages().map(tech => ({
      name: tech.name,
      icon: tech.icon
    })),
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers className="w-8 h-8" />,
    skills: getFrameworksAndLibraries().map(tech => ({
      name: tech.name,
      icon: tech.icon
    })),
  },
  {
    title: "Databases",
    icon: <Database className="w-8 h-8" />,
    skills: getDatabases().map(tech => ({
      name: tech.name,
      icon: tech.icon
    })),
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench className="w-8 h-8" />,
    skills: getTools().map(tech => ({
      name: tech.name,
      icon: tech.icon
    })),
  },
];

export default function TechSkills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Tech <span className="text-blue-400">Stack</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build modern applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {iconData.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-blue-400">{category.icon}</div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center p-3 bg-slate-900/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                      <skill.icon size="32" className="group-hover:shadow-lg" />
                    </div>
                    <span className="text-gray-300 text-xs text-center font-medium group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {getProgrammingLanguages().length}
            </div>
            <div className="text-gray-400">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {getFrameworksAndLibraries().length}
            </div>
            <div className="text-gray-400">Frameworks</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {getDatabases().length}
            </div>
            <div className="text-gray-400">Databases</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">
              {getTools().length}
            </div>
            <div className="text-gray-400">Tools</div>
          </div>
        </div>
      </div>
    </section>
  );
}