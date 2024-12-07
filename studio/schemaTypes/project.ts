import { defineField, defineType } from "sanity";
import { ProjectsIcon } from '@sanity/icons'


export default defineType({
   name: "project",
   title: "Projects",
   icon: ProjectsIcon,
   type: 'document',
   fields: [
      defineField({
         name: 'title',
         title: 'Title',
         type: 'string',
         validation: (rule) => rule.required(),
      }),
      defineField({
         name: 'slug',
         title: 'Slug',
         type: 'slug',
         description: 'A slug is required for the post to show up in the preview',
         options: {
            source: 'title',
            maxLength: 96,
            isUnique: (value, context) => context.defaultIsUnique(value, context),
         },
         validation: (rule) => rule.required(),
      }),
      defineField({
         name: 'thumbnail',
         title: 'Thumbnail',
         type: 'image',
         options: {
            hotspot: true
         },
         validation: (rule) => rule.required(),
      }),
      defineField({
         name: 'excerpt',
         title: 'Excerpt',
         type: 'text',
         validation: (rule) => rule.required(),
      }),
      defineField({
         name: "tag",
         title: "Tag",
         type: "string",
         options: {
            list: [
               { title: 'Nft', value: 'nft' },
               { title: 'Digital', value: 'digital' },
               { title: 'Traditional', value: 'traditional' },
            ],
            layout: 'radio',
         },
         validation: (rule) => rule.required(),
      }),
      defineField({
         name: 'description',
         title: 'Description',
         type: 'text',
         validation: (rule) => rule.required(),
      }),
      defineField({
         name: "designProcess",
         title: "Design Process",
         type: "array",
         of: [{
            type: "object",
            fields: [
               defineField({
                  name: "processName",
                  title: "Process Name",
                  type: "string",
                  validation: (rule) => rule.required(),
               }),
               defineField({
                  name: "processDescription",
                  title: "Process Description",
                  type: "array",
                  of: [{ type: "block" }],
                  validation: (rule) => rule.required(),
               }),
               defineField({
                  name: "processImage",
                  title: "Process Image",
                  type: "image",
                  options: {
                     hotspot: true,
                  },
                  validation: (rule) => rule.required(),
               }),
            ]
         }],
         validation: (rule) => rule.required(),
      }),
      defineField({
         name: 'projectInsight',
         title: 'Project Insight',
         type: 'array',
         of: [{ type: "block" }],
         validation: (rule) => rule.required(),
      }),
   ]
})