// components/logo-marquee.tsx
import { 
  SiPython, 
  SiReact, 
  SiNextdotjs, 
  SiFlutter, 
  SiDart, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiTailwindcss, 
  SiFirebase, 
  SiGit 
} from "react-icons/si"

const technologies = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Dart", icon: SiDart, color: "#0175C2" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Git", icon: SiGit, color: "#F05032" },
]

export function LogoMarquee() {
  return (
    <div className="overflow-hidden">
      {/* Faixa que acompanha o tema via CSS: bg-foreground */}
      <div className="relative overflow-hidden bg-foreground py-14 rotate-[-5deg] mt-32 mb-16 min-w-[120vw] mx-[-10vw] left-0">
        {/* Máscara de fade que desvanece os logos nas extremidades */}
        <div className="w-full mask-[linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
          <div className="flex items-center gap-10 animate-marquee whitespace-nowrap">
            {[...technologies, ...technologies, ...technologies, ...technologies].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-background/10 border-2 border-background/20 hover:border-background/50 hover:bg-background/20 px-5 py-2.5 m-0.5 rounded-full shrink-0 transition-all duration-300 hover:scale-105 group"
                >
                  <Icon className="w-5 h-5 text-background/60 group-hover:text-background transition-colors" />
                  <span className="text-background/80 group-hover:text-background text-base font-mono font-bold tracking-wide transition-colors">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
