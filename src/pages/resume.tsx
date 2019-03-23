import React from 'react';

import { Link } from 'gatsby';

import { css } from '@emotion/core';

import Layout from '../components/Layout';
import Resume from '../components/Resume';
import SEO from '../components/seo';

const SecondPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Resume" />
    <div
      css={css`
        background-color: midnightblue;
        opacity: 0.8;
      `}
    >
      <Resume />
    </div>
  </Layout>
)

export default SecondPage
