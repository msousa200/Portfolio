"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { ParallaxText } from "@/components/parallax-text"

export function Contact() {
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
    <section id="contact" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4 animate-on-scroll opacity-0">
            <ParallaxText speed={-0.3}>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Vamos Trabalhar Juntos
              </h2>
            </ParallaxText>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Estou sempre aberto a novos desafios e oportunidades. Entre em contacto para discutirmos o seu próximo
              projeto!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <Card className="p-8 space-y-6 animate-on-scroll opacity-0 glass hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Informações de Contacto</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <Mail className="h-5 w-5 text-primary mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">
                      msousa200@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 space-y-6 animate-on-scroll opacity-0 glass hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Redes Sociais</h3>

              <div className="space-y-4">
                <Button asChild variant="outline" className="w-full justify-start h-auto py-4 bg-transparent hover:bg-primary/10 hover:scale-105 transition-all duration-300 group">
                  <a
                    href="https://github.com/msousa200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <Github className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    <div className="text-left">
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm text-muted-foreground">@msousa200</p>
                    </div>
                  </a>
                </Button>

                <Button asChild variant="outline" className="w-full justify-start h-auto py-4 bg-transparent hover:bg-primary/10 hover:scale-105 transition-all duration-300 group">
                  <a
                    href="https://www.linkedin.com/in/miguel-sousa-264629134/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <Linkedin className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    <div className="text-left">
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">Miguel Sousa</p>
                    </div>
                  </a>
                </Button>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Disponível para oportunidades de freelance e tempo inteiro
                </p>
              </div>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center pt-8 animate-on-scroll opacity-0">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Miguel Sousa. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
