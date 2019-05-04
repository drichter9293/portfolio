import React, { ReactNode } from 'react'

import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SectionWrapper = styled.div`
  width: 100%;
`

export const SectionHeader: React.FC<IconTitleProps> = ({ title, icon }) => {
  return (
    <div
      css={theme => ({
        color: theme.secondaryColor,
        display: 'flex',
        fontSize: theme.fontSize.xlarge,
        fontWeight: 600,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: theme.spacing.medium,
      })}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
      <div
        css={theme => ({
          paddingLeft: theme.spacing.medium,
          color: theme.fontColor,
        })}
      >
        {title}
      </div>
    </div>
  )
}

export const SectionContent = styled.div`
  width: 100%;
`

export const Element = styled.div`
  color: ${props => props.theme.primaryColor};
`

export const ElementHeader = styled.div`
  margin-bottom: ${props => props.theme.spacing.medium};
`

export const ElementTitle = styled.div`
  padding-bottom: ${props => props.theme.spacing.small};
  display: inline;
  img {
    margin-bottom: 0;
  }
`

export const ElementRole = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

export const ElementRoleTitle = styled.div`
  flex-grow;
  color: ${props => props.theme.primaryColor};
`

export const ElementRoleDates = styled.div`
  color: ${props => props.theme.secondaryColor};
  font-style: italic;
  font-size: ${props => props.theme.fontSize.medium};
`

export const ElementContent = styled.div`
  & > div:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing.medium};
  }
`

export const Item = styled.div`
  flex-grow: 1;
`

export const ItemHeader = styled.div`
  padding-bottom: ${props => props.theme.spacing.small};
`

export const ItemTitle = styled.div`
  font-size: ${props => props.theme.fontSize.large};
  color: ${props => props.theme.primaryColor};
`

export const ItemDescription = styled.div`
  color: ${props => props.theme.secondaryColor};
  font-size: ${props => props.theme.fontSize.medium};
  font-style: italic;
`

export const ItemDetail = styled.div`
  color: ${props => props.theme.fontColor};
  font-size: ${props => props.theme.fontSize.medium};
  :before {
    content: '– ';
    font-weight: bold;
  }
  :not(:last-child) {
    padding-bottom: ${props => props.theme.spacing.small};
  }
`

interface IconTitleProps {
  title: string
  icon: IconDefinition
}

export const IconTitle: React.FC<IconTitleProps> = ({ title, icon }) => {
  return (
    <div
      css={theme => ({
        display: 'flex',
        alignItems: 'center',
        color: theme.secondaryColor,
      })}
    >
      <FontAwesomeIcon icon={icon} size="sm" />
      <div
        css={theme => ({
          paddingLeft: theme.spacing.medium,
          color: theme.primaryColor,
        })}
      >
        {title}
      </div>
    </div>
  )
}

interface Props {
  title: string
  icon: IconDefinition
  children: ReactNode
}

export const Section: React.FunctionComponent<Props> = ({
  title,
  icon,
  children,
}) => {
  return (
    <SectionWrapper>
      <SectionHeader title={title} icon={icon} />
      <SectionContent>{children}</SectionContent>
    </SectionWrapper>
  )
}
