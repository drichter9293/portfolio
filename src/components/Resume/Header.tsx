import React from 'react'

import styled from '@emotion/styled'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLink, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../../images/logo-light.svg'

const HeaderWrapper = styled.div`
  background-color: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.backgroundColor};
  display: flex;
  align-items: center;
`

const LogoWrapper = styled.div`
  width: 18%;
  flex-shrink: 0;
  padding: ${props => props.theme.spacing.medium}
    ${props => props.theme.spacing.large};
  img {
    margin: 0;
    display: block;
  }
`

const NameTitleWrapper = styled.div`
  width: 50%;
  flex-shrink: 0;
  padding-left: ${props => props.theme.spacing.medium};
`

const Name = styled.div`
  font-size: 50px;
  font-weight: 500;
  display: inline-block;
`

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  font-style: italic;
  padding-bottom: ${props => props.theme.spacing.small};
  display: inline-block;
`

const ContactInfo = styled.div`
  font-size: ${props => props.theme.fontSize.large};
  flex-grow: 1;
`

const ContactItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing.small} 0;
`

const ContactItemIcon = styled.div`
  width: 40px;
  text-align: center;
  padding-right: ${props => props.theme.spacing.medium};
`

const ICON_SIZE = 'lg'

const ContactItem = ({ icon, text }) => {
  return (
    <ContactItemWrapper>
      <ContactItemIcon>
        <FontAwesomeIcon icon={icon} size={ICON_SIZE} />
      </ContactItemIcon>
      {text}
    </ContactItemWrapper>
  )
}

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img src={logo} />
      </LogoWrapper>
      <NameTitleWrapper>
        <Name>Daniel Richter</Name>
        <Title>Software Engineer</Title>
      </NameTitleWrapper>
      <ContactInfo>
        <ContactItem icon={faLink} text="danielrichter.dev" />
        <ContactItem icon={faGithub} text="github.com/drichter9293" />
        <ContactItem icon={faEnvelope} text="drichter9293@gmail.com" />
        <ContactItem icon={faPhone} text="(954) 812-0112" />
      </ContactInfo>
    </HeaderWrapper>
  )
}

export default Header
