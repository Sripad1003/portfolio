import { Award, ExternalLink, Trophy, Code, Star, GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const Certifications = () => {
  const certifications = [
    {
      title: "AI for India 2.0",
      issuer: "GUVI Geek Networks",
      icon: <Award className="h-6 w-6 text-primary" />,
      link: "https://www.guvi.in/verify-certificate?id=YOUR_CERTIFICATE_ID",
    },
    {
      title: "Data Science using Python",
      issuer: "Online Learning Platform",
      icon: <Award className="h-6 w-6 text-primary" />,
      link: "https://www.udemy.com/certificate/YOUR_CERTIFICATE_ID/",
    },
    {
      title: "ChatGPT & Google Bard",
      issuer: "Online Learning Platform",
      icon: <Award className="h-6 w-6 text-primary" />,
      link: "https://www.udemy.com/certificate/YOUR_CERTIFICATE_ID/",
    },
  ]

  const achievements = [
    {
      title: "GATE 2025 (CS) Qualified",
      description: "Score: 456, AIR: 9703, Top 5.68% nationwide",
      icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "NCAT 2025 (Naukri Campus)",
      description: "All India Rank: 24,811",
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "LeetCode Problem Solving",
      description: "Completed over 600 Data Structures and Algorithms problems",
      icon: <Code className="h-6 w-6 text-green-500" />,
    },
    {
      title: "CodeChef Rating",
      description: "Achieved 2-star rating",
      icon: <Star className="h-6 w-6 text-orange-500" />,
    },
  ]

  const activities = [
    "Leadership",
    "Public Speaking",
    "Mentoring",
    "Event Planning",
    "Time Management",
    "Problem Solving",
    "Multitasking",
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 section-heading">Certifications & Achievements</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="border hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="group-hover:scale-110 transition-transform duration-300">{cert.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                      </CardTitle>
                    </div>
                    {cert.link && (
                      <Link
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-primary"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Issued by: {cert.issuer}</p>
                    {cert.link && (
                      <Link
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        View Certificate
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="group-hover:scale-110 transition-transform duration-300">{achievement.icon}</div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Extracurricular Activities</h3>
            <Card className="border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Skills Developed Through Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {activities.map((activity, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors duration-300 cursor-default"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <strong>Volunteering:</strong> Leadership, Public Speaking, Mentoring, Event Planning
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Work-Study:</strong> Time Management, Problem Solving, Multitasking
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
