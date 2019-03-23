import React from 'react';

import { css } from '@emotion/core';

import DarkModeToggle from './DarkModeToggle';
import SocialMedia from './SocialMedia';
import Tab from './Tab';

const Header: React.FunctionComponent = () => (
  <header
    css={css`
      display: flex;
      padding: 10px 20px 10px 20px;
      margin-bottom: 1.45rem;
    `}
  >
    <Tab title="Home" to="/" />
    <Tab title="Resume" to="/resume" />
    <div
      css={css`
        margin-left: auto;
        display: flex;
        align-items: center;
      `}
    >
      <DarkModeToggle />
      <SocialMedia />
    </div>
  </header>
)

export default Header
