import { FloatingDock } from "@/components/floating-dock";
import Experience from "@/components/sections/experience";
import Heading from "@/components/sections/heading";
// import Newsletter from "@/components/sections/newsletter";
import Projects from "@/components/sections/projects";
import Tools from "@/components/sections/tools";
import { items } from "@/lib/constants";

export const revalidate = 60;

export default function Home() {
  return (
    <main className="py-20 grid gap-16">
      <Heading />
      
      <div className='max-w-[750px] mx-auto grid gap-16'>
        <Experience />
        <Projects />
        <Tools />
        {/* <Newsletter /> */}
        
        <p className="text-center text-3xl font-dancingscript font-semibold">Quadri Aden</p>
      </div>   
      <FloatingDock items={items}/>   
    </main>
  )
}