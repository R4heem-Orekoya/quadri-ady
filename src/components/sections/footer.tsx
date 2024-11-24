import { socials } from "@/lib/constants"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import { img } from "motion/react-client"

const Footer = () => {
   return (
      <footer className="pt-6 pb-12 max-w-[750px] mx-auto flex max-sm:flex-col gap-6 items-center justify-between">
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
      </footer>
   )
}

export default Footer
