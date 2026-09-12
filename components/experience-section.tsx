import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ExperienceSection() {
  const experiences = [
    {
      period: "Out 2025 - Atualmente",
      title: "SPX Express - Espro",
      description:
        "Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.",
      icon: "/images/shoppe.png",
    },
  ]

  return (
    <section className="bg-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-background pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              Dê uma olhada na minha <span className="bg-[#6366F1] text-foreground px-3 py-1 inline-block">expêriencia</span>
            </h2>
            <p className="text-muted-foreground mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              Eu pellentesque arcu ornare velit faucibus egestas gravida sed in purus enim molestie gravida imperdiet
              integer.
            </p>
            <Button variant="secondary" className="py-5 px-8 md:py-5.5 md:px-15.5 text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-60">
              <FileText className="w-5 h-5" />
              Veja meu currículo completo
            </Button>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-background border-4 border-border rounded-3xl min-h-55 md:min-h-60">
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-base md:text-[22px] leading-tight md:leading-8.5 font-bold text-foreground">
                    {exp.period}
                  </div>
                  <div className="bg-[#FF6B00] w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2 border-border shadow-[4px_4px_0px_0px_var(--color-primary)] overflow-hidden shrink-0">
                    <Image
                      src={exp.icon || "/placeholder.svg"}
                      alt={exp.title}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover dark:invert"
                    />
                  </div>
                </div>

                <div className="border-t-[3px] border-border mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[28px] leading-tight md:leading-10 font-bold text-foreground mb-2 md:mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-[20px] leading-relaxed md:leading-8">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
