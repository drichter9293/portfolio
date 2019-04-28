import React from 'react'

import styled from '@emotion/styled'

interface Tool {
  name: string
  icon: string
}

interface Props {
  name: string
  image: string
  href?: string
  tools: Tool[]
}

const ProjectWrapper = styled.div`
  margin: ${props => props.theme.spacing.large};
  background-color: ${props => props.theme.cardBackgroundColor};
  box-shadow: 0 0px 8px ${props => props.theme.fontColor}33;
`

const ProjectHeader = styled.h1`
  font-size: ${props => props.theme.fontSize.xxlarge};
  text-align: center;
  color: ${props => props.theme.cardFontColor};
  padding: ${props => props.theme.spacing.large};
  margin: 0;
`

const ProjectImage = styled.img`
  margin: 0;
`

const ProjectFooter = styled.div`
  text-align: center;
  img {
    margin: ${props => props.theme.spacing.medium}
      ${props => props.theme.spacing.large};
  }
`

const Project: React.FunctionComponent<Props> = ({
  name,
  image,
  href,
  tools,
}) => {
  console.log(tools)
  return (
    <ProjectWrapper>
      <ProjectHeader>{name}</ProjectHeader>
      <a href={href} title={name}>
        <ProjectImage src={image} width="500em" />
      </a>
      <ProjectFooter>
        {tools.map((tool, index) => (
          <img key={index} src={tool.icon} height="40em" title={tool.name} />
        ))}
      </ProjectFooter>
    </ProjectWrapper>
  )
}

export default Project
