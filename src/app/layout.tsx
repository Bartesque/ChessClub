import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeWrapper } from "@/components/theme-wrapper"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Crown } from "lucide-react"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Agoura Chess Social",
  description: "Chess club for players of all levels",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeWrapper>
          <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-[0_1px_2px_rgba(0,0,0,0.05)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
            <div className="container flex h-14 items-center justify-between px-4">
              <Link href="/" className="flex items-center gap-2 font-semibold text-sky-700 dark:text-sky-400 hover:text-sky-500 dark:hover:text-sky-300">
                <Crown className="h-5 w-5" />
                <span>Agoura Chess Social</span>
              </Link>
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <Button variant="ghost" asChild>
                    <Link href="/learn-chess">Learn Chess</Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link href="/course">Course</Link>
                  </Button>
                </div>
                <ThemeToggle />
              </div>
            </div>
          </header>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  )
}
