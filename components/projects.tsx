import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Projects = () => {
  const projectsData = [
    {
      title: "VibeRoom - Real-Time Music Sync Platform",
      date: "Apr 2025",
      description:
        "Developed a real-time web app that allows users to listen to YouTube music in sync and engage in audio conversations, creating a shared, interactive experience.",
      technologies: ["WebRTC", "YouTube IFrame API", "Socket.IO", "React.js"],
      features: [
        "Peer-to-peer audio calls using WebRTC",
        "Synchronized YouTube music playback",
        "Multi-user synchronization with Socket.IO",
        "Dynamic media handling",
        "Shared interactive experience",
      ],
      demoLink: "https://viberoom.vercel.app",
      sourceLink: "https://github.com/Sripad1003/viberoom",
      image: "/projects/viberoom.png",
    },
    {
      title: "Recipe Realm (Team)",
      date: "Sep 2024",
      description:
        "Created a full-stack recipe generator app that provides personalized recipe suggestions based on user-input ingredients, utilizing semantic similarity techniques for accurate matching.",
      technologies: ["MERN Stack", "Web Scraping", "LLM Chat", "Semantic Similarity"],
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
    },
    {
      title: "AI/ML Chatbot for NMCG (Team)",
      date: "Feb 2024",
      description:
        "Developed a Reinforcement Learning Chatbot for the National Mission Clean Ganga to improve user engagement on water conservation, deployed across museums and websites for scalable access.",
      technologies: ["Reinforcement Learning", "scikit-learn", "Cosine Similarity", "Voice-to-Text"],
      features: [
        "Reinforcement Learning implementation",
        "Cosine Similarity for intent recognition",
        "Voice-to-text support",
        "Deployed across museums and websites",
        "Water conservation awareness focus",
      ],
      demoLink: "https://nmcg-chatbot.onrender.com",
      sourceLink: "https://github.com/Sripad1003/nmcg-chatbot",
      image: "/projects/nmcg-chatbot.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 section-heading">Projects</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, real-time
            applications, and AI/ML integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="overflow-hidden border hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg?height=192&width=384"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>{project.description}</CardDescription>
                <div>
                  <h4 className="font-medium mb-1">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Key Features:</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.demoLink && (
                  <Link href={project.demoLink} target="_blank">
                    <Button variant="outline" size="sm" className="flex items-center">
                      <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
                    </Button>
                  </Link>
                )}
                {project.sourceLink && (
                  <Link href={project.sourceLink} target="_blank">
                    <Button variant="outline" size="sm" className="flex items-center">
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
