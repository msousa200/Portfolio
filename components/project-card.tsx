"use client"

import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  technologies: string[]
  index: number
}

export function ProjectCard({ title, description, image, link, technologies, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => {
    setIsHovering(false)
    setMousePosition({ x: 0, y: 0 })
  }

  const getTransform = () => {
    if (!isHovering || !cardRef.current) return ""

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((mousePosition.y - centerY) / centerY) * -10
    const rotateY = ((mousePosition.x - centerX) / centerX) * 10

    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`overflow-hidden animate-on-scroll opacity-0 group relative transition-all duration-500 ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
      style={{
        transform: getTransform(),
        transition: isHovering ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
      }}
    >
      {/* Gradient overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb, 99, 102, 241), 0.1), transparent 50%)`,
        }}
      />

      {/* Shine effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"
        style={{
          background: `linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.1) 50%, transparent 80%)`,
          transform: isHovering ? "translateX(100%)" : "translateX(-100%)",
          transition: "transform 0.7s ease-in-out",
        }}
      />

      <div className="grid lg:grid-cols-5 gap-0">
        {/* Image - takes 3 columns on large screens */}
        <div className={`relative h-96 lg:h-[500px] lg:col-span-3 bg-muted flex items-center justify-center overflow-hidden ${index % 2 === 0 ? "" : "lg:order-2"}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:opacity-0 transition-opacity duration-500" />
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        {/* Content - takes 2 columns on large screens */}
        <div className={`p-8 lg:col-span-2 flex flex-col justify-between ${index % 2 === 0 ? "" : "lg:order-1"}`}>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, techIndex) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  style={{
                    animationDelay: `${techIndex * 50}ms`,
                  }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              asChild
              size="lg"
              className="group/btn relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <span className="relative z-10">Ver Projeto</span>
                <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
