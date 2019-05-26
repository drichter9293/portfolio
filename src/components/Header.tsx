import React from 'react'

import useMedia from 'react-use/lib/useMedia'

import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import BurgerMenu from './BurgerMenu'
import DarkModeToggle from './DarkModeToggle'
import SocialMedia from './SocialMedia'
import Tabs from './Tabs'

const ICON_SIZE = '2x'

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 14px;
`

const BurgerMenuWrapper = styled.div`
  color: ${props => props.theme.primaryColor};
`

const Header: React.FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  let [isWide, setIsWide] = React.useState<boolean | undefined>(undefined)
  const isMedia = useMedia('(min-width: 600px)')
  React.useLayoutEffect(() => {
    setIsWide(isMedia)
  }, [isMedia])

  const menuItems = [
    {
      title: 'Home',
      to: '/',
    },
    {
      title: 'Projects',
      to: '/projects/',
    },
    {
      title: 'Experience',
      to: '/experience/',
    },
    {
      staticAsset: true,
      title: 'Resume',
      to: '/daniel-richter-resume.pdf',
    },
  ]

  return (
    <HeaderWrapper>
      {isWide ? (
        <Tabs menuItems={menuItems} />
      ) : (
        <>
          <BurgerMenuWrapper onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={faBars} size={ICON_SIZE} />
          </BurgerMenuWrapper>
          <div
            css={css`
              position: absolute;
              top: 0;
              left: 0;
            `}
          >
            <BurgerMenu menuItems={menuItems} isMenuOpen={isMenuOpen} />
          </div>
        </>
      )}
      <div
        css={css`
          flex-grow: 1;
        `}
      />
      <DarkModeToggle />
      <SocialMedia />
    </HeaderWrapper>
  )
}

export default Header
