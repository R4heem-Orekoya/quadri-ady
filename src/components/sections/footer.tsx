import { socials } from "@/lib/constants"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

const Footer = () => {
   return (
      <footer className="pt-6 pb-12 w-full max-w-[750px] mx-auto flex flex-col max-sm:items-center">
         <div className="flex max-sm:flex-col gap-6 items-center justify-between">
            <p>Copyright Quadri Adeniyi {new Date().getFullYear()}</p>
            
            <ul className="flex items-center gap-4">
               {socials.map((social, i) => (
                  <li key={social.title}>
                     <Link aria-label={`Visit ${social.title} profile`} target="__blank" href={social.url as string} className={buttonVariants({ variant: "ghost", size: "icon", className: "relative" })}>
                        {i === 0 ? (
                           <Image src={social.icon as StaticImport} width={31.5} height={31.5} className="size-8 rounded-sm object-cover" alt="behance logo"/>
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
