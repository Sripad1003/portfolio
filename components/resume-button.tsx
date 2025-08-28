"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResumeButtonProps {
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
}

export function ResumeButton({ className, variant = "default" }: ResumeButtonProps) {
  const handleDownloadResume = async () => {
    try {
      // First, let's try to fetch the PDF to ensure it exists and is valid
      const response = await fetch("/resume.pdf")

      if (!response.ok) {
        throw new Error("Resume file not found")
      }

      // Get the blob data
      const blob = await response.blob()

      // Create a blob URL
      const blobUrl = window.URL.createObjectURL(blob)

      // Create download link
      const link = document.createElement("a")
      link.href = blobUrl
      link.download = "Sripad_Chilivery_Resume.pdf"

      // Append to body, click, and clean up
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Clean up the blob URL
      window.URL.revokeObjectURL(blobUrl)
    } catch (error) {
      console.error("Error downloading resume:", error)

      // Fallback: try direct download
      try {
        const link = document.createElement("a")
        link.href = "/resume.pdf"
        link.download = "Sripad_Chilivery_Resume.pdf"
        link.target = "_blank"
        link.rel = "noopener noreferrer"

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } catch (fallbackError) {
        console.error("Fallback download failed:", fallbackError)
        // Last resort: open in new tab
        window.open("/resume.pdf", "_blank")
      }
    }
  }

  return (
    <Button onClick={handleDownloadResume} className={className} variant={variant}>
      <Download className="mr-2 h-4 w-4" /> Resume
    </Button>
  )
}
