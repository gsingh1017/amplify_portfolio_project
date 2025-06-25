"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 3,
    title: "Cloud-Native Portfolio Website: A Modern Approach with Next.js",
    description:
      "This project walks you through building a modern, automated, cloud-native portfolio website, like this one.",
    image: "/images/project_3-image.jpg",
    tech: ["AWS CDK", "Amplify", "Route 53"],
    github: "https://github.com/gsingh1017/amplify_portfolio_project",
    medium:
      "https://medium.com/@gurniksingh/cloud-native-portfolio-website-a-modern-approach-with-next-js-aws-amplify-cdk-26c34cb42752",
  },
  {
    id: 2,
    title: "Modernizing AWS Infrastructure with CDK & TypeScript",
    description:
      "Transitioning infrastructure from a legacy manual setup to a robust, automated, and secure system built with AWS CDK & TypeScript.",
    image: "/images/project_2-image.jpg",
    tech: ["AWS CDK", "TypeScript", "IAM", "EC2", "RDS"],
    github: "https://github.com/gsingh1017/aws_migration_project",
    medium:
      "https://medium.com/@gurniksingh/modernizing-aws-infrastructure-with-cdk-a-patient-portal-case-study-8193371a4855",
  },
  {
    id: 1,
    title: "Ditching the AWS Root Account in a Live Startup Environment",
    description:
      "Solving a root account nightmare and establishing a secure, well-governed AWS environment using Terraform.",
    image: "/images/project_1-image.jpg",
    tech: ["Terraform", "IAM"],
    github: "https://github.com/gsingh1017/startup_iam_project",
    medium:
      "https://medium.com/@gurniksingh/project-ditching-the-aws-root-account-in-a-live-startup-environment-90afabacf58a",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-20 h-1 bg-violet-500 mx-auto mb-6"></div>
          <p className="text-slate-50 max-w-3xl mx-auto">Explore some of my recent work and personal projects.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full"
            >
              <Card className="h-full overflow-hidden group project-card">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-violet-400">{project.title}</h3>
                  <p className="text-slate-50 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-violet-900 hover:bg-violet-800 text-neutral-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="gap-2 project-button-outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="gap-2 project-button-solid" asChild>
                    <a href={project.medium} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Medium
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
