import React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { SocialMedia } from '../components/SocialMedia';

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Home" keywords={[`daniel`, `richter`, `portfolio`]} />
    <SocialMedia />
    <Link to="/resume">Resume</Link>
  </Layout>
)

export default IndexPage
