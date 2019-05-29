import React from 'react'

import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ICON_SIZE = '2x'

const Wrapper = styled.div`
  height: 2em;
  display: flex;
  a:not(:last-child) {
    margin-right: 20px;
  }
`

const iconCss = theme => css`
  color: ${theme.primaryColor};
  :hover {
    color: ${theme.secondaryColor};
  }
`

const SocialMedia: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <a href="https://github.com/drichter9293">
        <FontAwesomeIcon icon={faGithub} size={ICON_SIZE} css={iconCss} />
      </a>
      <a href="mailto:drichter9293@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} size={ICON_SIZE} css={iconCss} />
      </a>
      <a href="https://www.linkedin.com/in/drichter9293">
        <FontAwesomeIcon icon={faLinkedin} size={ICON_SIZE} css={iconCss} />
      </a>
    </Wrapper>
  )
}

export default SocialMedia
