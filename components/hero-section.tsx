import { Mail, FolderOpen } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-[42px] leading-12.5 md:text-[72px] font-bold md:leading-21.25">
            Meu nome é <span className="bg-[#FF6B7A] text-background px-3 py-1 inline-block">Gustavo Antunes</span>, um
            <span className="bg-[#2F81F7] text-background px-3 py-1 inline-block"> Dev FullStack</span>
          </h1>

          <p className="text-muted-foreground text-[16px] md:text-[18px] font-medium leading-7 md:leading-7.5 max-w-xl">
            Desenvolvedor Fullstack com experiência prática no setor logístico, atuando na criação de aplicações web, automações de processos com Python e IA, além do desenvolvimento de interfaces com React e Flutter.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <a href="mailto:guantunes567@gmail.com" className="w-full sm:w-auto">
              <Button
                aria-label="Enviar e-mail"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-lg py-3 px-8 md:py-3.2 md:px-10 text-base md:text-lg font-semibold h-auto w-full cursor-pointer shadow-[4px_4px_0px_0px_var(--color-primary)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                <Mail className="w-5 h-5 mr-1" />
                Entre em contato
              </Button>
            </a>

            <a href="#projects" className="w-full sm:w-auto">
              <Button
                aria-label="Ver projetos"
                variant="outline"
                className="bg-background border-[3px] border-foreground hover:bg-muted rounded-lg py-3 px-8 md:py-3.2 md:px-10 text-base md:text-lg font-semibold h-auto w-full cursor-pointer shadow-[4px_4px_0px_0px_var(--color-border)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <FolderOpen className="w-5 h-5 mr-1" />
                Ver meus projetos
              </Button>
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-border rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_var(--color-border)]">
            <Image
              src="/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png"
              alt="Illustrated character avatar"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
