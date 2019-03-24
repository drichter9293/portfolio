import React from 'react';

import { NONAME } from 'dns';
import { Link } from 'gatsby';
import useDarkMode from 'use-dark-mode';

import { css } from '@emotion/core';

import { useTheme } from '../utils/theme';

interface Props {
  title: string
  to: string
}

const Tab: React.FunctionComponent<Props> = ({ title, to }) => {
  const theme = useTheme()

  return (
    <Link
      to={to}
      css={css`
        color: ${theme.primaryColor};
        padding: 8px;
        margin: 0px 8px;
        font-size: 20px;
        text-decoration: none;
        border-bottom: 2px solid transparent;
        &:hover {
          color: ${theme.secondaryColor};
        }
      `}
      activeStyle={{
        borderBottom: `2px solid ${theme.primaryColor}`,
      }}
    >
      {title}
    </Link>
  )
}

export default Tab
