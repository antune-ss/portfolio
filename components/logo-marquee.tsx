import Image from 'next/image'
import fs from 'fs'
import path from 'path'

export function LogoMarquee() {
  const logosDir = path.join(process.cwd(), 'public/logos');
  const filenames = fs.readdirSync(logosDir);

  const items = filenames.map((name) => ({
    logo: `/logos/${name}`,
    alt: name.replace('.svg', '') 
  }))

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-foreground py-16 rotate-[-5deg] mt-32 mb-16 min-w-[120vw] mx-[-10vw] left-0">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="relative h-12 w-40 shrink-0">
              <Image 
                src={item.logo}
                alt={item.alt}
                fill
                className="object-contain dark:invert" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
