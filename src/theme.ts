import { DARK_MODE, LIGHT_MODE } from './constants'

const themeModes = {
  [DARK_MODE]: {
    primaryColor: '#BDBDBD',
    secondaryColor: '#EEEEEE',
    backgroundColor: '#000000',
    fontColor: '#FFFFFF',
  },
  // [DARK_MODE]: {
  //   primaryColor: "#999",
  //   secondaryColor: "#ccc",
  //   backgroundColor: "#1a1919",
  // },
  // [LIGHT_MODE]: {
  //   primaryColor: "#444",
  //   secondaryColor: "#000",
  //   backgroundColor: "#fff",
  // },
  [LIGHT_MODE]: {
    //primaryColor: "#2471A3",
    primaryColor: '#2A93D5',
    primaryVariantColor: '#135589',
    //secondaryColor: "#154360",
    secondaryColor: '#135589',
    //backgroundColor: "#F2F4F4", //"#E5E7E9",
    //backgroundColor: "#EDFAFD",
    backgroundColor: '#FFFFFF',
    fontColor: '#000000',
  },
}

const baseTheme = {
  fontSize: {
    small: '12px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
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
