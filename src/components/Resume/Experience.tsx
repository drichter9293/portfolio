import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import Company from './Company';

const Experience: React.FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      resumeJson {
        companies {
          name
          logo {
            childImageSharp {
              fluid(maxHeight: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          positions {
            title
            projects {
              name
              description
            }
          }
        }
      }
    }
  `)
  const companies = data.resumeJson.companies
  console.log(data)
  return (
    <div>
      {companies.map(company => (
        <Company key={company.name} company={company} />
      ))}
    </div>
  )
}

export default Experience
