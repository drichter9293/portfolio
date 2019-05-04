import React from 'react'

import { css } from '@emotion/core'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import logo from '../images/favicon.svg'

const WrapperDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.primaryColor};
`

const Name = styled.h1`
  font-size: 80px;
  font-weight: 300;
  margin-bottom: 20px;
  @media (max-width: 800px) {
    font-size: 40px;
  }
`

const Title = styled.h2`
  font-size: 40px;
  font-weight: 200;
  font-style: italic;
  @media (max-width: 800px) {
    font-size: 20px;
  }
`

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Home" keywords={[`daniel`, `richter`, `portfolio`]} />
    <WrapperDiv>
      <img src={logo} css={css``} />
      <Name>DANIEL RICHTER</Name>
      <Title>SOFTWARE ENGINEER</Title>
    </WrapperDiv>
  </Layout>
)

export default IndexPage
