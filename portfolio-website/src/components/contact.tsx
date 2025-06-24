"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Newspaper, Mail, Phone } from "lucide-react"

const socialLinks = [
  { icon: <Github className="h-5 w-5" />, href: "https://github.com/gsingh1017", label: "GitHub" },
  {
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://ca.linkedin.com/in/gurnik-singh-808567172",
    label: "LinkedIn",
  },
  { icon: <Newspaper className="h-5 w-5" />, href: "https://medium.com/@gurniksingh", label: "Medium" },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-violet-500 mx-auto mb-6"></div>
          <p className="text-slate-50 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full border-violet-800">
              <CardContent className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4 text-violet-400">Contact Information</h3>
                <p className="text-slate-50 mb-6">Feel free to connect with me directly using the information below.</p>

                <div className="space-y-4 flex-grow">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-violet-400" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:gurnik.singh579@gmail.com" className="text-violet-400 hover:underline">
                        gurnik.singh579@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-violet-400" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:6044459048" className="text-violet-400 hover:underline">
                        (604) 445-9048
                      </a>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="font-medium mb-3">Connect with me</p>
                    <div className="flex space-x-4">
                      {socialLinks.map((link, index) => (
                        <motion.a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:bg-violet-500 hover:text-white text-violet-400 rounded-full p-3 transition-colors border border-violet-800 bg-transparent"
                          whileHover={{ y: -5 }}
                          aria-label={link.label}
                        >
                          {link.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
