import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "next-themes"

import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"

import "@/app/globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex h-dvh flex-1 flex-col overflow-hidden antialiased`}
      >
        <ThemeProvider attribute="class" enableSystem>
          <TooltipProvider>
            <>{children}</>
            <Toaster closeButton richColors />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
