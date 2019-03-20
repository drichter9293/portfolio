import React from 'react';

import { css } from '@emotion/core';

import Experience from './Experience';

const Resume: React.FunctionComponent = () => {
  return (
    <div
      css={css`
        color: white;
      `}
    >
      <Experience />
    </div>
  )
}

export default Resume
