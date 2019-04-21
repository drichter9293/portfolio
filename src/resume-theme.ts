import { LIGHT_MODE } from './constants'
import getTheme from './theme'

const themeOverrides = {
  fontSize: {
    small: '9px',
    medium: '12px',
    large: '15px',
    xlarge: '18px',
    xxlarge: '36px',
  },
  icon: {
    height: '25px',
  },
}

const theme = {
  ...getTheme(LIGHT_MODE),
  ...themeOverrides,
}

export default theme
