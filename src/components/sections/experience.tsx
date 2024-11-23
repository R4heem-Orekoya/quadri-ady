import React from 'react'
import SectionHeading from '../section-heading'
import { Disney, Pinterest, Fly } from '../icons'

const experiences = [
   {
      logo: Disney,
      duration: "2021 - Today",      
      role: "Animator at Disney",
      location: "London, UK",
      description: "Setting vision, leadership, processes while directly participating in communications with clients such as eBay, Amazon, X, Twitch, Instagram, and many others"
   },
   {
      logo: Pinterest,
      duration: "2019 - 2021",
      role: "Digital Artist at Pinterest.",
      location: "New York, NYC",
      description: "Setting vision, leadership, processes while directly participating in communications with clients such as eBay, Amazon, X, Twitch, Instagram, and many others"
   },
   {
      logo: Fly,
      duration: "2017 - 2019",
      role: "Illustration artist at Fly.io.",
      location: "London, UK",
      description: "Setting vision, leadership, processes while directly participating in communications with clients such as eBay, Amazon, X, Twitch, Instagram, and many others"
   },
   
]

const Experience = () => {
   return (
      <section >
         <SectionHeading>Experiences</SectionHeading>

         <div className='grid mt-6'>
            {experiences.map((experience) => (
               <div key={experience.role} className='p-4 sm:p-6 hover:bg-primary-foreground rounded-lg flex max-sm:flex-col items-start gap-4'>
                  <div className='size-10 flex-shrink-0 rounded-full bg-white border border-border flex items-center justify-center'>
                     <experience.logo className='w-6 h-6' />
                  </div>

                  <div className='space-y-1'>
                     <span className='text-xs text-muted-foreground italic'>{experience.duration}</span>
                     <h3 className='font-semibold'>{experience.role}</h3>
                     <p className='text-sm font-medium'>{experience.location}</p>
                     <p className='text-sm pt-2 text-muted-foreground'>{experience.description}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}

export default Experience
