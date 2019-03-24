import React from 'react';

import 'react-toggle/style.css';

import Toggle from 'react-toggle';
import useDarkMode from 'use-dark-mode';

import { css } from '@emotion/core';

import moon from '../images/moon.png';
import sun from '../images/sun.png';
import { useThemeMode } from '../utils/theme';

const DarkModeToggle = () => {
  const darkMode = useDarkMode()
  const themeMode = useThemeMode()

  return (
    <div
      css={theme => css`
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

        .react-toggle .react-toggle-track {
          background-color: ${theme[themeMode].primaryColor};
        }
        .react-toggle:hover .react-toggle-track {
          background-color: ${theme[themeMode].secondaryColor};
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
