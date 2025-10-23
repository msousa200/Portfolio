"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Code2, Database, Sparkles, Cpu, Rocket, Users } from "lucide-react"
import { ParallaxText } from "@/components/parallax-text"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in-up")
                el.classList.remove("opacity-0")
              }, index * 150)
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
    <section id="about" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4 animate-on-scroll opacity-0">
            <ParallaxText speed={-0.3}>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Sobre Mim
              </h2>
            </ParallaxText>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Programador apaixonado por criar soluções inovadoras que combinam tecnologia de ponta com experiências
              excepcionais
            </p>
          </div>

          {/* Bio */}
          <Card className="p-8 animate-on-scroll opacity-0">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Sou um <strong>programador Full-Stack</strong> com formação em Programação Web pela ETIC_Algarve e
                experiência em criar aplicações web modernas e inteligentes.
              </p>
              <p>
                Especializado em <strong>Next.js, React, Python e Django</strong>, tenho uma paixão especial por{" "}
                <strong>Inteligência Artificial</strong> e como ela pode transformar a experiência do utilizador. Os meus
                projetos demonstram a integração de tecnologias de IA de ponta, como modelos LLaMA e Groq API, para
                criar soluções práticas e inovadoras.
              </p>
              <p>
                Com forte capacidade de resolução de problemas, trabalho em equipa e desejo constante de aprender, procuro
                sempre novos desafios que me permitam expandir horizontes e entregar resultados com excelência. Sou
                ambicioso, persistente e focado em criar experiências digitais que realmente fazem a diferença.
              </p>
            </div>
          </Card>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center space-y-4 animate-on-scroll opacity-0 glass hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 transition-all duration-500 group cursor-default relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Code2 className="h-6 w-6 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                </div>
                <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">Programação Full-Stack</h3>
                <p className="text-sm text-muted-foreground">Next.js, React, TypeScript, Python, Django, FastAPI</p>
              </div>
            </Card>

            <Card className="p-6 text-center space-y-4 animate-on-scroll opacity-0 glass hover:shadow-2xl hover:shadow-accent/20 hover:scale-105 transition-all duration-500 group cursor-default relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Sparkles className="h-6 w-6 text-accent group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                </div>
                <h3 className="font-semibold group-hover:text-accent transition-colors duration-300">Integração de IA</h3>
                <p className="text-sm text-muted-foreground">Groq API, LLaMA 3.3, AI SDK, Modelos Generativos</p>
              </div>
            </Card>

            <Card className="p-6 text-center space-y-4 animate-on-scroll opacity-0 glass hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 transition-all duration-500 group cursor-default relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Rocket className="h-6 w-6 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                </div>
                <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">Implementação & CI/CD</h3>
                <p className="text-sm text-muted-foreground">Vercel, Render, GitHub Actions, Docker</p>
              </div>
            </Card>

            <Card className="p-6 text-center space-y-4 animate-on-scroll opacity-0 glass hover:shadow-2xl hover:shadow-accent/20 hover:scale-105 transition-all duration-500 group cursor-default relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Users className="h-6 w-6 text-accent group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                </div>
                <h3 className="font-semibold group-hover:text-accent transition-colors duration-300">Trabalho em Equipa</h3>
                <p className="text-sm text-muted-foreground">Comunicação eficaz, colaboração, resolução de problemas</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
