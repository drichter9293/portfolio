import React from 'react';

import { css } from '@emotion/core';

import { useTheme } from '../utils/theme';

interface Props {
  name: string
  image: string
  libraryIcons: string[]
}

const Project: React.FunctionComponent<Props> = ({
  name,
  image,
  libraryIcons,
}) => {
  const theme = useTheme()
  return (
    <div
      css={css`
        margin: 1em;
        border: 0.25em solid ${theme.secondaryColor};
        border-radius: 0.5em;
        padding: 0.5em;
        background-color: ${theme.secondaryColor};
      `}
    >
      <h1
        css={css`
          text-align: center;
          color: ${theme.backgroundColor};
        `}
      >
        {name}
      </h1>
      <img src={image} width="500em" />
      <div
        css={css`
          text-align: center;
          img:not(:last-child) {
            padding-right: 2em;
          }
        `}
      >
        {libraryIcons.map((icon, index) => (
          <img key={index} src={icon} height="50em" />
        ))}
      </div>
    </div>
  )
}

export default Project
