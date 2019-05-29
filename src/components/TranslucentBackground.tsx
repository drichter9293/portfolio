import styled from '@emotion/styled'

const OPACITY = 'BB' // 80% Opacity in Hex

const TranslucentBackground = styled.div`
  background-color: ${props => props.theme.backgroundColor + OPACITY};
  background-clip: padding-box;
  border-image: ${props =>
    `linear-gradient(
      ${props.theme.backgroundColor}00,
      ${props.theme.backgroundColor}${OPACITY},
      ${props.theme.backgroundColor}00
    ) 50% 0%`};
  border-width: ${props => props.theme.spacing.large} 0px;
  border-style: solid;
`

export default TranslucentBackground
