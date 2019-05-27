import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import { css } from '@emotion/core'

import Layout from '../components/Layout'
import Project from '../components/Project'

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

const Projects: React.FunctionComponent = () => {
  const data = getData()
  const projects = data.allProjectsJson.nodes
  const toolImages = data.allFile.nodes.reduce((reduction, node) => {
    reduction[node.name] = node
    return reduction
  }, {})
  return (
    <Layout>
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
        {/* <Project
          name="Portfolio"
          image={portfolio}
          href="https://danielrichter.dev"
          tools={[
            {
              name: 'React',
              icon: reactIcon,
            },
            {
              name: 'Typescript',
              icon: typescriptIcon,
            },
            {
              name: 'Emotion',
              icon: emotionIcon,
            },
            {
              name: 'Gatsby',
              icon: gatsbyIcon,
            },
          ]}
        />
        <Project
          name="Top Gamer"
          image={topGamer}
          href="https://top-gamer.herokuapp.com"
          tools={[
            {
              name: 'React',
              icon: reactIcon,
            },
            {
              name: 'Typescript',
              icon: typescriptIcon,
            },
            {
              name: 'Material-UI',
              icon: materialUiIcon,
            },
            {
              name: 'Node',
              icon: nodeIcon,
            },
            {
              name: 'Heroku',
              icon: herokuIcon,
            },
          ]}
        />
        <Project
          name="Mario Kart"
          image={marioKart}
          href="https://mario-kart-optimizer.netlify.com/"
          tools={[
            {
              name: 'React',
              icon: reactIcon,
            },
            {
              name: 'Typescript',
              icon: typescriptIcon,
            },
            {
              name: 'Material-UI',
              icon: materialUiIcon,
            },
            {
              name: 'Gatsby',
              icon: gatsbyIcon,
            },
          ]}
        /> */}
      </div>
    </Layout>
  )
}

export default Projects
