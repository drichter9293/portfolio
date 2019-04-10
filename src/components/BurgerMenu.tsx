import React from 'react';

import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';

import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useTheme } from '../utils/theme';

const MenuItem = styled(Link)`
  color: ${props => props.theme.backgroundColor};
  font-size: 30px;
  text-decoration: none;
  padding: 5px;
`

interface MenuItem {
  title: string
  to: string
}

interface Props {
  menuItems: MenuItem[]
  isMenuOpen: boolean
}

const BurgerMenu: React.FunctionComponent<Props> = ({
  menuItems,
  isMenuOpen,
}) => {
  const theme = useTheme()

  const styles = {
    bmBurgerButton: {
      width: "36px",
      height: "30px",
    },
    bmBurgerBarsHover: {
      background: theme.primaryColor,
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
    bmBurgerBars: {},
    bmCross: {},
    bmCrossButton: {},
    bmItemList: {},
    bmMorphShape: {},
    bmOverlay: {},
  }
  return (
    <Menu
      customBurgerIcon={false}
      isOpen={isMenuOpen}
      customCrossIcon={
        <FontAwesomeIcon icon={faTimes} color={theme.backgroundColor} />
      }
      styles={styles}
    >
      {menuItems.map(menuItem => (
        <MenuItem
          key={menuItem.title}
          theme={theme}
          to={menuItem.to}
          css={css`
            :focus {
              outline: none;
            }
          `}
        >
          {menuItem.title}
        </MenuItem>
      ))}
    </Menu>
  )
}

export default BurgerMenu
