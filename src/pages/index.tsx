import React from 'react'

import styled from '@emotion/styled'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import favicon from '../images/favicon.svg'

const WrapperDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.primaryColor};
`

const Logo = styled.div`
  margin-bottom: ${props => props.theme.spacing.xlarge};
`

const Name = styled.h1`
  font-size: 80px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 800px) {
    font-size: 60px;
  }
`

const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 200;
  font-style: italic;
  @media (max-width: 800px) {
    font-size: 30px;
  }
`

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`daniel`, `richter`, `portfolio`]} />
      <WrapperDiv>
        <Logo>
          <img src={favicon} height="100%" width="auto" />
        </Logo>
        <div>
          <Name>DANIEL RICHTER</Name>
          <Title>SOFTWARE ENGINEER</Title>
        </div>
      </WrapperDiv>
    </Layout>
  )
}

export default IndexPage
