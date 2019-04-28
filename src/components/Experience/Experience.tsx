import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import Company from './Company'

const Experience: React.FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      resumeJson {
        companies {
          name
          href
          logoLight {
            childImageSharp {
              fluid(maxHeight: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          logoDark {
            childImageSharp {
              fluid(maxHeight: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          positions {
            title
            startDate(formatString: "MMM YYYY")
            endDate(formatString: "MMM YYYY")
          }
          projects {
            name
            description
            details
          }
        }
      }
    }
  `)
  const companies = data.resumeJson.companies
  return (
    <div>
      {companies.map(company => (
        <Company key={company.name} company={company} />
      ))}
    </div>
  )
}

export default Experience
