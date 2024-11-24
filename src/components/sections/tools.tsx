import { Illustrator, Photoshop } from "../icons"

const Tools = () => {
   return (
      <section className="flex items-center justify-center flex-wrap gap-8">
         <div className="grid place-items-center flex-shrink-0 w-20 aspect-square rounded-lg bg-primary-foreground border border-border/30 -rotate-6 hover:scale-125 hover:rotate-0 transition duration-300">
            <Illustrator  className="w-12 h-12 object-cover"/>
         </div>
         <div className="grid place-items-center flex-shrink-0 w-20 aspect-square rounded-lg bg-primary-foreground border border-border/30 rotate-6 hover:scale-125 hover:rotate-0 transition duration-300">
            <Photoshop  className="w-12 h-12 object-cover"/>
         </div>
         <div className="grid place-items-center flex-shrink-0 w-20 aspect-square rounded-lg bg-primary-foreground border border-border/30 -rotate-6 hover:scale-125 hover:rotate-0 transition duration-300">
            <img src="./procreate-icon.png" className="w-12 aspect-square object-cover" alt="procreate logo"/>
         </div>
         <div className="grid place-items-center flex-shrink-0 w-20 aspect-square rounded-lg bg-primary-foreground border border-border/30 rotate-6 hover:scale-125 hover:rotate-0 transition duration-300">
            <img src="./krita-icon.png" className="w-12 aspect-square object-cover" alt="krita logo"/>
         </div>
      </section>
   )
}

export default Tools
