import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
