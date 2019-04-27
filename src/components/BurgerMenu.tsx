import React from 'react'

import { withTheme } from 'emotion-theming'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'

import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MenuItem = styled(Link)`
  font-size: ${props => props.theme.fontSize.xlarge};
  text-decoration: none;
  :focus {
    outline: none;
  }
`

interface MenuItemI {
  title: string
  to: string
}

interface Props {
  menuItems: MenuItemI[]
  isMenuOpen: boolean
  theme: any
}

const OPACITY = '33'

const BurgerMenu: React.FunctionComponent<Props> = withTheme(
  ({ menuItems, isMenuOpen, theme }) => {
    const styles = {
      bmBurgerButton: {
        width: '36px',
        height: '30px',
      },
      bmBurgerBarsHover: {
        background: theme.primaryColor,
      },
      bmMenuWrap: {
        position: 'fixed',
        width: '230px',
      },
      bmMenu: {
        background: theme.backgroundColor,
        padding: '55px 0',
        fontSize: '1.15em',
      },
      bmBurgerBars: {},
      bmCross: {},
      bmCrossButton: {
        height: '32px',
        width: '32px',
        top: theme.spacing.medium,
        left: theme.spacing.medium,
      },
      bmItem: {
        padding: `${theme.spacing.medium} ${theme.spacing.large}`,
        color: theme.primaryColor,
      },
      bmItemList: {},
      bmMorphShape: {},
      bmOverlay: {
        background: `${theme.primaryColor}${OPACITY}`,
      },
    }
    return (
      <Menu
        customBurgerIcon={false}
        isOpen={isMenuOpen}
        customCrossIcon={
          <FontAwesomeIcon icon={faTimes} color={theme.primaryColor} />
        }
        styles={styles}
      >
        {menuItems.map(menuItem => (
          <MenuItem
            key={menuItem.title}
            theme={theme}
            to={menuItem.to}
            activeStyle={{
              backgroundColor: theme.primaryColor,
              color: theme.backgroundColor,
            }}
          >
            {menuItem.title}
          </MenuItem>
        ))}
      </Menu>
    )
  }
)

export default BurgerMenu
