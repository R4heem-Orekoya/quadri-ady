import Experience from "@/components/sections/experience";
import Heading from "@/components/sections/heading";
import Newsletter from "@/components/sections/newsletter";
import Projects from "@/components/sections/projects";
import Tools from "@/components/sections/tools";

export default function Home() {
  return (
    <main className="py-20 grid gap-16">
      <Heading />
      
      <div className='max-w-[750px] mx-auto grid gap-16'>
        <Experience />
        <Projects />
        <Tools />
        <Newsletter />
      </div>      
    </main>
  )
}