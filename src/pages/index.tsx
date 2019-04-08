import React from 'react';

import { Link } from 'gatsby';

import { css } from '@emotion/core';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Home" keywords={[`daniel`, `richter`, `portfolio`]} />
    <div
      css={css`
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      <h1
        css={css`
          font-size: 80px;
          font-weight: 300;
          margin-bottom: 20px;
          @media (max-width: 800px) {
            font-size: 40px;
          }
        `}
      >
        DANIEL RICHTER
      </h1>
      <h2
        css={css`
          font-size: 40px;
          font-weight: 200;
          font-style: italic;
          @media (max-width: 800px) {
            font-size: 20px;
          }
        `}
      >
        SOFTWARE ENGINEER
      </h2>
    </div>
  </Layout>
)

export default IndexPage
