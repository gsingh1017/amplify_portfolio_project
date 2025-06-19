"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-slate-50 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            &copy; {new Date().getFullYear()} Gurnik Singh. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 md:mt-0 flex items-center gap-3"
          >
            <p className="text-slate-50 text-sm">
              Built with{" "}
              <a
                href="https://v0.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-50 hover:underline"
              >
                Vercel
              </a>
            </p>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-violet-800 text-violet-400 hover:bg-violet-950 hover:text-violet-400 hover:border-violet-400"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Back to top</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
