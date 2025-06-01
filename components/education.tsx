import { GraduationCap, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Education = () => {
  const educationData = [
    {
      institution: "Keshav Memorial Institute of Technology, Hyderabad",
      degree: "B.Tech in Information Technology",
      period: "2022 – 2026",
      grade: "CGPA: 8.8/10",
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Intermediate, Telangana State Board",
      period: "2020 – 2022",
      grade: "94.7%",
    },
    {
      institution: "Greenwood High School, Warangal",
      degree: "CBSE Board",
      period: "2019 – 2021",
      grade: "81.6%",
    },
  ]

  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 section-heading">Education</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <Card key={index} className="mb-6 border-l-4 border-l-primary">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl font-bold flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                    {item.institution}
                  </CardTitle>
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    {item.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p>{item.degree}</p>
                <p className="text-muted-foreground font-medium">{item.grade}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
