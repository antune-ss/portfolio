import { User, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-4 border-border rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-8px_8px_0px_0px_var(--color-border)]">
            <Image 
              src="/images/about-me.svg" 
              alt="Minha foto" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Quem está por trás desse <span className="bg-[#2F81F7] text-background px-3 py-1 inline-block">portfólio?</span>
            </h2>
            <p className="text-foreground text-base md:text-lg leading-relaxed">
              Sou desenvolvedor fullstack com experiência prática no desenvolvimento de aplicações web, APIs e automações. Atualmente atuo na SPX Express otimizando processos logísticos com Python e curso Bacharelado em Sistemas de Informação na PUC-Campinas.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-foreground rounded-[5px] shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Desenvolvimento Fullstack & Mobile</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Construção de interfaces modernas com React, Next.js e Flutter/Dart, aliadas à criação de back-ends, APIs REST e modelagem de banco de dados com Node.js, Express, MongoDB e Firebase.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-foreground rounded-[5px] shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Automação de Processos & Dados</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Implementação de scripts inteligentes em Python para automação de rotinas operacionais, análise de dados e otimização de fluxos no setor de logística.
                </p>
              </div>
            </div>
          </div>

          <a 
            href="https://linkedin.com/in/gustavoantunesss" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-lg py-5 px-8 md:py-5.5 md:px-10 text-base md:text-lg font-semibold h-auto w-full sm:w-auto">
              <User className="w-5 h-5" />
              Conectar no LinkedIn
              <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
