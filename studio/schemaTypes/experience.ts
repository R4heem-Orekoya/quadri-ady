import { defineField, defineType } from 'sanity'
import { CaseIcon } from '@sanity/icons'


export default defineType({
   name: "experience",
   title: "Experiences",
   icon: CaseIcon,
   type: 'document',
   fields: [
      defineField({
         name: 'title',
         title: 'Title',
         type: 'string',
         validation: (rule) => rule.required(),
      }),
      defineField({
         name: 'location',
         title: 'Location',
         type: 'string',
         validation: (rule) => rule.required(),
      }),
      defineField({
         name: 'duration',
         title: 'Duration (start_year - end_year)',
         type: 'string',
         validation: (rule) => rule.required(),
      }),
      defineField({
         name: 'description',
         title: 'Description',
         type: 'text',
         validation: (rule) => rule.required(),
      }),
      defineField({
         name: 'companyLogo',
         title: 'Company Logo',
         type: 'image',
         options: {
            hotspot: true,
         },
         fields: [
            {
               name: 'alt',
               type: 'string',
               title: 'Alternative text',
               description: 'Important for SEO and accessibility.',
               validation: (rule) => {
                  // Custom validation to ensure alt text is provided if the image is present. https://www.sanity.io/docs/validation
                  return rule.custom((alt, context) => {
                     if ((context.document?.coverImage as any)?.asset?._ref && !alt) {
                        return 'Required'
                     }
                     return true
                  })
               },
            },
         ],
         validation: (rule) => rule.required(),
      }),
   ]
})