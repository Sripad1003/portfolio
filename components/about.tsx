"use client"

import { Code, Database, Server, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const highlights = [
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "AI/ML Integration",
      description: "Implemented machine learning models for intelligent applications",
      delay: "delay-100",
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Problem Solving",
      description: "Strong foundation in data structures, algorithms, and system design",
      delay: "delay-200",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Real-Time Applications",
      description: "Built applications with Socket.IO and WebRTC for synchronized experiences",
      delay: "delay-300",
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Full-Stack Development",
      description: "Experience with React.js, Node.js, and modern web technologies",
      delay: "delay-400",
    },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-secondary rounded-full animate-spin-slow-reverse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold mb-4 section-heading">About Me</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Computer Science undergraduate with hands-on experience in AI/ML, real-time web applications, and full-stack
            development. Proven ability to build intelligent chatbots, recommendation engines, and synced media apps.
            Skilled in Python, Java, C, Data Structures, Problem solving and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className={`border hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer ${
                isVisible ? `animate-slide-in-up ${item.delay}` : "opacity-0 translate-y-10"
              }`}
            >
              <CardHeader className="pb-2">
                <div className="mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  {item.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
