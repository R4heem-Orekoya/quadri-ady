import Experience from "@/components/sections/experience";
import Heading from "@/components/sections/heading";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <main className="py-20 grid gap-16">
      <Heading />
      
      <div className='max-w-[650px] mx-auto grid gap-16'>
        <Experience />
        <Projects />
      </div>
    </main>
  )
}