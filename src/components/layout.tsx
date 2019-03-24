/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from 'react';

import './Layout.css';

import { ThemeProvider } from 'emotion-theming';
import { graphql, StaticQuery } from 'gatsby';
import useDarkMode from 'use-dark-mode';

import { css } from '@emotion/core';

import theme from '../theme';
import Background from './Background';
import Header from './Header';

interface Props {
  children?: React.ReactNode
}

const Layout: React.FunctionComponent<Props> = ({ children }) => {
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
              display: flex;
              flex-direction: column;
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
                maxwidth: 960;
                padding: 0px 1.0875rem 1.45rem;
                paddingtop: 0;
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
