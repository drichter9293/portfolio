import React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/layout';
import Resume from '../components/Resume';
import SEO from '../components/seo';

const SecondPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Resume" />
    <Link to="/">Go back to the homepage</Link>
    <p>Resume</p>
    <Resume />
  </Layout>
)

export default SecondPage
