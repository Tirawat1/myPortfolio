import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import PageTransition from "./components/PageTransition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tirawat Pongpratisonthi - Portfolio",
  description:
    "Computer Science student and Full Stack Developer portfolio showcasing projects, skills, and experience",
  keywords: "developer, portfolio, full stack, react, next.js, web development, computer science, Tirawat",
  authors: [{ name: "Tirawat Pongpratisonthi" }],
  openGraph: {
    title: "Tirawat Pongpratisonthi - Portfolio",
    description: "Computer Science Student & Full Stack Developer Portfolio",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <PageTransition />
        {children}
      </body>
    </html>
  )
}
