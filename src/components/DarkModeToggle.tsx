import React from 'react';

import 'react-toggle/style.css';

import Toggle from 'react-toggle';
import useDarkMode from 'use-dark-mode';

import { css } from '@emotion/core';

import moon from '../images/moon.png';
import sun from '../images/sun.png';

const COLOR_LIGHT_MODE = "#444"
const COLOR_HOVER_LIGHT_MODE = "#000"
const COLOR_DARK_MODE = "#999"
const COLOR_HOVER_DARK_MODE = "#ccc"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)

  return (
    <div
      css={css`
        margin-right: 30px;
        height: 24px;
        .react-toggle-track-check,
        .react-toggle-track-x {
          height: 16px;
          width: 16px;
        }
        .react-toggle-track-check {
          left: 5px;
        }
        .react-toggle-track-x {
          right: 5px;
        }

        .react-toggle.react-toggle--checked .react-toggle-track {
          background-color: ${COLOR_DARK_MODE};
        }
        .react-toggle.react-toggle--checked:hover .react-toggle-track {
          background-color: ${COLOR_HOVER_DARK_MODE};
        }

        .react-toggle:not(.react-toggle--checked) .react-toggle-track {
          background-color: ${COLOR_LIGHT_MODE};
        }
        .react-toggle:not(.react-toggle--checked):hover .react-toggle-track {
          background-color: ${COLOR_HOVER_LIGHT_MODE};
        }
      `}
    >
      <Toggle
        checked={darkMode.value}
        onChange={darkMode.toggle}
        icons={{
          checked: (
            <img
              src={moon}
              width="16"
              height="16"
              role="presentation"
              style={{ pointerEvents: "none" }}
            />
          ),
          unchecked: (
            <img
              src={sun}
              width="16"
              height="16"
              role="presentation"
              style={{ pointerEvents: "none" }}
            />
          ),
        }}
      />
    </div>
  )
}

export default DarkModeToggle
