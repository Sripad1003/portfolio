"use client"

import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const Projects = () => {
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

  const projectsData = [
    {
      title: "DeliverIQ - Full-Stack Logistics Platform",
      date: "Jul 2025",
      description:
        "Built a comprehensive full-stack logistics platform connecting customers with drivers for goods transportation, featuring intelligent vehicle recommendations based on item dimensions and weight.",
      technologies: ["Next.js", "TypeScript", "React.js", "Authentication", "Real-time Tracking"],
      features: [
        "Intelligent vehicle recommendations based on item dimensions and weight",
        "Role-based authentication with encrypted data storage",
        "Real-time order tracking system",
        "Admin dashboard with user management and driver verification",
        "Security controls and comprehensive user management",
      ],
      demoLink: "https://deliveriq-demo.vercel.app/",
      sourceLink: "https://github.com/Sripad1003/deliveriq",
      image: "/projects/deliveriq.png", // Updated image path
      delay: "delay-100",
    },
    {
      title: "SmartDocQA - Enhanced Document Q&A System",
      date: "Dec 2024",
      description:
        "Built a multi-format Q&A system using FastAPI and Gemini AI for context-aware responses, integrated with Streamlit frontend and session handling.",
      technologies: ["Python", "FastAPI", "Streamlit", "Gemini AI", "scikit-learn", "Pandas"],
      features: [
        "Multi-format document processing",
        "RAG pipeline implementation",
        "Real-time answer evaluation using SQuAD metrics",
        "Intelligent caching for scalability",
        "Context-aware responses with Gemini AI",
      ],
      demoLink: "",
      sourceLink: "https://github.com/Sripad1003/smartdocqa",
      image: "/projects/smartdoc.jpg",
      delay: "delay-200",
    },
    {
      title: "VibeRoom - Real-Time Music Sync Platform",
      date: "Apr 2024",
      description:
        "Developed a real-time web app that allows users to listen to YouTube music in sync and engage in audio conversations, creating a shared, interactive experience.",
      technologies: ["WebRTC", "YouTube IFrame API", "Socket.IO", "React.js"],
      features: [
        "Peer-to-peer audio calls using WebRTC",
        "Synchronized YouTube music playbook",
        "Multi-user synchronization with Socket.IO",
        "Dynamic media handling",
        "Shared interactive experience",
      ],
      demoLink: "https://viberoom-aimw.onrender.com/",
      sourceLink: "https://github.com/Sripad1003/viberoom",
      image: "/projects/viberoom.png",
      delay: "delay-300",
    },
    {
      title: "Recipe Realm (Team)",
      date: "Sep 2024",
      description:
        "Created a recipe generator app using semantic similarity to suggest personalized meals from user-input ingredients, with conversational LLM-powered chatbot.",
      technologies: ["Python", "React", "Express", "LLMs", "Web Scraping", "MERN Stack"],
      features: [
        "Personalized recipe suggestions",
        "Semantic similarity for ingredient matching",
        "LLM-powered conversational chatbot",
        "Web scraping for enhanced dataset",
        "Full-stack MERN implementation",
      ],
      demoLink: "",
      sourceLink: "https://github.com/Sripad1003/recipe-realm",
      image: "/projects/recipe-realm.png",
      delay: "delay-400",
    },
    {
      title: "AI/ML Chatbot for NMCG (Team)",
      date: "Feb 2024",
      description:
        "Developed an AI chatbot using Reinforcement Learning and Cosine Similarity for India's National Mission Clean Ganga initiative with natural conversations via voice-to-text.",
      technologies: ["Python", "Flask", "scikit-learn", "NLTK", "HTML", "CSS", "Render"],
      features: [
        "Reinforcement Learning implementation",
        "Cosine Similarity for intent recognition",
        "Voice-to-text support",
        "Contextual memory for conversations",
        "Interactive educational content delivery",
      ],
      demoLink: "https://nmcg-chatbot.onrender.com",
      sourceLink: "https://github.com/Sripad1003/nmcg-chatbot",
      image: "/projects/nmcg-chatbot.jpg",
      delay: "delay-500",
    },
  ]

  return (
    <section ref={sectionRef} id="projects" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold mb-4 section-heading">Projects</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Here are some of the projects I've worked on, showcasing my skills in AI/ML, intelligent systems, and
            full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden border hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 group ${
                isVisible ? `animate-slide-in-up ${project.delay}` : "opacity-0 translate-y-10"
              }`}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg?height=192&width=384"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </CardDescription>
                <div>
                  <h4 className="font-medium mb-1">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Key Features:</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="group-hover:text-foreground transition-colors duration-300">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.demoLink && (
                  <Link href={project.demoLink} target="_blank">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center hover:scale-105 transition-transform duration-300 bg-transparent"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
                    </Button>
                  </Link>
                )}
                {project.sourceLink && (
                  <Link href={project.sourceLink} target="_blank">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center hover:scale-105 transition-transform duration-300 bg-transparent"
                    >
                      <Github className="mr-1 h-4 w-4" /> Source Code
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
