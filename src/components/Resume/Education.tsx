import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import styled from '@emotion/styled'
import {
  faChevronRight,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons'

import {
  Element,
  ElementContent,
  ElementHeader,
  ElementRole,
  ElementRoleDates,
  ElementRoleTitle,
  ElementTitle,
  IconTitle,
  ItemTitle,
  Section
} from './Section'

const Item = styled.div`
  display: flex;
`

const ItemKey = styled.div`
  flex-shrink: 0;
  width: 25%;
`

const ItemValue = styled.div`
  font-size: ${props => props.theme.fontSize.large};
  color: ${props => props.theme.secondaryColor};
`

export const query = graphql`
  query {
    file(relativePath: { eq: "university-of-miami.png" }) {
      childImageSharp {
        fixed(height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Education: React.FunctionComponent = () => {
  const data = useStaticQuery(query)
  console.log(data)
  const logo = data.file.childImageSharp.fixed
  return (
    <Section title="Education" icon={faGraduationCap}>
      <Element>
        <ElementHeader>
          <ElementTitle>
            <Img title="University of Miami" fixed={logo} />
          </ElementTitle>
          <ElementRole>
            <ElementRoleTitle>Bachelor of Science</ElementRoleTitle>
            <ElementRoleDates>Aug 2012 — May 2015</ElementRoleDates>
          </ElementRole>
        </ElementHeader>
        <ElementContent>
          <Item>
            <ItemKey>
              <IconTitle title="GPA" icon={faChevronRight} />
            </ItemKey>
            <ItemValue>
              4.0 — <i>Summa Cum Laude</i>
            </ItemValue>
          </Item>
          <Item>
            <ItemKey>
              <IconTitle title="Majors" icon={faChevronRight} />
            </ItemKey>
            <ItemValue>Applied Physics & Computer Science</ItemValue>
          </Item>
          <Item>
            <ItemKey>
              <IconTitle title="Minors" icon={faChevronRight} />
            </ItemKey>
            <ItemValue>Biology, Chemistry, & Mathematics</ItemValue>
          </Item>
          <Item>
            <ItemKey>
              <IconTitle title="Honors" icon={faChevronRight} />
            </ItemKey>
            <ItemValue>Barry Goldwater Scholar</ItemValue>
          </Item>
        </ElementContent>
      </Element>
    </Section>
  )
}

export default Education
