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
  projects: [IProject]
}

export interface Company {
  name: string
  logo?: any
  positions: [IPosition]
}

interface Props {
  company: Company
}

const CompanyName = styled.div`
  width: 150px;
  font-weight: 600;
`

const Position = styled.div`
  margin-left: 20px;
`

const PositionTitle = styled.div`
  font-weight: 600;
`
const Project = styled.div`
  margin-left: 20px;
`

const ProjectName = styled.div`
  font-style: italic;
`

const Company: React.FunctionComponent<Props> = ({ company }) => {
  return (
    <div
      css={css`
        display: flex;
        padding-top: 5px;
        padding-bottom: 5px;
        :not(:last-child) {
          border-bottom: 1px solid black;
        }
      `}
    >
      <div
        style={{
          width: "150px",
          margin: "auto 0",
        }}
      >
        {company.logo ? (
          <Img
            style={{
              width: "150px",
              height: "30px",
            }}
            imgStyle={{
              objectFit: "contain",
              maxHeight: "30px",
            }}
            fluid={company.logo.childImageSharp.fluid}
          />
        ) : (
          <CompanyName>{company.name}</CompanyName>
        )}
      </div>
      <div>
        {company.positions.map(position => (
          <Position key={position.title}>
            <PositionTitle>{position.title}</PositionTitle>
            {position.projects.map(project => (
              <Project key={project.name}>
                <ProjectName>{project.name}</ProjectName>
                <div>{`- ${project.description}`}</div>
              </Project>
            ))}
          </Position>
        ))}
      </div>
    </div>
  )
}

export default Company
