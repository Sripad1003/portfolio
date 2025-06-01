"use client"

// This is a simplified version of the toast hook
import { toast as sonnerToast } from "sonner"

type ToastProps = {
  title: string
  description?: string
  variant?: "default" | "destructive"
}

export function toast({ title, description, variant = "default" }: ToastProps) {
  return sonnerToast[variant === "destructive" ? "error" : "success"](title, {
    description,
  })
}

export function useToast() {
  return {
    toast,
  }
}
