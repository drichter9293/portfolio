import React from 'react'

import { faChevronRight, faHiking } from '@fortawesome/free-solid-svg-icons'

import {
  ElementContent,
  IconTitle,
  Item,
  ItemDetail,
  ItemHeader,
  ItemTitle,
  Section
} from './Section'

const Skills: React.FC = () => {
  return (
    <Section title="Skills" icon={faHiking}>
      <ElementContent>
        <Item>
          <IconTitle title="Programming Languages" icon={faChevronRight} />
          <ItemDetail>
            Javascript (ES6+), Typescript, GraphQL, CSS/Sass
          </ItemDetail>
        </Item>
        <Item>
          <IconTitle title="Libraries & Frameworks" icon={faChevronRight} />
          <ItemDetail>React, Gatsby, Node.js, Express</ItemDetail>
        </Item>
        <Item>
          <IconTitle title="Tools & Platforms" icon={faChevronRight} />
          <ItemDetail>Git, Netlify, Heroku</ItemDetail>
        </Item>
      </ElementContent>
    </Section>
  )
}

export default Skills
