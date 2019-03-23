import React from 'react';

import { Link } from 'gatsby';

import { css } from '@emotion/core';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { SocialMedia } from '../components/SocialMedia';

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Home" keywords={[`daniel`, `richter`, `portfolio`]} />
    {/* <SocialMedia /> */}
    {/* <Link to="/resume">Resume</Link> */}
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
        `}
      >
        Hello, Daniel Richter's World
      </div>
    </div>
  </Layout>
)

export default IndexPage
