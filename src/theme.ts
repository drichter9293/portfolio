import { DARK_MODE, LIGHT_MODE } from './constants';

const theme = {
  [DARK_MODE]: {
    primaryColor: "#BDBDBD",
    secondaryColor: "#EEEEEE",
    backgroundColor: "#000000",
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
    primaryColor: "#2A93D5",
    primaryVariantColor: "#135589",
    //secondaryColor: "#154360",
    secondaryColor: "#135589",
    //backgroundColor: "#F2F4F4", //"#E5E7E9",
    //backgroundColor: "#EDFAFD",
    backgroundColor: "white",
  },
}

export default theme
