import React from 'react'

import { graphql, Link, useStaticQuery } from 'gatsby'

import { css } from '@emotion/core'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import Project from '../components/Project'
import TranslucentBackground from '../components/TranslucentBackground'
import { useTheme } from '../utils/theme'

const Body = styled.div`
  text-align: center;
  color: ${props => props.theme.primaryColor};
  font-size: ${props => props.theme.fontSize.large};
  padding: 0 ${props => props.theme.spacing.medium};
`

const getData = () =>
  useStaticQuery(graphql`
    query {
      allProjectsJson {
        nodes {
          name
          description
          href
          githubLink
          tools
          image {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      allFile(filter: { relativeDirectory: { eq: "tools" } }) {
        nodes {
          name
          childImageSharp {
            fixed(height: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

const linkCss = theme => css`
  color: ${theme.primaryColor};
  &:hover {
    color: ${theme.secondaryColor};
  }
`

const ProjectsPage: React.FunctionComponent = () => {
  const data = getData()
  const projects = data.allProjectsJson.nodes
  const toolImages = data.allFile.nodes.reduce((reduction, node) => {
    reduction[node.name] = node
    return reduction
  }, {})
  const theme = useTheme()

  return (
    <Layout>
      <TranslucentBackground>
        <Body>
          These are just my personal projects. For professional experience,
          please see the{' '}
          <Link to="/work" css={linkCss}>
            work
          </Link>{' '}
          page
        </Body>
      </TranslucentBackground>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        `}
      >
        {projects.map(project => (
          <Project
            key={project.name}
            name={project.name}
            description={project.description}
            href={project.href}
            githubLink={project.githubLink}
            image={project.image}
            tools={project.tools}
            toolImages={toolImages}
          />
        ))}
      </div>
    </Layout>
  )
}

export default ProjectsPage
