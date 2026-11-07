"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    title: "frontend",
    color: "bg-[#FFC224]",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "HTML5 & CSS3" },
    ],
  },
  {
    title: "backend",
    color: "bg-[#2F81F7]",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Python" },
      { name: "RESTful APIs" },
      { name: "Java" },
      { name: "C" },
    ],
  },
  {
    title: "database",
    color: "bg-[#00D084]",
    skills: [
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "Firebase" },
      { name: "Modelagem de Dados" },
    ],
  },
  {
    title: "general",
    color: "bg-[#FF4A60]",
    skills: [
      { name: "Automações em Python" },
      { name: "Flutter & Dart" },
      { name: "Análise de Dados" },
      { name: "LLMs & IA Generativa" },
      { name: "Git & Git Flow" },
    ],
  },
]

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTab = () => {
    setActiveIndex((prev) => (prev + 1) % categories.length)
  }

  const prevTab = () => {
    setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length)
  }

  return (
    <section id="tools" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-4xl md:text-[52px] md:leading-15 font-bold mb-6">
              Minhas principais <br className="hidden lg:block" />
              <span className="bg-[#FF4A60] text-foreground px-3 py-1 inline-block mt-2">tecnologias</span>
            </h2>

            <p className="text-muted-foreground text-base md:text-lg font-medium leading-relaxed mb-10 max-w-md">
              Linguagens, frameworks e ferramentas que utilizo no meu dia-a-dia.
            </p>

            <div className="flex items-center gap-6">
              <button onClick={prevTab} className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-4 border-border rounded-full bg-card hover:bg-[#FFC224] hover:-translate-y-1 shadow-[4px_4px_0px_0px_var(--color-border)] hover:shadow-none transition-all active:translate-y-0 cursor-pointer">
                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <span className="font-bold text-lg md:text-xl font-mono bg-foreground text-background px-4 py-2 rounded-xl border-4 border-border">
                {activeIndex + 1} / {categories.length}
              </span>
              <button onClick={nextTab} className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-4 border-border rounded-full bg-card hover:bg-[#FFC224] hover:-translate-y-1 shadow-[4px_4px_0px_0px_var(--color-border)] hover:shadow-none transition-all active:translate-y-0 cursor-pointer">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

          </div>
          
          <div className="relative w-full max-w-100 md:max-w-150 h-112.5 mx-auto md:ml-auto md:mr-0 mt-8 md:mt-0">
            {categories.map((categorie, index) => {
              
              let positionClasses = "opacity-0 pointer-events-none translate-x-16 translate-y-16 scale-90 z-0"
              if (index === activeIndex) {
                positionClasses = "z-30 translate-x-0 translate-y-0 scale-100 opacity-100 animate-float"
              } else if (index === (activeIndex + 1) % categories.length) {
                positionClasses = "z-20 translate-x-6 translate-y-6 scale-[0.98] opacity-80"
              } else if (index === (activeIndex + 2) % categories.length) {
                positionClasses = "z-10 translate-x-12 translate-y-12 scale-[0.96] opacity-40"
              }

              return (
                <Card 
                  key={index} 
                  className={`absolute top-0 left-0 right-0 mx-auto pt-0 w-full h-95 bg-card border-4 border-border flex flex-col font-mono overflow-hidden transition-all duration-500 ease-out ${positionClasses}`}
                >
                  {/* Cabeçalho do Terminal */}
                  <div className={`border-b-4 border-border p-3 flex items-center justify-between shrink-0 ${categorie.color}`}>
                    <div className="flex gap-2">
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-border bg-[#FF4A60]"></div>
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-border bg-[#FFC224]"></div>
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-border bg-[#00D084]"></div>
                    </div>
                    <span className="font-bold text-sm tracking-widest text-foreground lowercase">
                      bash - {categorie.title.toLowerCase()}
                    </span>
                    <div className="w-12"></div>
                  </div>
                  
                  {/* Corpo do Terminal */}
                  <CardContent className="p-6 flex-1 flex flex-col overflow-hidden text-foreground">
                    <div className="mb-4 text-sm md:text-base flex gap-3">
                      <span className="text-muted-foreground font-bold">$</span>
                      <span className="font-bold">cat ./skills.txt</span>
                    </div>
                    
                    <div className="flex flex-col gap-2 overflow-y-auto overflow-x-hidden pl-5 flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
                      {categorie.skills.map(skill => {
                        const formattedSkill = skill.name
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "") // Remove acentos para formato terminal unix
                          .toUpperCase()
                          .replace(/\s+/g, "_") // Substitui todos os espaços por _

                        return (
                          <div key={skill.name} className="flex items-center gap-3 cursor-default opacity-80 hover:opacity-100 hover:translate-x-1 transition-all">
                            <span className="font-bold tracking-widest text-sm md:text-base">
                              {formattedSkill}/
                            </span>
                          </div>
                        )
                      })}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t-2 border-border/20 flex items-center gap-3 shrink-0 text-sm md:text-base">
                      <span className="text-muted-foreground font-bold">$</span>
                      <a href="mailto:guantunes567@gmail.com" className="font-bold hover:text-[#FF4A60] hover:underline transition-colors flex items-center gap-2">
                        ./contact_me.sh
                      </a>
                      <div className="animate-pulse w-3 h-5 bg-foreground"></div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
