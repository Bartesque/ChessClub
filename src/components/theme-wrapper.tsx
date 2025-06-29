"use client"

import { ThemeProvider } from "@/providers/theme-provider"

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}