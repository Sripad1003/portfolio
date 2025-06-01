"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-foreground dark:bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Chilivery Sripad</h3>
            <p className="text-muted-foreground">Computer Science Undergraduate & AI/ML Enthusiast</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link
              href="https://www.linkedin.com/in/chilivery-sripad-326961286"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://github.com/Sripad1003"
              target="_blank"
              className="hover:text-muted-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link href="mailto:chiliverysripad8@gmail.com" className="hover:text-destructive transition-colors">
              <Mail className="h-6 w-6" />
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="bg-primary hover:bg-primary/90 p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-primary-foreground" />
          </button>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">&copy; {currentYear} Chilivery Sripad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
