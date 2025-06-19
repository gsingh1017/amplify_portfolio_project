"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Download, FileText } from "lucide-react"

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume/Resume-Gurnik_Singh.pdf"
    link.download = "Resume-Gurnik_Singh.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle animation fallback for React 19 */}
      <div className="particles-fallback"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Hi, I'm <span className="text-violet-400">Gurnik Singh</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-violet-400">AWS Certified Cloud Engineer</h2>

          <p className="text-lg md:text-xl text-slate-50 mb-8 max-w-2xl mx-auto">
            I design scalable cloud architectures and build robust applications with AWS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 bg-violet-500 hover:bg-violet-600" onClick={scrollToProjects}>
              <FileText className="h-4 w-4" />
              View My Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-violet-500 text-slate-50 hover:bg-violet-950"
              onClick={downloadResume}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-violet-400 hover:text-violet-300 hover:bg-violet-950"
            onClick={() => {
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
