import React from 'react';

import { Link } from 'gatsby';
import { useMedia } from 'use-media';

import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useTheme } from '../utils/theme';
import BurgerMenu from './BurgerMenu';
import DarkModeToggle from './DarkModeToggle';
import SocialMedia from './SocialMedia';
import Tabs from './Tabs';

const ICON_SIZE = "2x"

const Header: React.FunctionComponent = () => {
  const theme = useTheme()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const isWide = useMedia({ minWidth: "600px" })

  const menuItems = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Projects",
      to: "/projects",
    },
    {
      title: "Resume",
      to: "/resume",
    },
  ]

  return (
    <>
      {!isWide && <BurgerMenu menuItems={menuItems} isMenuOpen={isMenuOpen} />}
      <header
        css={css`
          display: flex;
          align-items: center;
          padding: 10px 14px;
        `}
      >
        {isWide ? (
          <Tabs menuItems={menuItems} />
        ) : (
          <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={faBars} size={ICON_SIZE} />
          </div>
        )}
        <div
          css={css`
            flex-grow: 1;
          `}
        />
        <DarkModeToggle />
        <SocialMedia />
      </header>
    </>
  )
}

export default Header
