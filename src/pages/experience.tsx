import React from 'react';

import Experience from '../components/Experience';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const SecondPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Experience" />
    <Experience />
  </Layout>
)

export default SecondPage
