import React from 'react'

import styled from '@emotion/styled'
import {
  faChevronRight,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons'

import * as miamiLogo from '../../images/university-of-miami.png'
import {
  Element,
  ElementContent,
  ElementHeader,
  ElementRole,
  ElementRoleDates,
  ElementRoleTitle,
  ElementTitle,
  IconTitle,
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

const Education: React.FunctionComponent = () => {
  return (
    <Section title="Education" icon={faGraduationCap}>
      <Element>
        <ElementHeader>
          <ElementTitle>
            <img
              title="University of Miami"
              src={miamiLogo}
              style={{ height: '40px' }}
            />
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
