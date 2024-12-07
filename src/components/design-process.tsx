"use client"

import { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { DesignProcesses } from "../../sanity.types";
import { urlForImage } from "@/lib/sanity/utils";
import Image from "next/image";
import { PortableText, PortableTextBlock } from "next-sanity";

const DesignProcess = ({ processes }: { processes: DesignProcesses }) => {
   const [selected, setSelected] = useState<DesignProcesses[number] | null>(null)
   
   return (
      <>
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
            {processes.map((item) => (
               <div onClick={() => setSelected(item)} key={item.processName} className="col-span-1 aspect-square relative border rounded-md overflow-hidden cursor-pointer group z-[999]">
                  <Image src={urlForImage(item.processImage)?.auto("format").url() as string} alt="image" fill className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
               </div>
            ))}
         </div>
            
         {selected && (
            <div onClick={() => setSelected(null)} className="fixed inset-0 px-4 z-[999999999] bg-black/50 backdrop-blur-sm grid place-items-center">
               <ScrollArea onClick={(e) => { e.stopPropagation() }} className="h-[550px] rounded-xl overflow-hidden">
                  <div className="w-full max-w-[750px] p-4 rounded-xl border bg-primary-foreground">   
                     <div className="relative w-full rounded-lg overflow-hidden aspect-video">
                        <Image src={urlForImage(selected.processImage)?.auto("format").url() as string} fill className="w-full h-full object-cover group-hover:scale-110 transition duration-300" alt="image"/>
                     </div>
                     <div className="mt-4">
                        <h3 className="pb-2 text-xl sm:text-2xl font-semibold">{selected.processName}</h3>
                        <p className="prose text-muted-foreground max-sm:text-sm">
                           <PortableText value={selected.processDescription as PortableTextBlock[]}/>
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
