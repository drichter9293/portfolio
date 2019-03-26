import React from 'react';

import { Link } from 'gatsby';

import { css } from '@emotion/core';

import Layout from '../components/Layout';
import Resume from '../components/Resume';
import SEO from '../components/seo';

const SecondPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Resume" />
    <Resume />
  </Layout>
)

export default SecondPage
