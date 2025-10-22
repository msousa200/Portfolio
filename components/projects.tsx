"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Gerador de Receitas com IA",
    description:
      "Aplicação web full-stack que utiliza inteligência artificial para gerar receitas culinárias personalizadas baseadas em ingredientes disponíveis. O projeto combina tecnologias modernas de frontend e backend para criar uma experiência de utilizador intuitiva e eficiente.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecr%C3%A3%202025-10-22%20150843-BS9QPdz8QtArwSPRFKyqZcbvlbfuAg.png",
    link: "https://gerador-receitas-iota.vercel.app/",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "TailwindCSS",
      "DaisyUI",
      "Groq AI API",
      "Supabase",
      "Vercel",
    ],
  },
  {
    title: "MyTrip - Gerador Inteligente de Roteiros",
    description:
      "MyTrip é uma aplicação web full-stack que utiliza Inteligência Artificial para gerar roteiros de viagem personalizados por toda a Europa. Desenvolvido com Next.js 15 (frontend) e FastAPI (backend), o projeto integra o modelo LLaMA 3.3 70B via Groq API para criar itinerários detalhados, otimizados por orçamento e interesses do utilizador.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecr%C3%A3%202025-10-22%20150948-ZRBzPDxELQ2LeBQw2UkDEmmyEDeeEK.png",
    link: "https://my-script.vercel.app/",
    technologies: [
      "Next.js 15.5",
      "React 19",
      "TypeScript",
      "TailwindCSS",
      "FastAPI",
      "Python 3.11+",
      "Groq API",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "LinkCurto - Encurtador de URLs",
    description:
      "Encurtador de URLs moderno e seguro desenvolvido com React, Node.js e Tailwind CSS, hospedado no Vercel. Este projeto full-stack demonstra a implementação de um sistema completo de encurtamento de URLs com foco em segurança, performance e experiência do usuário. A aplicação permite transformar URLs longas em links curtos e memoráveis, gerando automaticamente QR codes para fácil compartilhamento.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecr%C3%A3%202025-10-22%20151026-6qWKyzqPRu7SWtWWeyxDVh55ZfV4A6.png",
    link: "https://encurtador-links-eosin.vercel.app/",
    technologies: ["React", "Node.js", "JavaScript ES6+", "TailwindCSS", "REST API", "Vercel", "QR Code"],
  },
  {
    title: "Emotion Dance Academy",
    description:
      "Projeto desenvolvido para a Emotion Dance Academy, uma academia de dança localizada em Armação de Pêra, no Algarve, fundada em 2023. Este website institucional foi criado como parte de um estágio curricular da ETIC_Algarve, envolvendo as áreas de Programação Web e Design de Comunicação e Multimédia.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecr%C3%A3%202025-10-22%20151347-EfK7KowNPVPyP7TREdTYxwYUzFSMoO.png",
    link: "https://emotiondanceacademy.pt",
    technologies: ["Next.js 14", "TypeScript", "TailwindCSS", "MySQL", "Lucide React", "shadcn/ui"],
  },
]

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in-up")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold">Projetos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Uma seleção dos meus trabalhos mais recentes, demonstrando competências em programação full-stack e
              integração de IA
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden animate-on-scroll opacity-0 hover:shadow-xl transition-shadow"
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image - takes 3 columns on large screens */}
                  <div className="relative h-96 lg:h-[500px] lg:col-span-3 bg-muted flex items-center justify-center overflow-hidden group">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content - takes 2 columns on large screens */}
                  <div className="p-8 lg:col-span-2 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                      <Button asChild size="lg">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center"
                        >
                          Ver Projeto
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
