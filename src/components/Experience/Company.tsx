import React from 'react';

import Img from 'gatsby-image';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { LIGHT_MODE } from '../../constants';
import { useTheme, useThemeMode } from '../../utils/theme';

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
  name: string
  logoLight?: any
  logoDark?: any
  positions: [IPosition]
  projects: [IProject]
}

interface Props {
  company: Company
}

const CompanyName = styled.div`
  width: 250px;
  height: 40px;
  font-weight: 600;
  margin-bottom: 20px;
`

const Position = styled.div`
  padding-left: 10px;
  padding-bottom: 10px;
`

const PositionTitle = styled.div`
  font-size: 20px;
`

const PositionDates = styled.div`
  padding-left: 10px;
  font-size: 16px;
  font-style: italic;
`
const Project = styled.div`
  flex-basis: 250px;
  padding: 8px;
`

const ProjectName = styled.div`
  font-size: 20px;
  padding-bottom: 8px;
  flex-basis: 250px;
`

const ProjectDescription = styled.div`
  color: ${props => props.theme.secondaryColor};
  font-size: 16px;
  font-style: italic;
`

const ProjectDetail = styled.div`
  color: ${props => props.theme.secondaryColor};
  font-size: 16px;
  margin-left: 16px;
  padding-bottom: 5px;
`

const Company: React.FunctionComponent<Props> = ({ company }) => {
  const themeMode = useThemeMode()
  const theme = useTheme()
  const logo = themeMode === LIGHT_MODE ? company.logoLight : company.logoDark

  return (
    <div
      css={css`
        display: flex;
        padding: 20px;
        :not(:last-child) {
          border-bottom: 1px solid ${theme.secondaryColor};
        }
      `}
    >
      <div
        css={css`
          width: 250px;
          margin: auto 0;
        `}
      >
        {logo ? (
          <CompanyName>
            <Img
              imgStyle={{
                objectFit: "contain",
                maxHeight: "40px",
              }}
              fluid={logo.childImageSharp.fluid}
            />
          </CompanyName>
        ) : (
          <CompanyName>{company.name}</CompanyName>
        )}
        <div>
          {company.positions.map(position => (
            <Position key={position.title} theme={theme}>
              <PositionTitle>{position.title}</PositionTitle>
              <PositionDates>{`${position.startDate} - ${position.endDate ||
                "Present"}`}</PositionDates>
            </Position>
          ))}
        </div>
      </div>
      <div
        css={css`
          min-width: 500px;
          @media (max-width: 500px) {
            min-width: 320px;
          }
          margin-left: 32px;
        `}
      >
        {company.projects.map(project => (
          <Project key={project.name}>
            <div
              css={css`
                display: flex;
                align-items: baseline;
              `}
            >
              <ProjectName theme={theme}>{project.name}</ProjectName>
              <ProjectDescription theme={theme}>
                {project.description}
              </ProjectDescription>
            </div>
            {project.details &&
              project.details.map((detail, index) => (
                <ProjectDetail key={index} theme={theme}>
                  {`– ${detail}`}
                </ProjectDetail>
              ))}
          </Project>
        ))}
      </div>
    </div>
  )
}

export default Company
