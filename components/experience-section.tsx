import { FileText, GraduationCap, Sparkles, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ExperienceSection() {
  const experiences = [
    {
      period: "Out 2025 - Presente",
      title: "SPX Express (Pelo Espro)",
      role: "Jovem Aprendiz • Logística & Automação",
      description:
        "Atuação no setor logístico focando na criação de aplicações web, implementação de automações de processos utilizando Python e análise de dados para otimização de rotinas operacionais.",
      icon: "/images/shoppe.png",
      badgeBg: "bg-[#FF6B00]",
    },
    {
      period: "01/2025 - 12/2028 (Previsão)",
      title: "PUC-Campinas",
      role: "Bacharelado em Sistemas de Informação",
      description:
        "Formação acadêmica com foco em engenharia de software, estruturas de dados, banco de dados (SQL e NoSQL), desenvolvimento e arquitetura de sistemas.",
      lucideIcon: GraduationCap,
      badgeBg: "bg-[#2F81F7]",
    },
    {
      period: "Atualmente • Em Desenvolvimento",
      title: "Automação & IA com LLMs",
      role: "Projeto: LLM Resume Automation",
      description:
        "Estudo e desenvolvimento de agentes e rotinas inteligentes com Inteligência Artificial para automatizar a busca, análise e criação/adaptação personalizada de candidaturas e vagas de emprego utilizando Python e LLMs.",
      lucideIcon: Sparkles,
      badgeBg: "bg-[#00D084]",
    },
  ]

  return (
    <section id="experience" className="bg-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-background pt-0 md:pt-12 md:sticky md:top-24 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              Dê uma olhada na minha <span className="bg-[#6366F1] text-foreground px-3 py-1 inline-block">experiência</span>
            </h2>
            <p className="text-muted-foreground mb-8 md:mb-10 leading-relaxed text-base md:text-lg max-w-md">
              Minha trajetória une vivência prática no mercado logístico, formação acadêmica sólida e constante desenvolvimento de soluções.
            </p>
            <a 
              href="https://linkedin.com/in/gustavoantunesss" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto"
            >
              <Button variant="secondary" className="py-5 px-8 md:py-5.5 md:px-10 text-base md:text-lg font-semibold h-auto w-full sm:w-auto cursor-pointer">
                <FileText className="w-5 h-5 mr-2" />
                Ver perfil no LinkedIn
              </Button>
            </a>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const LucideIcon = exp.lucideIcon
              return (
                <div key={index} className="bg-background border-4 border-border rounded-3xl min-h-55 md:min-h-60 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                    <div className="text-base md:text-[20px] leading-tight font-bold text-foreground">
                      {exp.period}
                    </div>
                    <div className={`${exp.badgeBg} w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2 border-border shadow-[4px_4px_0px_0px_var(--color-primary)] overflow-hidden shrink-0`}>
                      {exp.icon ? (
                        <Image
                          src={exp.icon}
                          alt={exp.title}
                          width={56}
                          height={56}
                          className="w-full h-full object-cover dark:invert"
                        />
                      ) : LucideIcon ? (
                        <LucideIcon className="w-6 h-6 text-white" />
                      ) : (
                        <Briefcase className="w-6 h-6 text-white" />
                      )}
                    </div>
                  </div>

                  <div className="border-t-[3px] border-border mb-4 md:mb-6"></div>

                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <h3 className="text-xl md:text-[26px] leading-tight font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-xs md:text-sm font-semibold text-[#2F81F7] mb-3">
                      {exp.role}
                    </p>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
