import { sanityFetch } from '@/lib/sanity/live'
import { allProjectQuery } from '@/lib/sanity/queries'
import type { MetadataRoute } from 'next'
import { Project as projectType } from "../../sanity.types"


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
   const { data } = await sanityFetch({
      query: allProjectQuery
   })
   const projects: projectType[] = data
   
   const links: MetadataRoute.Sitemap = projects.map((project) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/project/${project.slug?.current}`,
      lastModified: project._updatedAt
   }))
   
   return [
      {
         url: process.env.NEXT_PUBLIC_SITE_DOMAIN!,
         lastModified: new Date(),
         priority: 1
      },
      ...links
   ]
}