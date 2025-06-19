"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Award, Download } from "lucide-react"

const workExperience = [
  {
    id: 1,
    company: "Solecurity",
    position: "Cloud Support Engineer",
    duration: "Dec 2024 - Present",
    location: "Remote",
    description: [
      "Architected comprehensive AWS IAM security framework for fitness application startup, implementing role-based access controls with least-privilege principles that eliminated shared root account usage across 10 employees",
      "Migrated healthcare application from manual AWS Console deployments to Infrastructure as Code using AWS CDK, reducing deployment errors by 80% and enabling consistent environment replication",
      "Redesigned network architecture for patient portal application with proper public/private subnet isolation, reducing security vulnerabilities by 60% and ensuring HIPAA compliance for sensitive healthcare data",
      "Architected serverless AI ticket system security framework using AWS Organizations with role-based access for 12 employees across 5 teams, eliminating shared credential usage and implementing encryption at rest/in transit",
      "Enhanced security for Lambda, API Gateway, DynamoDB, and Bedrock by implementing service-level permissions and data encryption, meeting compliance requirements for customer data handling",
    ],
  },
  {
    id: 2,
    company: "MortgagePal & True North Mortgage",
    position: "Mortgage Consultant",
    duration: "April 2021 - Present",
    location: "Vancouver, BC",
    description: [
      "Analyze client requirements and provide tailored product recommendations, applying systematic assessment methodologies similar to technical requirement gathering",
      "Ensure compliance with federal and provincial regulatory frameworks, developing expertise in navigating complex rule systems similar to cloud compliance requirements",
      "Build client relationships through clear communication of technical concepts, translating complex mortgage options into understandable recommendations",
      "Maintain current knowledge of industry regulations and product offerings, demonstrating commitment to continuous professional development",
      "Experience across multiple mortgage companies: True North Mortgage (April 2021 - March 2024) and MortgagePal (March 2024 - Present)",
    ],
  },
]

const certifications = [
  { id: 1, name: "AWS Certified Solutions Architect - Associate", issuer: "Amazon Web Services", date: "June 2025" },
  { id: 2, name: "AWS Certified AI Practitioner", issuer: "Amazon Web Services", date: "May 2025" },
  { id: 3, name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "February 2025" },
]

export default function Resume() {
  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume/Resume-Gurnik_Singh.pdf"
    link.download = "Resume-Gurnik_Singh.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Resume</h2>
          <div className="w-20 h-1 bg-violet-500 mx-auto mb-6"></div>
          <p className="text-slate-50 max-w-3xl mx-auto mb-6">My professional experience and certifications.</p>
          <Button onClick={downloadResume} className="gap-2 bg-violet-500 hover:bg-violet-600">
            <Download className="h-4 w-4" />
            Download Resume
          </Button>
        </motion.div>

        <Tabs defaultValue="experience" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="experience" className="gap-2">
              <Briefcase className="h-4 w-4" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="certifications" className="gap-2">
              <Award className="h-4 w-4" />
              Certifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="space-y-6">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-violet-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-violet-400">{job.position}</h3>
                        <p className="text-violet-400 font-medium">{job.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 md:text-right">
                        <p className="text-slate-50">{job.duration}</p>
                        <p className="text-slate-50">{job.location}</p>
                      </div>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-slate-50">
                      {job.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="certifications" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-violet-800">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Award className="h-6 w-6 text-violet-400 mt-1" />
                        <div>
                          <h3 className="text-lg font-bold text-violet-400">{cert.name}</h3>
                          <p className="text-violet-400 font-medium">{cert.issuer}</p>
                          <p className="text-slate-50 text-sm">Issued: {cert.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
