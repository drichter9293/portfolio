import React from 'react';

import { Link } from 'gatsby';

import { css } from '@emotion/core';

import { useTheme } from '../utils/theme';

interface MenuItem {
  title: string
  to: string
}

interface Props {
  menuItems: MenuItem[]
}

const Tabs: React.FunctionComponent<Props> = ({ menuItems }) => {
  const theme = useTheme()

  return (
    <>
      {menuItems.map(menuItem => (
        <Link
          key={menuItem.title}
          to={menuItem.to}
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
          {menuItem.title}
        </Link>
      ))}
    </>
  )
}

export default Tabs
