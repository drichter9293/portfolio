import React from 'react';

import { Link } from 'gatsby';

import { css } from '@emotion/core';

import Layout from '../components/layout';
import Resume from '../components/Resume';
import SEO from '../components/seo';

const SecondPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Resume" />
    <Link to="/">Go back to the homepage</Link>
    <p>Resume</p>
    <div
      css={css`
        position: absolute;
        height: 508px;
        width: 920px;
        background-color: midnightblue;
        opacity: 0.8;
        z-index: -1;
      `}
    />
    <Resume />
  </Layout>
)

export default SecondPage
