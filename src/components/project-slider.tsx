"use client"

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from "swiper";
import 'swiper/css';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './section-heading';
import { useRef } from 'react';

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
                  slidesPerView: 2,
               },
            }}
            className='w-full max-w-[650px] mt-6'
         >
            <SwiperSlide className='aspect-[16/10] bg-primary-foreground rounded-lg p-4'>Slide 1</SwiperSlide>
            <SwiperSlide className='aspect-[16/10] bg-primary-foreground rounded-lg p-4'>Slide 2</SwiperSlide>
            <SwiperSlide className='aspect-[16/10] bg-primary-foreground rounded-lg p-4'>Slide 3</SwiperSlide>
            <SwiperSlide className='aspect-[16/10] bg-primary-foreground rounded-lg p-4'>Slide 4</SwiperSlide>
         </Swiper>
      </>
   )
}
export default ProjectSlider