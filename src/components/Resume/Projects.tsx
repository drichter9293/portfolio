import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import styled from '@emotion/styled'
import { faChevronRight, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

const ElementImage = styled.div`
  width: 35px;
  text-align: center;
`

const FlexGrowDiv = styled.div`
  flex-grow: 1;
`

const Projects: React.FunctionComponent = () => {
  const data = useData()
  const projects = data.allProjectsJson.nodes
  const toolData = data.allToolsJson.nodes.reduce((reduction, tool) => {
    reduction[tool.key] = tool
    return reduction
  }, {})

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
                  {/* {project.tools.map(toolKey => (
                  <ElementImage key={toolKey}>
                    <Img fixed={toolData[toolKey].icon.childImageSharp.fixed} />
                  </ElementImage>
                ))} */}
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
