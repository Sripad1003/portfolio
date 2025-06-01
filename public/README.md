# Public Directory Structure

This directory contains all the static assets for your portfolio website.

## Directory Structure

\`\`\`
public/
├── resume.pdf              # Your resume PDF file
├── profile.jpg             # Your profile photo
└── projects/               # Project screenshots
    ├── viberoom.jpg        # VibeRoom project screenshot
    ├── recipe-realm.jpg    # Recipe Realm project screenshot
    └── nmcg-chatbot.jpg    # NMCG Chatbot project screenshot
\`\`\`

## Instructions

1. Replace `resume.pdf` with your actual resume file
2. Replace `profile.jpg` with your actual profile photo
3. Add your project screenshots to the `projects/` directory
\`\`\`

Finally, let's update the hero section to use your actual profile photo:

```typescriptreact file="components/hero.tsx"
[v0-no-op-code-block-prefix]import { ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Hero = () => {
  return (
    <section
      id="home"
      className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 to-secondary/50 dark:from-primary/5 dark:to-background"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Chilivery Sripad</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Computer Science Undergraduate & Full-Stack Developer
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg">
            Passionate about building scalable solutions with expertise in full-stack development, real-time web
            applications, and AI/ML.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          <div className="flex mt-8 space-x-4">
            <Link
              href="https://www.linkedin.com/in/chilivery-sripad"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://github.com/chiliverysripad"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:chiliverysripad8@gmail.com"
              className="text-muted-foreground hover:text-destructive transition-colors"
            >
              <Mail className="h-6 w-6" />
            </Link>
            <Link href="tel:+917569793280" className="text-muted-foreground hover:text-green-500 transition-colors">
              <Phone className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
            <img
              src="/profile.jpg"
              alt="Chilivery Sripad"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
