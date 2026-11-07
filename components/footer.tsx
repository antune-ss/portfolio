"use client"

import { Mail, Phone, MapPin, ArrowUp } from "lucide-react"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-foreground text-background pt-16 pb-12 border-t-4 border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
            
            {/* Coluna 1: Perfil & Redes */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FFC224] text-foreground font-black text-lg flex items-center justify-center rounded-xl border-2 border-background shadow-[3px_3px_0px_0px_var(--color-primary)]">
                  GA
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-background">Gustavo Antunes</h3>
                  <p className="text-xs text-background/70 font-mono">Dev Fullstack • Louveira, SP</p>
                </div>
              </div>
              
              <p className="text-background/80 text-sm leading-relaxed">
                Desenvolvedor com foco em soluções web, mobile, automações com Python e IA generativa para resolver problemas reais.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/antune-ss"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub de Gustavo Antunes"
                  className="w-10 h-10 bg-background/10 hover:bg-[#2F81F7] text-background hover:text-white border-2 border-background/20 hover:border-background rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/gustavoantunesss"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Gustavo Antunes"
                  className="w-10 h-10 bg-background/10 hover:bg-[#0A66C2] text-background hover:text-white border-2 border-background/20 hover:border-background rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/5519999015635"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp de Gustavo Antunes"
                  className="w-10 h-10 bg-background/10 hover:bg-[#25D366] text-background hover:text-white border-2 border-background/20 hover:border-background rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Coluna 2: Navegação rápida */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#FFC224] font-mono tracking-wider">
                // NAVEGAÇÃO
              </h4>
              <ul className="space-y-2.5 text-sm text-background/80">
                <li>
                  <a href="#home" className="hover:text-background hover:translate-x-1 inline-block transition-all">
                    → Início
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-background hover:translate-x-1 inline-block transition-all">
                    → Sobre Mim
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-background hover:translate-x-1 inline-block transition-all">
                    → Experiência
                  </a>
                </li>
                <li>
                  <a href="#tools" className="hover:text-background hover:translate-x-1 inline-block transition-all">
                    → Tecnologias
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-background hover:translate-x-1 inline-block transition-all">
                    → Projetos
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Especialidades */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#FF6B7A] font-mono tracking-wider">
                // STACKS & FOCO
              </h4>
              <ul className="space-y-2.5 text-sm text-background/80 font-mono">
                <li>• Web: React & Next.js</li>
                <li>• Backend: Node.js & Python</li>
                <li>• Mobile: Flutter & Dart</li>
                <li>• Banco: MongoDB & MySQL</li>
                <li>• Automação: Python & LLMs</li>
                <li>• Dados & Logística (SPX)</li>
              </ul>
            </div>

            {/* Coluna 4: Contato */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#2F81F7] font-mono tracking-wider">
                // CONTATO
              </h4>
              <ul className="space-y-3.5 text-sm text-background/80">
                <li>
                  <a
                    href="mailto:guantunes567@gmail.com"
                    className="flex items-center gap-2.5 hover:text-background transition-colors group"
                  >
                    <Mail className="w-4 h-4 text-[#FFC224] shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="truncate">guantunes567@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5519999015635"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 hover:text-background transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-[#00D084] shrink-0 group-hover:scale-110 transition-transform" />
                    <span>+55 (19) 99901-5635</span>
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-background/70">
                  <MapPin className="w-4 h-4 text-[#FF4A60] shrink-0" />
                  <span>Louveira, SP • Brasil</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Barra Inferior com Créditos e Botão de Voltar ao Topo */}
          <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm text-background/70">
            <p>
              © {new Date().getFullYear()} Gustavo Antunes. Todos os direitos reservados.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 bg-background/10 hover:bg-background/20 text-background px-4 py-2 rounded-lg border border-background/20 transition-all hover:-translate-y-0.5 cursor-pointer font-mono"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  )
}
