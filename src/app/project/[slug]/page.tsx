import SectionHeading from "@/components/section-heading"
import ThemeSwitcher from "@/components/theme-switcher"
import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import DesignProcess from "@/components/design-process"
import { sanityFetch } from "@/lib/sanity/live"
import { individualProjectSlug, projectQuery } from "@/lib/sanity/queries"
import { notFound } from "next/navigation"
import { Project, DesignProcesses } from "../../../../sanity.types"
import { urlForImage } from "@/lib/sanity/utils"
import { PortableText, PortableTextBlock } from "next-sanity"

interface Props {
   params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
   const { data } = await sanityFetch({
      query: individualProjectSlug,
      perspective: "published",
      stega: false
   });
   
   return data;
}

const Page = async ({ params }: Props) => {
   const [{ data }] = await Promise.all([
      sanityFetch({ query: projectQuery, params }),
   ]);
   const project: Project = data

   if (!project?._id) {
      return notFound();
   }

   return (
      <main className="max-w-[750px] mx-auto py-20 grid gap-10">
         <div className="flex justify-end">
            <ThemeSwitcher />
         </div>
         <Link href="/" className={buttonVariants({ variant: "outline", className: "flex items-center gap-2 w-fit" })}>
            <ArrowLeft />
            Go back
         </Link>
         <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">{project.title}</h1>
            <p className="max-w-[60ch] mt-4 text-muted-foreground">{project.description}</p>
         </div>

         <section>
            <SectionHeading>Design Process</SectionHeading>
            <DesignProcess processes={project.designProcess as DesignProcesses}/>

            <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden my-6">
               <Image src={urlForImage(project.thumbnail)?.auto("format").url() as string} alt={project.title + "showcase image"} fill className="object-cover" />
            </div>
         </section>

         <section>
            <SectionHeading>Project Insights</SectionHeading>

            <div className="space-y-4 mt-4 prose prose-p:text-muted-foreground">
               <PortableText value={project.projectInsight as PortableTextBlock[]}/>
            </div>
         </section>
      </main>
   )
}

export default Page
