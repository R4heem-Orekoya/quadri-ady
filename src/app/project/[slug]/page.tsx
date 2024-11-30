import SectionHeading from "@/components/section-heading"
import ThemeSwitcher from "@/components/theme-switcher"
import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ShowCaseImage from "../../../../public/nft-2.jpg"
import DesignProcess from "@/components/design-process"

interface Props {
   params: Promise<{ slug: string }>
}

const Page = async ({ }: Props) => {
   // const slug = (await params).slug

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
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">NFT Collection: Abstract Character Design, Crypto Art</h1>
            <p className="max-w-[60ch] mt-4 text-muted-foreground">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Debitis sequi dolorem vel inventore aut deleniti corporis
               velit eligendi eos tempora?
            </p>
         </div>

         <section>
            <SectionHeading>Design Process</SectionHeading>
            <DesignProcess />

            <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden my-6">
               <Image src={ShowCaseImage} alt="image" fill className="object-cover" />
            </div>
         </section>

         <section>
            <SectionHeading>Project Insights</SectionHeading>

            <div className="space-y-4 mt-4 prose prose-p:text-muted-foreground">
               <p>
                  The Neon Dreamscape project pushed the boundaries of digital art
                  creation, blending traditional artistic techniques with cutting-edge
                  digital tools. Throughout the process, we explored new ways to create
                  depth and atmosphere in digital environments, experimenting with lighting
                  techniques that evoke the feeling of a city bathed in neon.
               </p>

               <p>
                  One of the key challenges was balancing the vibrant, eye-catching neon
                  elements with more subdued backgrounds to create a cohesive and visually
                  pleasing composition. This required multiple iterations and fine-tuning
                  of color palettes and lighting setups.
               </p>

               <p>
                  The project not only resulted in a series of striking artworks but also
                  led to the development of new techniques and workflows that will inform
                  future digital art projects. The positive reception from the art community
                  has opened up exciting possibilities for exhibitions and collaborations
                  in the realm of digital art.
               </p>
            </div>
         </section>
      </main>
   )
}

export default Page
