import React from 'react';

import 'react-toggle/style.css';

import Toggle from 'react-toggle';
import useDarkMode from 'use-dark-mode';

import { css } from '@emotion/core';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)

  return (
    <div
      css={css`
        margin-right: 20px;
      `}
    >
      {/* <button type="button" onClick={darkMode.disable}>
        ☀
      </button> */}
      <Toggle
        checked={darkMode.value}
        onChange={darkMode.toggle}
        icons={{
          checked: "☀",
          unchecked: "☾",
        }}
      />
      {/* <button type="button" onClick={darkMode.enable}>
        ☾
      </button> */}
    </div>
  )
}

export default DarkModeToggle
