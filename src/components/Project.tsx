import React from 'react'

import Img from 'gatsby-image'

import styled from '@emotion/styled'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Tool {
  name: string
}

interface Props {
  name: string
  description: string
  image: any
  href: string
  githubLink: string
  tools: string[]
  toolImages: { [tool: string]: any }
}

const ICON_SIZE = '2x'

const ProjectWrapper = styled.div`
  flex-basis: 500px;
  flex-grow: 0;
  margin: ${props => props.theme.spacing.large};
  background-color: ${props => props.theme.cardBackgroundColor};
  box-shadow: 0 0px 8px ${props => props.theme.fontColor}33;
`

const ProjectHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: ${props => props.theme.cardFontColor};
  padding: ${props => props.theme.spacing.large};
  margin: 0;
`

const ProjectTitle = styled.div`
  flex-basis: 300px;
  flex-shrink: 0;
  flex-grow: 1;
`

const ProjectName = styled.h2`
  font-size: ${props => props.theme.fontSize.xxlarge};
  margin-bottom: ${props => props.theme.spacing.medium};
`

const ProjectDescription = styled.div`
  font-size: ${props => props.theme.fontSize.large};
  font-weight: normal;
  color: ${props => props.theme.cardFontColor};
  margin-bottom: ${props => props.theme.spacing.small};
`

const ProjectLinks = styled.div`
  text-align: center;
  a {
    color: ${props => props.theme.primaryColor};
    :not(:last-child) {
      margin-right: ${props => props.theme.spacing.large};
    }
  }
`

const ProjectImage = styled.a``

const ProjectFooter = styled.div`
  padding: ${props => props.theme.spacing.large};
  text-align: center;
`

const ProjectTools = styled.div`
  .gatsby-image-wrapper {
    margin: 0 ${props => props.theme.spacing.medium};
  }
`

const Project: React.FunctionComponent<Props> = ({
  name,
  description,
  image,
  href,
  githubLink,
  tools,
  toolImages,
}) => {
  return (
    <ProjectWrapper>
      <ProjectHeader>
        <ProjectTitle>
          <ProjectName>{name}</ProjectName>
          <ProjectDescription>{description}</ProjectDescription>
        </ProjectTitle>
        <ProjectLinks>
          <a title={name} href={href}>
            <FontAwesomeIcon size={ICON_SIZE} icon={faLink} />
          </a>
          <a title="source" href={githubLink}>
            <FontAwesomeIcon size={ICON_SIZE} icon={faGithub} />
          </a>
        </ProjectLinks>
      </ProjectHeader>
      <ProjectImage href={githubLink} title={name}>
        <Img fluid={image.childImageSharp.fluid} />
      </ProjectImage>
      <ProjectFooter>
        <ProjectTools>
          {tools.map((tool, index) => (
            <Img
              key={index}
              fixed={toolImages[tool].childImageSharp.fixed}
              title={tool}
            />
          ))}
        </ProjectTools>
      </ProjectFooter>
    </ProjectWrapper>
  )
}

export default Project
