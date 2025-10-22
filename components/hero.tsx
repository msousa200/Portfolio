"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Information */}
          <div className="space-y-8">
            {/* Name and Title */}
            <div className="space-y-4 opacity-0 animate-fade-in-up [animation-delay:200ms]">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance">Miguel Sousa</h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
                Programador Full-Stack & Entusiasta de IA
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 opacity-0 animate-fade-in-up [animation-delay:400ms]">
              {["Next.js", "Python", "Integração IA", "Django", "TypeScript", "React"].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-default"
                  style={{ animationDelay: `${400 + index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed opacity-0 animate-fade-in-up [animation-delay:600ms]">
              A transformar ideias em experiências digitais inteligentes que surpreendem e inspiram
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up [animation-delay:800ms]">
              <Button size="lg" onClick={scrollToProjects} className="text-base">
                Ver Projetos
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("contact")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
                className="text-base"
              >
                Entrar em Contacto
              </Button>
            </div>
          </div>

          {/* Right side - Large Profile Image */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in-up [animation-delay:400ms]">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl hover:shadow-primary/20 hover:scale-105 transition-all duration-500">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-22%20at%2015.04.28-O7WIQiillFLshNoOGV1E6qni7f3RCd.jpeg"
                alt="Miguel Sousa"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in [animation-delay:1000ms]">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
