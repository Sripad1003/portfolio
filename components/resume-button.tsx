"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResumeButtonProps {
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
}

export function ResumeButton({ className, variant = "default" }: ResumeButtonProps) {
  const handleDownloadResume = () => {
    try {
      // First try to open in new tab to check if PDF is accessible
      const newTab = window.open("/resume.pdf", "_blank")

      // If popup is blocked or fails, fall back to direct download
      setTimeout(() => {
        const link = document.createElement("a")
        link.href = "/resume.pdf"
        link.download = "Chilivery_Sripad_Resume.pdf"
        link.target = "_blank"
        link.rel = "noopener noreferrer"

        // Append to body, click, and remove
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }, 100)
    } catch (error) {
      console.error("Error downloading resume:", error)
      // Fallback: just open the PDF in a new tab
      window.open("/resume.pdf", "_blank")
    }
  }

  return (
    <Button onClick={handleDownloadResume} className={className} variant={variant}>
      <Download className="mr-2 h-4 w-4" /> Resume
    </Button>
  )
}
