import React from 'react'

import styled from '@emotion/styled'

import Experience from '../components/Experience'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const OPACITY = 'BB' // 80% Opacity in Hex

const TranslucentBackground = styled.div`
  background-color: ${props => props.theme.backgroundColor + OPACITY};
  background-clip: padding-box;
  border-image: ${props =>
    `linear-gradient(${props.theme.backgroundColor}00, ${
      props.theme.backgroundColor
    }${OPACITY}) 100% 0%`};
  border-width: ${props => props.theme.spacing.large} 0px;
  border-style: solid;
`

const SecondPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Experience" />
    <TranslucentBackground>
      <Experience />
    </TranslucentBackground>
  </Layout>
)

export default SecondPage
