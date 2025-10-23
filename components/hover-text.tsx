"use client"

import { useRef, useState, useEffect } from "react"

interface HoverTextProps {
  text: string
  className?: string
}

export function HoverText({ text, className = "" }: HoverTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <span ref={containerRef} className={`inline-block relative ${className}`}>
      {/* Spotlight effect */}
      {isHovering && (
        <span
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            width: "200px",
            height: "200px",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
            opacity: 0.6,
            filter: "blur(20px)",
            zIndex: 1,
          }}
        />
      )}
      
      {/* Text with mask to reveal spotlight */}
      <span className="relative z-10 inline-block bg-gradient-to-r from-muted-foreground to-muted-foreground bg-clip-text text-transparent">
        {text}
      </span>
      
      {/* Illuminated text overlay */}
      <span
        className="absolute inset-0 z-20 inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
        style={{
          maskImage: isHovering
            ? `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
            : "none",
          WebkitMaskImage: isHovering
            ? `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
            : "none",
        }}
      >
        {text}
      </span>
    </span>
  )
}
