import React from 'react'

import styled from '@emotion/styled'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterWrapper = styled.div`
  color: ${props => props.theme.primaryColor};
  text-align: center;
  padding-bottom: ${props => props.theme.spacing.large};
`

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <span>Built in </span>
      <FontAwesomeIcon icon={faReact} size="lg" />
      <span> React</span>
    </FooterWrapper>
  )
}

export default Footer
