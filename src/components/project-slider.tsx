"use client"

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from "swiper";
import 'swiper/css';
import { Button } from './ui/button';
import { Brush, ChevronLeft, ChevronRight, Code, Palette } from 'lucide-react';
import SectionHeading from './section-heading';
import { useRef } from 'react';
import Link from 'next/link';
import { Project as projectType } from "../../sanity.types"
import { urlForImage } from '@/lib/sanity/utils';
import Image from 'next/image';

type ArtworkType = 'digital' | 'nft' | 'traditional'

const artworkTypeIcons: Record<ArtworkType, React.ReactNode> = {
   digital: <Palette className="h-4 w-4" />,
   nft: <Code className="h-4 w-4" />,
   traditional: <Brush className="h-4 w-4" />
}

const ProjectSlider = ({ selectedWorks }: { selectedWorks: projectType[] }) => { 
   const swiperRef = useRef<SwiperInstance | null>(null)
     
   return (
      <>
         <div className="flex items-center justify-between">
            <SectionHeading>Selected Works</SectionHeading>
            
            <div className="flex items-center gap-2">
               <Button onClick={() => swiperRef.current?.slidePrev()} variant="secondary" size="icon" className="rounded-full">
                  <ChevronLeft className="w-4 h-4"/>
               </Button>
               <Button onClick={() => swiperRef.current?.slideNext()} variant="secondary" size="icon" className="rounded-full">
                  <ChevronRight className="w-4 h-4"/>
               </Button>
            </div>
         </div>
         
         <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            onSwiper={(swiper) => {
               swiperRef.current = swiper;
            }}
            breakpoints={{
               640: {
                  slidesPerView: 2
               }
            }}
            className='max-w-full mt-6'
         >
            {selectedWorks.map((selectedWork) => (
               <SwiperSlide key={selectedWork.title} className='relative aspect-[4/3] bg-primary-foreground rounded-lg overflow-hidden group'>
                  <Link href={`/project/${selectedWork.slug?.current}`}>
                     <Image 
                        className='w-full h-full object-cover group-hover:scale-105 transition duration-300'
                        fill
                        src={urlForImage(selectedWork.thumbnail)?.auto("format").url() as string} 
                        alt={selectedWork.title + "thumbnail"} 
                     />
                     <div className='absolute inset-0 bg-black/60 backdrop-blur-[2px] p-4 flex opacity-0 group-hover:opacity-100 transition'>
                        <div className='grid gap-2 mt-auto text-white translate-y-4 group-hover:translate-y-0 duration-300'>
                           <div className='px-2 py-1 flex items-center gap-1 rounded-3xl bg-white text-zinc-950 backdrop-blur-sm w-fit text-xs font-semibold'>
                              {artworkTypeIcons[selectedWork.tag as ArtworkType]}
                              {selectedWork.tag}
                           </div>
                           <h3 className='font-semibold'>{selectedWork.title}</h3>
                           <p className='opacity-80'>{selectedWork.excerpt}</p>
                        </div>
                     </div>
                  </Link>
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   )
}
export default ProjectSlider