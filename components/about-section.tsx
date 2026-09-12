import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-32">
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
              Quem está por trás desse <span className="bg-[#2F81F7] text-background px-3 py-1 inline-block">portifólio?</span>
            </h2>
            <p className="text-foreground text-base md:text-lg leading-relaxed">
              Eu pellentesque arcu ornare velit faucibus egestas gravida sed in purus enim molestie gravida imperdiet
              integer.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-foreground rounded-[5px] shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">15+ years of experience</h3>
                <p className="text-foreground text-sm md:text-base">
                  Eu pellentesque arcu ornare velit faucibus egestas me gravida sed in purus enim molestie gravida.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-foreground rounded-[5px] shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">100+ successfull projects</h3>
                <p className="text-foreground text-sm md:text-base">
                  Eu pellentesque arcu ornare velit faucibus egestas me gravida sed in purus enim molestie gravida.
                </p>
              </div>
            </div>
          </div>

          <Button className="bg-foreground text-background rounded-lg py-5 px-8 md:py-5.5 md:px-15.5 text-4xl md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-60">
            <User className="w-5 h-5" />
            Mais sobre mim
          </Button>
        </div>
      </div>
    </section>
  )
}
