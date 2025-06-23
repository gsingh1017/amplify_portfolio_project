"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Github, Linkedin, Newspaper } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })

      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
        // Always show navbar on mobile when scrolled
        "md:block",
        scrolled && "block",
        // Prevent horizontal overflow
        "max-w-full overflow-hidden",
      )}
    >
      <div className="container flex items-center justify-between max-w-full">
        <Link href="#home" className="text-xl font-bold">
          <span className="text-violet-400">Gurnik</span> <span className="text-foreground">Singh</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-violet-400",
                activeSection === link.href.substring(1) ? "text-violet-400" : "text-slate-50",
              )}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              {link.name}
            </Link>
          ))}

          {/* Social Links Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-slate-50 hover:text-violet-400 transition-colors">
              Links
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-background/95 backdrop-blur-md border-violet-800">
              <DropdownMenuItem asChild>
                <a
                  href="https://github.com/gsingh1017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-50 hover:text-violet-400 cursor-pointer"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="https://ca.linkedin.com/in/gurnik-singh-808567172"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-50 hover:text-violet-400 cursor-pointer"
                >
                  <Linkedin className="h-4 w-5" />
                  LinkedIn
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="https://medium.com/@gurniksingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-50 hover:text-violet-400 cursor-pointer"
                >
                  <Newspaper className="h-4 w-4" />
                  Medium
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md shadow-lg py-4 border-t border-violet-800">
          <nav className="container flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-violet-400 p-4 rounded-md min-h-[44px] flex items-center",
                  activeSection === link.href.substring(1) ? "text-violet-400 bg-violet-950/30" : "text-slate-50",
                )}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                  setIsOpen(false)
                }}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Social Links - Removed "Social" heading but added violet line back */}
            <div className="border-t border-violet-800 pt-4 mt-4">
              <a
                href="https://github.com/gsingh1017"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-base font-medium text-slate-50 hover:text-violet-400 p-4 transition-colors min-h-[44px] rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
              <a
                href="https://ca.linkedin.com/in/gurnik-singh-808567172"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-base font-medium text-slate-50 hover:text-violet-400 p-4 transition-colors min-h-[44px] rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="https://medium.com/@gurniksingh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-base font-medium text-slate-50 hover:text-violet-400 p-4 transition-colors min-h-[44px] rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <Newspaper className="h-5 w-5" />
                Medium
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
