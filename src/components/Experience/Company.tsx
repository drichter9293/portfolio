import React from 'react'

import { withTheme } from 'emotion-theming'
import Img from 'gatsby-image'

import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { LIGHT_MODE } from '../../constants'
import { useTheme, useThemeMode } from '../../utils/theme'

export interface IProject {
  name: string
  description: string
  details: string[]
}

export interface IPosition {
  title: string
  startDate: string
  endDate?: string
}

export interface Company {
  displayInResume: boolean
  name: string
  href: string
  logoLight?: any
  logoDark?: any
  positions: [IPosition]
  projects: [IProject]
}

interface Props {
  theme: any
  company: Company
}

const CompanyWrapper = styled.div`
  display: flex;
  padding: 20px;
  :not(:last-child) {
    border-bottom: ${props => `1px solid ${props.theme.secondaryColor}`};
  }
  @media (max-width: 500px) {
    flex-wrap: wrap;
    padding: 0;
  }
`

const CompanyDetails = styled.div`
  width: 32%;
  min-width: 150px;
  max-width: 250px;
  flex-grow: 1;
`

const CompanyName = styled.div`
  height: ${props => props.theme.icon.height};
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing.large};
`

const Position = styled.div`
  padding-left: ${props => props.theme.spacing.medium};
  padding-bottom: ${props => props.theme.spacing.medium};
`

const PositionTitle = styled.div`
  font-size: ${props => props.theme.fontSize.large};
`

const PositionDates = styled.div`
  padding-left: ${props => props.theme.spacing.medium};
  font-size: ${props => props.theme.fontSize.medium};
  font-style: italic;
`

const Projects = styled.div`
  flex-grow: 1;
  margin-left: 16px;
  @media (max-width: 500px) {
    min-width: 320px;
    margin-left: 0;
  }
`

const Project = styled.div`
  padding: ${props => props.theme.spacing.medium};
`

const ProjectHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding-bottom: ${props => props.theme.spacing.medium};
  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`

const ProjectName = styled.div`
  font-size: ${props => props.theme.fontSize.large};
  color: ${props => props.theme.primaryColor};
  padding-right: ${props => props.theme.spacing.medium};
  width: 30%;
  @media (max-width: 500px) {
    flex-grow: 1;
  }
`

const ProjectDescription = styled.div`
  color: ${props => props.theme.secondaryColor};
  font-size: ${props => props.theme.fontSize.medium};
  font-style: italic;
`

const ProjectDetail = styled.div`
  font-size: ${props => props.theme.fontSize.medium};
  margin-left: ${props => props.theme.spacing.large};
  padding-bottom: ${props => props.theme.spacing.small};
`

const Company: React.FunctionComponent<Props> = ({ theme, company }) => {
  const themeMode = useThemeMode()
  const logo = themeMode === LIGHT_MODE ? company.logoLight : company.logoDark
  return (
    <CompanyWrapper>
      <CompanyDetails>
        {logo ? (
          <CompanyName>
            <a href={company.href} title={company.name}>
              <Img
                imgStyle={{
                  objectFit: 'contain',
                  maxHeight: theme.icon.height,
                }}
                fluid={logo.childImageSharp.fluid}
              />
            </a>
          </CompanyName>
        ) : (
          <CompanyName>{company.name}</CompanyName>
        )}
        <div>
          {company.positions.map(position => (
            <Position key={position.title}>
              <PositionTitle>{position.title}</PositionTitle>
              <PositionDates>{`${position.startDate} — ${position.endDate ||
                'Present'}`}</PositionDates>
            </Position>
          ))}
        </div>
      </CompanyDetails>
      <Projects>
        {company.projects.map(project => (
          <Project key={project.name}>
            <ProjectHeader>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectHeader>
            {project.details &&
              project.details.map((detail, index) => (
                <ProjectDetail key={index}>{`– ${detail}`}</ProjectDetail>
              ))}
          </Project>
        ))}
      </Projects>
    </CompanyWrapper>
  )
}

const CompanyWithTheme = withTheme(Company)

export default CompanyWithTheme
