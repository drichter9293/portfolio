import React from 'react';

import Img from 'gatsby-image';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

export interface IProject {
  name: string
  description: string
}

export interface IPosition {
  title: string
  startDate: string
  endDate?: string
}

export interface Company {
  name: string
  logo?: any
  positions: [IPosition]
  projects: [IProject]
}

interface Props {
  company: Company
}

const CompanyName = styled.div`
  width: 200px;
  height: 30px;
  font-weight: 600;
  margin-bottom: 10px;
`

const Position = styled.div`
  padding-left: 10px;
`

const PositionTitle = styled.div`
  font-size: 16px;
`

const PositionDates = styled.div`
  padding-left: 10px;
  font-size: 14px;
  font-style: italic;
`
const Project = styled.div`
  margin-left: 20px;
`

const ProjectName = styled.div`
  font-style: italic;
`

const ProjectDescription = styled.div`
  font-size: 14px;
  margin-left: 20px;
`

const Company: React.FunctionComponent<Props> = ({ company }) => {
  return (
    <div
      css={css`
        display: flex;
        padding: 10px;
        :not(:last-child) {
          border-bottom: 1px solid black;
        }
      `}
    >
      <div
        style={{
          width: "200px",
          margin: "auto 0",
        }}
      >
        {company.logo ? (
          <CompanyName>
            <Img
              imgStyle={{
                objectFit: "contain",
                maxHeight: "30px",
              }}
              fluid={company.logo.childImageSharp.fluid}
            />
          </CompanyName>
        ) : (
          <CompanyName>{company.name}</CompanyName>
        )}
        <div>
          {company.positions.map(position => (
            <Position>
              <PositionTitle>{position.title}</PositionTitle>
              <PositionDates>{`${position.startDate} - ${position.endDate ||
                "Present"}`}</PositionDates>
            </Position>
          ))}
        </div>
      </div>
      <div>
        {company.projects.map(project => (
          <Project key={project.name}>
            <ProjectName>{project.name}</ProjectName>
            <ProjectDescription>{`${project.description}`}</ProjectDescription>
          </Project>
        ))}
      </div>
    </div>
  )
}

export default Company
