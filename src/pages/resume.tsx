import React from 'react'

import { ThemeProvider } from 'emotion-theming'

import Resume from '../components/Resume'
import theme from '../resume-theme'

const ResumePage: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <Resume />
  </ThemeProvider>
)

export default ResumePage
