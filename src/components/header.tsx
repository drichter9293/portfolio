import React from 'react';

import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import DarkModeToggle from './DarkModeToggle';

interface Props {
  siteTitle: string
}

const Header: React.FunctionComponent<Props> = ({ siteTitle }) => (
  <header
    style={{
      //background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Home
        </Link>
      </h1> */}
      <DarkModeToggle />
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
