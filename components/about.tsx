import { Code, Database, Server, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Full-Stack Development",
      description: "Experience with React.js, Node.js, and modern web technologies",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Real-Time Applications",
      description: "Built applications with Socket.IO and WebRTC for synchronized experiences",
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "AI/ML Integration",
      description: "Implemented machine learning models for intelligent applications",
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Problem Solving",
      description: "Strong foundation in data structures, algorithms, and system design",
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 section-heading">About Me</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Computer Science undergraduate with hands-on experience in full-stack development, real-time web
            applications, and AI/ML. Proven ability to build scalable solutions like synced media apps, intelligent
            chatbots, and recommendation engines. Skilled in Java, C, Python, Data Structures, Problem solving and
            machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="border hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-2">{item.icon}</div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
