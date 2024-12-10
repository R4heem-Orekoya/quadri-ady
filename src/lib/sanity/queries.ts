import { defineQuery } from "next-sanity";

const experienceField = /* groq */ `
  _id,
  title,
  location,
  duration,
  description,
  companyLogo,
`

const projectField = `
  _id,
  title,
  slug,
  thumbnail,
  excerpt,
  tag,
  _updatedAt
`

export const allExperienceQuery = defineQuery(`
  *[_type == "experience"] { ${experienceField} }
`)

export const allProjectQuery = defineQuery(`
  *[_type == "project"] { ${projectField} } 
`)

export const projectQuery = defineQuery(`
  *[_type == "project" && slug.current == $slug] [0] 
  {
    _id,
    title,
    thumbnail,
    description,
    designProcess,
    projectInsight,
  }
`);

export const individualProjectSlug = defineQuery(`
  *[_type == "project" && defined(slug.current)]
  { "slug": slug.current }
`);