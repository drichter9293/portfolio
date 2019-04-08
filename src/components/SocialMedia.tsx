import React from 'react';

import useDarkMode from 'use-dark-mode';

import { css } from '@emotion/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useThemeMode } from '../utils/theme';

const ICON_SIZE = "2x"

const SocialMedia: React.FunctionComponent = () => {
  const themeMode = useThemeMode()

  return (
    <div
      css={theme => css`
        height: 2em;
        display: flex;
        a:not(:last-child) {
          margin-right: 20px;
        }
        svg {
          color: ${theme[themeMode].primaryColor};
        }
        svg:hover {
          color: ${theme[themeMode].secondaryColor};
        }
      `}
    >
      <a href="https://github.com/drichter9293">
        <FontAwesomeIcon icon={faGithub} size={ICON_SIZE} />
      </a>
      <a href="mailto:drichter9293@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} size={ICON_SIZE} />
      </a>
      <a href="https://www.linkedin.com/in/drichter9293">
        <FontAwesomeIcon icon={faLinkedin} size={ICON_SIZE} />
      </a>
    </div>
  )
}

export default SocialMedia
