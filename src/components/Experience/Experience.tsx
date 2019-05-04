import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import Company from './Company'

const Experience: React.FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      allExperiencesJson {
        nodes {
          name
          displayInResume
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

  const experiences = data.allExperiencesJson.nodes
  return (
    <div>
      {experiences
        .filter(experience => experience.displayInResume)
        .map(experience => (
          <Company key={experience.name} company={experience} />
        ))}
    </div>
  )
}

export default Experience
