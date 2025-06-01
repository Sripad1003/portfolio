"use client"

import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

const Hero = () => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = "Computer Science Undergraduate & AI/ML Enthusiast"

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <section
      id="home"
      className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-secondary/30 to-primary/5 dark:from-primary/5 dark:to-background overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-ping delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-left">
            Hi, I'm{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-gradient">
              Chilivery Sripad
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 h-8 animate-slide-in-left delay-300">
            {displayText}
            <span className="animate-blink">|</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg animate-slide-in-left delay-500">
            Passionate about building intelligent solutions with expertise in AI/ML, problem solving, and full-stack
            development.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-in-left delay-700">
            <Button asChild className="hover:scale-105 transition-transform duration-300">
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild className="hover:scale-105 transition-transform duration-300">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          <div className="flex mt-8 space-x-4 animate-slide-in-left delay-1000">
            <Link
              href="https://www.linkedin.com/in/chilivery-sripad-326961286"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://github.com/Sripad1003"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:chiliverysripad8@gmail.com"
              className="text-muted-foreground hover:text-destructive transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Mail className="h-6 w-6" />
            </Link>
            <Link
              href="tel:+917569793280"
              className="text-muted-foreground hover:text-green-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Phone className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center animate-slide-in-right">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
            <img
              src="/profile.jpg"
              alt="Chilivery Sripad"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
