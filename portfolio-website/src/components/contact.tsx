"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Github, Linkedin, Newspaper, Mail, Phone, Send } from "lucide-react"

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
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isPending, startTransition] = useTransition()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    startTransition(async () => {
      try {
        // TODO: Replace this with your Lambda function call
        // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

        console.log("Form data to be sent to Lambda:", formData)

        toast.success("Message sent successfully!", {
          description: "Thank you for your message. I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "" })
      } catch (error) {
        console.error("Error sending message:", error)
        toast.error("Failed to send message", {
          description: "Please try again or contact me directly via email.",
        })
      }
    })
  }

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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-violet-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-violet-400">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-violet-800 focus-visible:ring-violet-400"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-violet-800 focus-visible:ring-violet-400"
                    required
                  />
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="border-violet-800 focus-visible:ring-violet-400"
                    required
                  />
                  <Button type="submit" className="w-full gap-2 bg-violet-500 hover:bg-violet-600" disabled={isPending}>
                    {isPending ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
