import React from 'react';

import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';

import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useTheme } from '../utils/theme';
import DarkModeToggle from './DarkModeToggle';
import SocialMedia from './SocialMedia';
import Tab from './Tab';

const ICON_SIZE = "2x"

const MenuItem = styled(Link)`
  color: ${props => props.theme.backgroundColor};
  font-size: 30px;
  text-decoration: none;
  padding: 5px;
`

const Header: React.FunctionComponent = () => {
  const theme = useTheme()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const styles = {
    bmBurgerButton: {
      width: "36px",
      height: "30px",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      width: "100%",
    },
    bmMenu: {
      background: theme.secondaryColor,
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
  }

  return (
    <>
      <Menu
        customBurgerIcon={false}
        isOpen={isMenuOpen}
        customCrossIcon={
          <FontAwesomeIcon icon={faTimes} color={theme.backgroundColor} />
        }
        styles={styles}
      >
        <MenuItem theme={theme} to="/">
          Home
        </MenuItem>
        <MenuItem theme={theme} to="/resume">
          Resume
        </MenuItem>
      </Menu>
      <header
        css={css`
          display: flex;
          align-items: center;
          padding: 10px 14px;
        `}
      >
        {/* <Tab title="Home" to="/" />
    <Tab title="Resume" to="/resume" /> */}
        <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon icon={faBars} size={ICON_SIZE} />
        </div>
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
