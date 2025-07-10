"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface SectionTransitionProps {
  children: React.ReactNode
  className?: string
}

export default function SectionTransition({ children, className = "" }: SectionTransitionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    const element = document.querySelector(`.${className.split(" ")[0]}`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [className])

  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
      } ${className}`}
    >
      {children}
    </div>
  )
}
