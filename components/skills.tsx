import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const Skills = () => {
  // Reorder the skill categories to put AI/ML related skills first and web development last
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
    },
    {
      category: "Languages",
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 90 },
        { name: "C", level: 85 },
        { name: "C++", level: 80 },
      ],
    },
    {
      category: "AI/ML & Tools",
      skills: [
        { name: "scikit-learn", level: 75 },
        { name: "TensorFlow", level: 65 },
        { name: "Flask", level: 75 },
        { name: "Git", level: 90 },
        { name: "Postman", level: 85 },
      ],
    },
    {
      category: "Databases & Cloud",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 75 },
        { name: "Render", level: 70 },
        { name: "GitHub Pages", level: 85 },
      ],
    },
    {
      category: "Web Development",
      skills: [
        { name: "React.js", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "WebRTC", level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 section-heading">Technical Skills</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            I have experience with a wide range of technologies and tools, allowing me to build comprehensive solutions
            for various problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-primary">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
