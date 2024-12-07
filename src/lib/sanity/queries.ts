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
  tag
`

export const allExperienceQuery = defineQuery(`
  *[_type == "experience"] { ${experienceField} }
`)

export const allProjectQuery = defineQuery(`
  *[_type == "project"] { ${projectField}} 
`)