"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useEffect, useRef, useState } from "react"

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({})
  const sectionRef = useRef<HTMLElement>(null)

  const skillCategories = [
    {
      category: "CS Fundamentals",
      skills: [
        { name: "Data Structures", level: 90 },
        { name: "Algorithms", level: 85 },
        { name: "OOPs", level: 90 },
        { name: "DBMS", level: 75 },
        { name: "Operating Systems", level: 70 },
      ],
      delay: "delay-100",
    },
    {
      category: "Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C++", level: 80 },
        { name: "C", level: 80 },
        { name: "JavaScript", level: 75 },
      ],
      delay: "delay-200",
    },
    {
      category: "AI/ML & Tools",
      skills: [
        { name: "scikit-learn", level: 80 },
        { name: "Hugging Face LLMs", level: 75 },
        { name: "NLTK", level: 75 },
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 80 },
      ],
      delay: "delay-300",
    },
    {
      category: "Web Development",
      skills: [
        { name: "Flask", level: 80 },
        { name: "FastAPI", level: 75 },
        { name: "React", level: 75 },
        { name: "HTML/CSS", level: 85 },
        { name: "WebRTC", level: 70 },
      ],
      delay: "delay-400",
    },
    {
      category: "Databases & Cloud",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 75 },
        { name: "GitHub", level: 90 },
        { name: "Render", level: 70 },
        { name: "Streamlit", level: 75 },
      ],
      delay: "delay-500",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate progress bars
          skillCategories.forEach((category) => {
            category.skills.forEach((skill) => {
              const key = `${category.category}-${skill.name}`
              setTimeout(() => {
                let current = 0
                const increment = skill.level / 50
                const timer = setInterval(() => {
                  current += increment
                  if (current >= skill.level) {
                    current = skill.level
                    clearInterval(timer)
                  }
                  setAnimatedValues((prev) => ({ ...prev, [key]: current }))
                }, 20)
              }, Math.random() * 1000)
            })
          })
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
    <section ref={sectionRef} id="skills" className="py-20 bg-muted/50 relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-float-delayed"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/5 rounded-full animate-float"></div>

      <div className="container mx-auto px-4 relative z-10">
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
            <Card
              key={index}
              className={`border hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 group ${
                isVisible ? `animate-slide-in-up ${category.delay}` : "opacity-0 translate-y-10"
              }`}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-primary group-hover:scale-105 transition-transform duration-300">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, i) => {
                  const key = `${category.category}-${skill.name}`
                  const animatedValue = animatedValues[key] || 0
                  return (
                    <div key={i} className="group/skill">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium group-hover/skill:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">{Math.round(animatedValue)}%</span>
                      </div>
                      <Progress
                        value={animatedValue}
                        className="h-2 group-hover/skill:h-3 transition-all duration-300"
                      />
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
