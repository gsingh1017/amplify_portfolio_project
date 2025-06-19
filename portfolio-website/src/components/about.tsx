"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = ["DevOps", "Terraform", "AI", "Linux", "Python", "ServiceNow", "Problem Solving", "Team Collaboration"]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-violet-500 mx-auto mb-6"></div>
          <p className="text-slate-50 max-w-2xl mx-auto">
            Get to know more about me and what drives my passion for cloud computing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 overflow-hidden rounded-full border-4 border-violet-400">
              <Image
                src="/images/profile-photo.png"
                alt="Gurnik Singh"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-violet-400">Gurnik Singh</h3>
                <p className="text-slate-50 mb-6">
                  I'm an AWS Cloud Engineer with 4 years of client-facing experience in fintech, now specializing in AWS
                  Cloud Engineering. With hands-on experience designing secure, highly available, and compliant
                  infrastructures, I've deployed a strong foundation in IAM security frameworks, infrastructure
                  automation, and serverless architecture.
                </p>
                <p className="text-slate-50 mb-6">
                  I'm passionate about cloud security, automation, and delivering resilient cloud solutions that meet
                  real-world compliance and performance requirements. My goal is to continue growing my skills in both
                  AI/ML and solutions architecture to create impactful solutions.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-violet-900 hover:bg-violet-800 text-neutral-200 px-3 py-1 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}