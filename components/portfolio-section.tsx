import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function PortfolioSection() {
  const projects = [
    {
      title: "Studio user research and analysis",
      description:
        "In ultricies viverra sed at hendrerit drogon nunc scelerisque nisl pellentesque et dignissim at aenean tempor adipiscing eget mi diam at tempus.",
      tag: "UI/UX Design",
      logo: "/images/studio-logo.svg",
      bgColor: "bg-[#6366F1]",
      illustration: "/images/studio-workspace.svg",
    },
    {
      title: "Venture Workspace web app redesign",
      description:
        "In ultricies viverra sed at hendrerit drogon nunc scelerisque nisl pellentesque et dignissim at aenean tempor adipiscing eget mi diam at tempus.",
      tag: "UI/UX Design",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#2F81F7]",
      illustration: "/images/venture-workspace.svg",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Dê uma olhada nos meus <br />
            <span className="bg-[#FFC224] text-background px-3 py-1 inline-block">projetos</span>
          </h2>
        </div>

        <div className="space-y-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 bg-background border-[3px] border-border rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_var(--color-primary)] transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-center bg-background">
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src={project.logo || "/placeholder.svg"}
                    alt={`${project.title} logo`}
                    width={120}
                    height={32}
                    className="h-6 md:h-8 w-auto dark:invert"
                  />
                </div>

                <span className="inline-block bg-foreground text-background text-xs font-semibold px-4 py-1.5 rounded-full mb-6 w-fit">
                  {project.tag}
                </span>

                <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-10 text-foreground">
                  {project.title}
                </h3>

                <p className="text-base md:text-[18px] text-muted-foreground mb-8 leading-relaxed md:leading-7.5 font-medium">
                  {project.description}
                </p>

                <a
                  href="#"
                  className="flex items-center gap-2 font-semibold text-foreground hover:gap-3 transition-all text-sm md:text-base"
                >
                  Ver projeto completo
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className={`${project.bgColor} relative overflow-hidden min-h-62.5 md:min-h-125`}>
                <Image
                  src={project.illustration || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="bg-foreground text-background px-6 md:px-8 py-6 md:py-7 rounded-[12px] font-semibold transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Veja todos os meus projetos
          </Button>
        </div>
      </div>
    </section>
  )
}
