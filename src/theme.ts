import { DARK_MODE, LIGHT_MODE } from './constants'

const themeModes = {
  [DARK_MODE]: {
    primaryColor: '#BDBDBD',
    secondaryColor: '#EEEEEE',
    backgroundColor: '#000000',
    cardBackgroundColor: '#333333',
    cardFontColor: '#BDBDBD',
    fontColor: '#FFFFFF',
  },
  [LIGHT_MODE]: {
    primaryColor: '#2A93D5',
    secondaryColor: '#135589',
    backgroundColor: '#FFFFFF',
    cardBackgroundColor: '#135589',
    cardFontColor: '#FFFFFF',
    fontColor: '#000000',
  },
}

const baseTheme = {
  fontSize: {
    small: '12px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
    xxlarge: '32px',
  },
  spacing: {
    small: '4px',
    medium: '8px',
    large: '16px',
    xlarge: '32px',
  },
  icon: {
    height: '40px',
  },
}

const getTheme = mode => {
  return {
    ...baseTheme,
    ...themeModes[mode],
    ...themeModes,
  }
}

export default getTheme
