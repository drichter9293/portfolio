import React from 'react';

import useDarkMode from 'use-dark-mode';

import { css } from '@emotion/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const COLOR_LIGHT_MODE = "#444"
const COLOR_HOVER_LIGHT_MODE = "#000"
const COLOR_DARK_MODE = "#999"
const COLOR_HOVER_DARK_MODE = "#ccc"

const SocialMedia: React.FunctionComponent = () => {
  const darkMode = useDarkMode()
  const iconColor = darkMode.value ? COLOR_DARK_MODE : COLOR_LIGHT_MODE
  const hoverColor = darkMode.value
    ? COLOR_HOVER_DARK_MODE
    : COLOR_HOVER_LIGHT_MODE

  const linkStyle = css`
    :hover {
      color: ;
    }
  `

  return (
    <div
      css={css`
        height: 2em;
        display: flex;
        a {
          margin-right: 20px;
        }
        svg:hover {
          color: ${hoverColor};
        }
      `}
    >
      <a href="https://github.com/drichter9293">
        <FontAwesomeIcon icon={faGithub} size="2x" color={iconColor} />
      </a>
      <a href="mailto:drichter9293@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} size="2x" color={iconColor} />
      </a>
      <a href="https://www.linkedin.com/in/drichter9293">
        <FontAwesomeIcon icon={faLinkedin} size="2x" color={iconColor} />
      </a>
    </div>
  )
}

export default SocialMedia
