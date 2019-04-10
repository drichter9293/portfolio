import React from 'react';

import Layout from '../components/Layout';
import Resume from '../components/Resume';
import SEO from '../components/Seo';

const SecondPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Resume" />
    <Resume />
  </Layout>
)

export default SecondPage
