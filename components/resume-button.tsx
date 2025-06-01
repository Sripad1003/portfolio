"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResumeButtonProps {
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
}

export function ResumeButton({ className, variant = "default" }: ResumeButtonProps) {
  const handleDownloadResume = () => {
    // Create an anchor element
    const link = document.createElement("a")

    // Set the href to the resume file
    link.href = "/resume.pdf"

    // Set the download attribute to force download
    link.download = "Chilivery_Sripad_Resume.pdf"

    // Append to the document
    document.body.appendChild(link)

    // Trigger the click event
    link.click()

    // Clean up
    document.body.removeChild(link)
  }

  return (
    <Button onClick={handleDownloadResume} className={className} variant={variant}>
      <Download className="mr-2 h-4 w-4" /> Resume
    </Button>
  )
}
