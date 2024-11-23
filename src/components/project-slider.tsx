"use client"

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from "swiper";
import 'swiper/css';
import { Button } from './ui/button';
import { Brush, ChevronLeft, ChevronRight, Code, Palette } from 'lucide-react';
import SectionHeading from './section-heading';
import { useRef } from 'react';

const selectedWorks = [
   {
      title: "NFT Collection, Abstract Character Design, Crypto Art",
      excerpt: "A series of unique, collectible monkey art pieces.",
      tag: "nft",
      image: "./nft-2.jpg",
   },
   {
      title: "2D Simple Game Character Design",
      excerpt: "A series of unique, collectible monkey art pieces.",
      tag: "digital",
      image: "./2d-1.jpg",
   },
   {
      title: "Bond Bears - NFT Collection",
      excerpt: "A series of unique, collectible monkey art pieces.",
      tag: "nft",
      image: "./nft-1.png",
   },
   {
      title: "2d Character Design",
      excerpt: "A series of unique, collectible monkey art pieces.",
      tag: "digital",
      image: "./art-1.jpg",
   },
   {
      title: "2D Game Design Concept",
      excerpt: "A series of unique, collectible monkey art pieces.",
      tag: "digital",
      image: "./2d-2.jpg",
   },
]

type ArtworkType = 'digital' | 'nft' | 'traditional'

const artworkTypeIcons: Record<ArtworkType, React.ReactNode> = {
   digital: <Palette className="h-4 w-4" />,
   nft: <Code className="h-4 w-4" />,
   traditional: <Brush className="h-4 w-4" />
 }

const ProjectSlider = () => { 
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
                  <img 
                     className='w-full h-full object-cover group-hover:scale-105 transition duration-300'
                     src={selectedWork.image} 
                     alt={selectedWork.image} 
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
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   )
}
export default ProjectSlider