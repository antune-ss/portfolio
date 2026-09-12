import { HeroSection } from "@/components/hero-section"
import { LogoMarquee } from "@/components/logo-marquee"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ExperienceSection } from "@/components/experience-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background mt-20">
      <HeroSection />
      <LogoMarquee />
      <AboutSection />
      <PortfolioSection />
      <ExperienceSection />
      <ServicesSection />
    </main>
  )
}
