import React from 'react'

import { Link, withPrefix } from 'gatsby'

import { css } from '@emotion/core'

import { useTheme } from '../utils/theme'

interface MenuItem {
  title: string
  to: string
  staticAsset: boolean
}

interface Props {
  menuItems: MenuItem[]
}

const linkCss = theme => css`
  color: ${theme.primaryColor};
  padding: 8px;
  margin: 0px 8px;
  font-size: 20px;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  &:hover {
    color: ${theme.secondaryColor};
  }
`

const Tabs: React.FunctionComponent<Props> = ({ menuItems }) => {
  const theme = useTheme()

  return (
    <>
      {menuItems.map(menuItem =>
        menuItem.staticAsset ? (
          <a
            key={menuItem.title}
            css={linkCss}
            href={withPrefix(menuItem.to)}
            target="blank"
          >
            {menuItem.title}
          </a>
        ) : (
          <Link
            key={menuItem.title}
            to={menuItem.to}
            css={linkCss}
            activeStyle={{
              borderBottom: `2px solid ${theme.primaryColor}`,
            }}
          >
            {menuItem.title}
          </Link>
        )
      )}
    </>
  )
}

export default Tabs
