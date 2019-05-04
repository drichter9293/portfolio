import React from 'react'

import { css } from '@emotion/core'

import Layout from '../components/Layout'
import Project from '../components/Project'
import emotionIcon from '../images/emotion.png'
import gatsbyIcon from '../images/gatsby.png'
import herokuIcon from '../images/heroku.png'
import marioKart from '../images/mario-kart.png'
import materialUiIcon from '../images/material-ui.png'
import nodeIcon from '../images/node.png'
import portfolio from '../images/portfolio.png'
import reactIcon from '../images/react.png'
import topGamer from '../images/top-gamer.png'
import typescriptIcon from '../images/typescript.png'

const Projects: React.FunctionComponent = () => {
  return (
    <Layout>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        `}
      >
        <Project
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
        />
      </div>
    </Layout>
  )
}

export default Projects
