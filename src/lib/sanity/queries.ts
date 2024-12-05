import { defineQuery } from "next-sanity";

const experienceField = /* groq */ `
  _id,
  title,
  location,
  duration,
  description,
  companyLogo,
`;

export const allExperienceQuery = defineQuery(`
  *[_type == "experience"] { ${experienceField} }
`);