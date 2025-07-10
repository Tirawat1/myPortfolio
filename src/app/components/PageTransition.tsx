"use client"

import { useEffect, useState } from "react"
import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
  delay?: number
}

export default function PageTransition({ children, delay = 0.2 }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
      }`}
    >
      {children}
    </div>
  )
}
