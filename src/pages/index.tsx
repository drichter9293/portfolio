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
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        css={css`
          font-size: 60px;
          margin-bottom: 60px;
        `}
      >
        Hello, Daniel Richter's World
      </div>
    </div>
  </Layout>
)

export default IndexPage
