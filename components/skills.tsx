"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"
import { Code, Database, Globe, Cpu, Cloud, GitBranch } from "lucide-react"

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const skillCategories = [
    {
      category: "CS Fundamentals",
      icon: <Cpu className="h-6 w-6" />,
      skills: ["Data Structures", "Algorithms", "OOPs", "DBMS", "Operating Systems"],
    },
    {
      category: "Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "Java", "C++", "C", "JavaScript"],
    },
    {
      category: "AI/ML & Tools",
      icon: <Database className="h-6 w-6" />,
      skills: ["scikit-learn", "Hugging Face LLMs", "NLTK", "Pandas", "NumPy"],
    },
    {
      category: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["Flask", "React", "Next.js", "HTML/CSS", "WebRTC", "Streamlit"],
    },
    {
      category: "Databases & Cloud",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["MongoDB", "SQL", "Render", "Vercel"],
    },
    {
      category: "Tools & Others",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["GitHub", "Docker", "Git", "VS Code"],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold mb-4 section-heading">Technical Skills</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            I have experience with a wide range of technologies and tools, allowing me to build comprehensive AI/ML
            solutions and scalable applications for various problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">{category.icon}</div>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium hover:bg-primary/20 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
