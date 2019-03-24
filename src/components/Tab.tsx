import React from 'react';

import { NONAME } from 'dns';
import { Link } from 'gatsby';
import useDarkMode from 'use-dark-mode';

import { css } from '@emotion/core';

const COLOR_LIGHT_MODE = "#333"
const COLOR_DARK_MODE = "#999"

interface Props {
  title: string
  to: string
}

const Tab: React.FunctionComponent<Props> = ({ title, to }) => {
  const darkMode = useDarkMode()
  const color = darkMode.value ? COLOR_DARK_MODE : COLOR_LIGHT_MODE

  return (
    <Link
      to={to}
      css={css`
        color: ${color};
        padding: 8px;
        margin: 0px 8px;
        font-size: 20px;
        text-decoration: none;
        border-bottom: 2px solid transparent;
      `}
      activeStyle={{
        borderBottom: `2px solid ${color}`,
      }}
    >
      {title}
    </Link>
  )
}

export default Tab
