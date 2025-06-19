import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Resume from "@/components/resume"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
