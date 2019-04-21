import React from 'react'

import { ThemeProvider } from 'emotion-theming'

import Experience from '../components/Experience'
import theme from '../resume-theme'

const SecondPage: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <div
      style={{
        width: '210mm',
        height: '297mm',
        margin: 'auto',
        border: '1px solid black',
      }}
    >
      <div>
        <Experience />
      </div>
    </div>
  </ThemeProvider>
)

export default SecondPage
