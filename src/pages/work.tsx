import React from 'react'

import Experience from '../components/Experience'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import TranslucentBackground from '../components/TranslucentBackground'

const WorkPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Experience" />
    <TranslucentBackground>
      <Experience />
    </TranslucentBackground>
  </Layout>
)

export default WorkPage
