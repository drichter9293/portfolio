/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from 'react'

import './Layout.css'

import { ThemeProvider } from 'emotion-theming'
import { graphql, StaticQuery } from 'gatsby'

import { css } from '@emotion/core'

import getTheme from '../theme'
import { useThemeMode } from '../utils/theme'
import Background from './Background'
import Header from './Header'

interface Props {
  children?: React.ReactNode
}

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  const themeMode = useThemeMode()
  const theme = getTheme(themeMode)

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={theme}>
          <Background />
          <div
            css={css`
              height: 100vh;
              width: 100vw;
              display: flex;
              flex-direction: column;
              color: ${theme.primaryColor};
            `}
          >
            <div
              css={css`
                flex-shrink: 0;
              `}
            >
              <Header />
            </div>
            <main
              css={css`
                margin: 0 auto;
                max-width: 1200px;
                padding: ${theme.spacing.large};
                flex-grow: 1;
                overflow-y: auto;
              `}
            >
              {children}
            </main>
          </div>
        </ThemeProvider>
      )}
    />
  )
}

export default Layout
