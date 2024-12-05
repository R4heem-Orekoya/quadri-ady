import Image from "next/image"
import { Badge } from "../ui/badge"
import Link from "next/link"
import ThemeSwitcher from "../theme-switcher"
import { Mail } from "lucide-react"

const images = [
   "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   "https://images.pexels.com/photos/5702465/pexels-photo-5702465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   "https://images.pexels.com/photos/3366171/pexels-photo-3366171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]

const Heading = () => {
   return (
      <section>
         <div className="flex justify-end">
            <ThemeSwitcher />
         </div>
         <div className="flex flex-col items-center py-6 text-center gap-4">
            <img
               className="size-14 rounded-full bg-purple-300"
               src={`https://api.dicebear.com/9.x/adventurer/svg?seed=adeniy`}
               alt="open-peeps icon"
            />
            <div className="space-y-3">
               <h1 className="text-2xl font-semibold">Quadri Aden</h1>
               <p className="max-w-md font-medium text-muted-foreground pt-1">
                  A skilled digital and traditional artist from Nigeria {" "}
                  <span>
                     <img
                        alt="Nigerian Flag"
                        className="inline-block size-4 object-contain"
                        src="./NG.svg"
                     />
                  </span>
                  ,
                  creating inspiring art that connects and tells stories.
               </p>
            </div>

            <Link href="mailto:adeniyiady@gmail.com">
               <Badge className="py-2 px-4 rounded-3xl">
                  <Mail className="w-4 h-4 mr-2" strokeWidth={1.5}/>
                  adeniyiady@gmail.com
               </Badge>
            </Link>
         </div>

         <div className="flex overflow-hidden gap-4 mt-8">
            {images.map((image, i) => (
               <div
                  key={i}
                  className="relative w-48 aspect-[16/11] flex-1 max-sm:hidden shadow-md"
               >
                  <Image src={image} fill alt={image + i} className="rounded-lg object-cover" />
               </div>
            ))}

            <div className="relative overflow-hidden w-48 aspect-video flex-1 sm:hidden rounded-lg shadow-md bg-zinc-100">
               <Image src={images[1]} alt="image 2" fill className="object-cover" />
            </div>
         </div>
      </section>
   )
}

export default Heading
