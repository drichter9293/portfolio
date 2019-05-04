import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import styled from '@emotion/styled'
import {
  faBriefcase,
  faChevronRight,
  faSitemap,
  faUsers,
  faUserTag
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  Element,
  ElementContent,
  ElementHeader,
  ElementRole,
  ElementRoleDates,
  ElementRoleTitle,
  ElementTitle,
  IconTitle,
  Item,
  ItemDescription,
  ItemDetail,
  ItemHeader,
  ItemTitle,
  Section
} from './Section'

const getData = () =>
  useStaticQuery(graphql`
    query {
      allExperiencesJson(filter: { displayInResume: { eq: true } }) {
        nodes {
          name
          logoLight {
            childImageSharp {
              fixed(width: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          positions {
            title
            startDate(formatString: "MMM YYYY")
            endDate(formatString: "MMM YYYY")
          }
          projects {
            name
            description
            details
          }
        }
      }
    }
  `)

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
  logoLight: any
  positions: [IPosition]
  projects: [IProject]
}

interface Props {
  theme: any
  company: Company
}

const Company: React.FunctionComponent<Props> = ({ theme, company }) => {
  return (
    <Element>
      <ElementHeader>
        <ElementTitle>
          <Img
            title={company.name}
            fixed={company.logoLight.childImageSharp.fixed}
          />
        </ElementTitle>
        {company.positions.map(position => (
          <ElementRole key={position.title}>
            <ElementRoleTitle>
              {/* <FontAwesomeIcon icon={faUserTag} size="lg" /> */}
              {position.title}
            </ElementRoleTitle>
            <ElementRoleDates>{`${position.startDate} — ${position.endDate ||
              'Present'}`}</ElementRoleDates>
          </ElementRole>
        ))}
      </ElementHeader>
      <ElementContent>
        {company.projects.map(project => (
          <Item key={project.name}>
            <ItemHeader>
              <IconTitle title={project.name} icon={faChevronRight} />
              <ItemDescription>{project.description}</ItemDescription>
            </ItemHeader>
            {project.details &&
              project.details.map((detail, index) => (
                <ItemDetail key={index}>{detail}</ItemDetail>
              ))}
          </Item>
        ))}
      </ElementContent>
    </Element>
  )
}

const Experience: React.FunctionComponent = () => {
  const data = getData()

  const experiences = data.allExperiencesJson.nodes
  return (
    <Section title="Work Experience" icon={faBriefcase}>
      {experiences.map(experience => (
        <Company key={experience.name} company={experience} />
      ))}
    </Section>
  )
}

export default Experience
