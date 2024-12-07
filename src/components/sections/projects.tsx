import { allProjectQuery } from "@/lib/sanity/queries";
import ProjectSlider from "../project-slider"
import { sanityFetch } from "@/lib/sanity/live";
const Projects = async () => {
   const { data: projects } = await sanityFetch({ query: allProjectQuery });
   
   return (
      <section id='projects' className="overflow-hidden">
         <ProjectSlider selectedWorks={projects} />
      </section>
   )
}

export default Projects
