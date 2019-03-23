import React from 'react';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

import githubLogo from '../images/github.svg';
import gmailLogo from '../images/gmail.svg';
import linkedInLogo from '../images/linkedin.svg';

const Icon = styled.img`
  height: 50px;
`

const SocialMedia: React.FunctionComponent = () => {
  return (
    <div
      css={css`
        display: flex;
        img {
          margin-bottom: 0px;
          margin-right: 10px;
        }
      `}
    >
      <a href="https://github.com/drichter9293">
        <Icon alt="GitHub" title="GitHub" src={githubLogo} />
      </a>
      <a href="mailto:drichter9293@gmail.com">
        <Icon alt="Email" title="Email" src={gmailLogo} />
      </a>
      <a href="https://www.linkedin.com/in/drichter9293">
        <Icon alt="LinkedIn" title="LinkedIn" src={linkedInLogo} />
      </a>
    </div>
  )
}

export default SocialMedia
