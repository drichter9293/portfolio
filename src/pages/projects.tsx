import React from 'react';

import { css } from '@emotion/core';

import Layout from '../components/Layout';
import Project from '../components/Project';
import emotionIcon from '../images/emotion.png';
import gatsbyIcon from '../images/gatsby-icon.png';
import herokuIcon from '../images/heroku.png';
import marioKart from '../images/mario-kart.png';
import materialUiIcon from '../images/material-ui.svg';
import nodeIcon from '../images/node.png';
import portfolio from '../images/portfolio.png';
import reactIcon from '../images/react.png';
import topGamer from '../images/top-gamer.png';
import typescriptIcon from '../images/typescript.png';

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
          libraryIcons={[reactIcon, typescriptIcon, emotionIcon, gatsbyIcon]}
        />
        <Project
          name="Top Gamer"
          image={topGamer}
          libraryIcons={[
            reactIcon,
            typescriptIcon,
            materialUiIcon,
            nodeIcon,
            herokuIcon,
          ]}
        />
        <Project
          name="Mario Kart"
          image={marioKart}
          libraryIcons={[reactIcon, typescriptIcon, materialUiIcon, gatsbyIcon]}
        />
      </div>
    </Layout>
  )
}

export default Projects
