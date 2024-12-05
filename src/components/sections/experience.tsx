import React from 'react'
import SectionHeading from '../section-heading'
import { allExperienceQuery } from '@/lib/sanity/queries'
import { sanityFetch } from '@/lib/sanity/live'
import { Experience as experienceType } from "../../../sanity.types"
import { urlForImage } from '@/lib/sanity/utils'

const Experience = async () => {
   const { data: experiences } = await sanityFetch({ query: allExperienceQuery });
   
   return (
      <section id='experience'>
         <SectionHeading>Experiences</SectionHeading>

         <div className='grid mt-6'>
            {experiences.map((experience: experienceType) => (
               <div key={experience._id} className='p-4 sm:p-6 hover:bg-primary-foreground rounded-lg flex max-sm:flex-col items-start gap-4'>
                  <div className='relative size-10 flex-shrink-0 rounded-full bg-primary-foreground overflow-hidden flex items-center justify-center'>
                     <img src={urlForImage(experience.companyLogo)?.auto("format").url() as string}
                        alt={experience.companyLogo?.alt}
                        className='size-10 object-cover rounded-full'
                     />
                  </div>

                  <div className='space-y-1'>
                     <span className='text-sm text-muted-foreground italic'>{experience.duration}</span>
                     <h3 className='text-lg font-semibold'>{experience.title}</h3>
                     <p className='text-sm font-medium'>{experience.location}</p>
                     <p className='pt-2 text-muted-foreground'>{experience.description}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}

export default Experience
