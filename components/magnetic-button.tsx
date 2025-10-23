"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: "default" | "outline" | "ghost" | "destructive" | "secondary" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  variant = "default",
  size = "default",
  asChild = false,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    // Limit the movement
    const maxDistance = 15
    const distance = Math.sqrt(x * x + y * y)
    
    if (distance < maxDistance * 2) {
      const limitedX = (x / distance) * Math.min(distance, maxDistance)
      const limitedY = (y / distance) * Math.min(distance, maxDistance)
      setPosition({ x: limitedX, y: limitedY })
    }
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <Button
      ref={buttonRef}
      variant={variant}
      size={size}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      asChild={asChild}
    >
      {children}
    </Button>
  )
}
