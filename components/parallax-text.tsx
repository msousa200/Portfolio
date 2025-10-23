"use client"

import { useEffect, useRef, useState } from "react"

interface ParallaxTextProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxText({ children, speed = 0.5, className = "" }: ParallaxTextProps) {
  const [offsetY, setOffsetY] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
      setOffsetY(scrollPercent * 100 * speed)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={elementRef} className={className}>
      <div style={{ transform: `translateY(${offsetY}px)`, transition: "transform 0.1s ease-out" }}>
        {children}
      </div>
    </div>
  )
}
