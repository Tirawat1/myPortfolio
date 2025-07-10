import Navbar from "./components/Navbar"
import HeroLanding from "./components/HeroLanding"
import AboutMe from "./components/AboutMe"
import Education from "./components/Education"
import WorkExperience from "./components/WorkExperience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contract"

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-x-hidden">
      <Navbar />
      <main className="w-full pt-16 overflow-x-hidden">
        <HeroLanding />
        <AboutMe />
        <Education />
        <WorkExperience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
