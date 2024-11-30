"use client"

import { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";

const nftDesignProcess = [
   {
      step: 1,
      title: "Concept Development",
      description: "Define the theme, style, and concept of your NFT artwork. Sketch rough ideas on paper or in Procreate.",
      referenceImage: "https://images.pexels.com/photos/161154/stained-glass-spiral-circle-pattern-161154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   },
   {
      step: 2,
      title: "Canvas Setup",
      description: "Create a new canvas in Procreate with high resolution (e.g., 3000x3000px, 300 DPI) to ensure quality.",
      referenceImage: "https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   },
   {
      step: 3,
      title: "Base Sketch",
      description: "Use the pencil brushes in Procreate to draft your artwork. Focus on composition and overall flow.",
      referenceImage: "https://images.pexels.com/photos/1690351/pexels-photo-1690351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   },
   {
      step: 4,
      title: "Inking and Line Art",
      description: "Refine your sketch by creating clean line art on a new layer. Use Procreate's inking brushes for precision.",
      referenceImage: "https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   },
   {
      step: 5,
      title: "Coloring and Texturing",
      description: "Add colors and textures using Procreate's painting brushes. Experiment with gradients, shading, and details.",
      referenceImage: "https://images.pexels.com/photos/206064/pexels-photo-206064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   },
   {
      step: 6,
      title: "Export and Minting",
      description: "Export the final artwork as a PNG or TIFF file. Use an NFT marketplace to mint your creation as an NFT.",
      referenceImage: "https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg"
   }
];

const DesignProcess = () => {
   const [selected, setSelected] = useState<typeof nftDesignProcess[0] | null>(null)
   
   return (
      <>
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
            {nftDesignProcess.map((item, i) => (
               <div onClick={() => setSelected(item)} key={i} className="col-span-1 aspect-square relative border rounded-md overflow-hidden cursor-pointer group z-[999]">
                  <img src={item.referenceImage} alt="image" className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
               </div>
            ))}
         </div>
            
         {selected && (
            <div onClick={() => setSelected(null)} className="fixed inset-0 px-4 z-[999999999] bg-black/50 backdrop-blur-sm grid place-items-center">
               <ScrollArea onClick={(e) => { e.stopPropagation() }} className="h-[550px] rounded-xl overflow-hidden">
                  <div className="w-full max-w-[750px] p-4 rounded-xl border bg-primary-foreground">   
                     <div className="relative w-full rounded-lg overflow-hidden aspect-video">
                        <img src={selected.referenceImage} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" alt="image"/>
                     </div>
                     <div className="mt-4">
                        <h3 className="pb-2 text-xl sm:text-2xl font-semibold">{selected.title}</h3>
                        <p className="prose text-muted-foreground max-sm:text-sm">
                           {selected.description}
                           {selected.description}
                           {selected.description}
                           {selected.description}
                           {selected.description}
                        </p>
                     </div>
                  </div>
               </ScrollArea>
            </div>
         )}
      </>
   )
}

export default DesignProcess
