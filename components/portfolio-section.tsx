import { ArrowRight, ExternalLink, Cpu, Wifi, Activity, Swords, MapPin, Gamepad2 } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { SiFlutter, SiDart } from "react-icons/si"
import { Button } from "@/components/ui/button"

export function PortfolioSection() {
  const projects = [
    {
      title: "Sistema IoT de Monitoramento de CO₂",
      subtitle: "ESP32-S3 + SCD-30 + Java MQTT + Dashboard Web",
      description:
        "Solução completa de IoT e telemetria para monitoramento ambiental em tempo real. O microcontrolador ESP32-S3 faz a leitura precisa de CO₂ e temperatura com o sensor SCD-30, transmitindo via protocolo MQTT para um ecossistema backend em Java distribuído (dois serviços independentes), que processa e alimenta um dashboard web interativo.",
      tags: ["IoT", "Java", "ESP32-S3", "MQTT", "SCD-30", "Dashboard Web"],
      bgColor: "bg-[#2F81F7]",
      type: "iot",
      repos: [
        { label: "Frontend Dashboard", url: "https://github.com/antune-ss/pi4-0102-g9-frontend" },
        { label: "Backend 1 (Java)", url: "https://github.com/antune-ss/pi4-0102-g9-backend-1" },
        { label: "Backend 2 (Java)", url: "https://github.com/antune-ss/pi4-0102-g9-backend-2" },
      ],
      primaryUrl: "https://github.com/antune-ss/pi4-0102-g9-frontend",
    },
    {
      title: "PIRPG (PUC Quest RPG)",
      subtitle: "Mobile Game RPG com Geolocalização",
      description:
        "Jogo RPG desenvolvido em Flutter e Dart integrando geolocalização em tempo real e personagens animados. Uma experiência imersiva de game development mobile que conecta a exploração no mundo real a batalhas e mecânicas clássicas de RPG.",
      tags: ["Flutter", "Dart", "Game Dev Mobile", "Geolocalização"],
      bgColor: "bg-[#FF6B7A]",
      type: "rpg",
      repos: [
        { label: "Repositório PUC-Quest-RPG", url: "https://github.com/antune-ss/PUC-Quest-RPG" },
      ],
      primaryUrl: "https://github.com/antune-ss/PUC-Quest-RPG",
    },
  ]

  return (
    <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Dê uma olhada nos meus <br />
            <span className="bg-[#FFC224] text-background px-3 py-1 inline-block mt-2">projetos</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Aplicações reais combinando sistemas distribuídos, IoT e backend resiliente.
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-12 bg-background border-4 border-border rounded-[32px] overflow-hidden shadow-[8px_8px_0px_0px_var(--color-border)] hover:shadow-[12px_12px_0px_0px_var(--color-primary)] transition-all duration-300"
            >
              {/* Lado Esquerdo: Informações Técnicas e Links */}
              <div className="md:col-span-7 p-6 md:p-10 lg:p-12 flex flex-col justify-between bg-background">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="inline-block bg-foreground text-background text-xs font-mono font-bold px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black mb-2 leading-tight text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm md:text-base font-semibold text-[#2F81F7] mb-4 font-mono">
                    {project.subtitle}
                  </p>

                  <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Lista de Repositórios GitHub */}
                  <div className="space-y-2 mb-8">
                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-bold block">
                      Repositórios do Projeto:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.repos.map((repo, repoIdx) => (
                        <a
                          key={repoIdx}
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-muted hover:bg-foreground hover:text-background text-foreground text-xs font-mono px-3 py-1.5 rounded-lg border-2 border-border transition-colors group/btn"
                        >
                          <FaGithub className="w-3.5 h-3.5" />
                          <span>{repo.label}</span>
                          <ExternalLink className="w-3 h-3 opacity-60 group-hover/btn:opacity-100" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <a
                    href={project.primaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-bold text-foreground hover:text-[#2F81F7] hover:gap-3 transition-all text-sm md:text-base"
                  >
                    <span>Acessar repositório principal no GitHub</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Lado Direito: Visual Temático Interativo */}
              <div className={`md:col-span-5 ${project.bgColor} p-6 md:p-8 flex items-center justify-center relative overflow-hidden min-h-75 md:min-h-full border-t-4 md:border-t-0 md:border-l-4 border-border`}>
                
                {project.type === "iot" ? (
                  /* Visual do Dashboard IoT */
                  <div className="w-full max-w-sm bg-card border-4 border-border rounded-2xl p-5 shadow-[6px_6px_0px_0px_var(--color-border)] font-mono text-card-foreground">
                    <div className="flex items-center justify-between border-b-2 border-border/30 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-[#2F81F7]" />
                        <span className="text-xs font-bold">ESP32-S3 • SCD-30</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-[#00D084]/20 border border-[#00D084] text-[#00D084] dark:text-[#00D084] px-2 py-0.5 rounded-full text-[10px] font-bold">
                        <span className="w-2 h-2 rounded-full bg-[#00D084] animate-pulse"></span>
                        MQTT LIVE
                      </div>
                    </div>

                    <div className="bg-muted p-4 rounded-xl border-2 border-border mb-3 text-center">
                      <span className="text-xs text-muted-foreground block mb-1">CONCENTRAÇÃO DE CO₂</span>
                      <div className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
                        428 <span className="text-base text-muted-foreground font-normal">PPM</span>
                      </div>
                      <span className="text-[11px] text-[#00D084] font-bold mt-1 inline-block">
                        ● Qualidade Excelente
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-muted p-2.5 rounded-lg border border-border">
                        <span className="text-muted-foreground block text-[10px]">TEMP</span>
                        <span className="font-bold">23.8 °C</span>
                      </div>
                      <div className="bg-muted p-2.5 rounded-lg border border-border">
                        <span className="text-muted-foreground block text-[10px]">UMIDADE</span>
                        <span className="font-bold">54 %</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-border/30 flex items-center justify-between text-[10px] text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Wifi className="w-3 h-3 text-[#2F81F7]" />
                        <span>Broker MQTT</span>
                      </div>
                      <span className="font-bold text-foreground">Java Backend</span>
                    </div>
                  </div>
                ) : (
                  /* Visual do Jogo PIRPG Mobile */
                  <div className="w-full max-w-sm bg-card border-4 border-border rounded-2xl p-5 shadow-[6px_6px_0px_0px_var(--color-border)] text-card-foreground">
                    <div className="flex items-center justify-between border-b-2 border-border/30 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <Swords className="w-5 h-5 text-[#FF4A60]" />
                        <span className="font-black text-sm tracking-wide">PIRPG</span>
                      </div>
                      <span className="text-xs bg-[#FFC224] text-foreground font-mono font-bold px-2 py-0.5 rounded-md border border-border">
                        MOBILE GAME
                      </span>
                    </div>

                    <div className="bg-muted p-4 rounded-xl border-2 border-border mb-4 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-muted-foreground">CAMPO:</span>
                        <span className="font-bold flex items-center gap-1 text-[#2F81F7]">
                          <MapPin className="w-3.5 h-3.5" /> PUC-CAMPINAS
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-[11px] font-mono">
                          <span>HP DO JOGADOR</span>
                          <span className="font-bold text-[#00D084]">100 / 100</span>
                        </div>
                        <div className="w-full h-2.5 bg-border/20 rounded-full overflow-hidden border border-border/30">
                          <div className="h-full bg-[#00D084] w-full"></div>
                        </div>
                      </div>

                      <div className="text-xs text-muted-foreground italic border-l-2 border-[#FF4A60] pl-2 pt-1">
                        &quot;Geolocalização, câmera dinâmica e combate em tempo real no campus.&quot;
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-[#02569B] text-white flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold border border-border shadow-[2px_2px_0px_0px_var(--color-border)]">
                        <SiFlutter className="w-3.5 h-3.5" />
                        <span>Flutter</span>
                      </div>
                      <div className="flex-1 bg-[#0175C2] text-white flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold border border-border shadow-[2px_2px_0px_0px_var(--color-border)]">
                        <SiDart className="w-3.5 h-3.5" />
                        <span>Dart</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

        {/* Botão para ver todos os repositórios */}
        <div className="flex justify-center">
          <a
            href="https://github.com/antune-ss?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 md:py-7 rounded-[12px] font-semibold transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-sm md:text-base shadow-[4px_4px_0px_0px_var(--color-primary)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 cursor-pointer">
              <FaGithub className="w-5 h-5" />
              <span>Ver todos os meus repositórios no GitHub</span>
              <ExternalLink className="w-4 h-4 opacity-70" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
