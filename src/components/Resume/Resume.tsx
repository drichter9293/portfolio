import React from 'react'

import styled from '@emotion/styled'

import Education from './Education'
import Experience from './Experience'
import Footer from './Footer'
import Header from './Header'
import Projects from './Projects'
import Skills from './Skills'

const ResumeWrapper = styled.div`
  width: 8.5in;
  height: 11in;
  margin: auto;
  display: grid;
  grid-template-rows:
    [header-start] fit-content(20%)
    [header-end body-start] auto [body-end footer-start] fit-content(10%)
    [footer-end];
  grid-template-columns: 1fr 1fr;
  column-gap: ${props => props.theme.spacing.xlarge};
  row-gap: ${props => props.theme.spacing.large};
  -webkit-print-color-adjust: exact;
`

const HeaderWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: header-start
  grid-row-end: header-end;
`

const LeftColumn = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: body-start
  grid-row-end: body-end;
  padding-left: ${props => props.theme.spacing.xlarge};
`

const RightColumn = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: body-start
  grid-row-end: body-end;
  padding-right: ${props => props.theme.spacing.xlarge};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const FooterWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: footer-start
  grid-row-end: footer-end;
`

const Resume: React.FunctionComponent = () => {
  return (
    <ResumeWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <LeftColumn>
        <Experience />
      </LeftColumn>
      <RightColumn>
        <Projects />
        <Education />
        <Skills />
      </RightColumn>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </ResumeWrapper>
  )
}

export default Resume
