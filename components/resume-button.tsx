"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResumeButtonProps {
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
}

export function ResumeButton({ className, variant = "default" }: ResumeButtonProps) {
  const handleDownloadResume = () => {
    // Link to your actual resume file
    window.open("/resume.pdf", "_blank")
  }

  return (
    <Button onClick={handleDownloadResume} className={className} variant={variant}>
      <Download className="mr-2 h-4 w-4" /> Resume
    </Button>
  )
}
