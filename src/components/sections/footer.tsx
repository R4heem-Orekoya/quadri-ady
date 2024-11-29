import { socials } from "@/lib/constants"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import { Mail } from "lucide-react"
import { badgeVariants } from "../ui/badge"

const Footer = () => {
   return (
      <footer className="pt-6 pb-12 w-full max-w-[750px] mx-auto flex flex-col max-sm:items-center">
         <a href="mailto:adeniyiady@gmail.com" className={badgeVariants({ variant: "outline", className: "w-fit px-4 py-2 mb-4 justify-self-center" })}>
            <Mail className="w-5 h-5 mr-3" strokeWidth={1.5}/>
            <span className="text-lg font-normal">adeniyiady@gmail.com</span>
         </a>
         <div className="flex max-sm:flex-col gap-6 items-center justify-between">
            <p>Copyright Quadri Adeniyi {new Date().getFullYear()}</p>
            
            <ul className="flex items-center gap-4">
               {socials.map((social, i) => (
                  <li key={social.title}>
                     <Link href={social.url} className={buttonVariants({ variant: "ghost", size: "icon" })}>
                        {i === 0 ? (
                           <img src={social.icon as string} className="size-8 rounded-sm object-cover" alt="behance logo"/>
                        ): (
                           <>{social.icon}</>
                        )}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </footer>
   )
}

export default Footer
