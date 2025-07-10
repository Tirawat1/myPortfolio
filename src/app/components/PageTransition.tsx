"use client"

import { useEffect, useState } from "react"

export default function PageTransition() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <div className="relative">
          {/* Animated Logo */}
          <div className="w-20 h-20 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">T</span>
            </div>
          </div>

          {/* Loading Animation */}
          <div className="flex space-x-2 justify-center mb-4">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-200"></div>
          </div>

          <p className="text-gray-400 text-lg">Loading Portfolio...</p>
        </div>
      </div>
    </div>
  )
}
