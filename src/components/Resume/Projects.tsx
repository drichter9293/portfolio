import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import styled from '@emotion/styled'
import { faChevronRight, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

import {
  ElementContent,
  IconTitle,
  Item,
  ItemDescription,
  ItemDetail,
  ItemHeader,
  ItemTitle,
  Section
} from './Section'

const useData = () =>
  useStaticQuery(graphql`
    query {
      allProjectsJson {
        nodes {
          name
          href
          description
          details
          tools
        }
      }
      allToolsJson {
        nodes {
          key
          name
          icon {
            childImageSharp {
              fixed(height: 20) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

const Tools = styled.div`
  display: flex;
`

const FlexGrowDiv = styled.div`
  flex-grow: 1;
`

const Projects: React.FunctionComponent = () => {
  const data = useData()
  const projects = data.allProjectsJson.nodes

  return (
    <Section title="Projects" icon={faLaptopCode}>
      <ElementContent>
        {projects.map(project => (
          <Item key={project.name}>
            <ItemHeader>
              <ItemTitle>
                <Tools>
                  <IconTitle title={project.name} icon={faChevronRight} />
                  <FlexGrowDiv />
                </Tools>
              </ItemTitle>
              <ItemDescription>{project.description}</ItemDescription>
            </ItemHeader>
            {project.details.map((detail, index) => (
              <ItemDetail key={index}>{detail}</ItemDetail>
            ))}
          </Item>
        ))}
      </ElementContent>
    </Section>
  )
}

export default Projects
