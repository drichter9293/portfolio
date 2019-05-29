import useDarkMode from 'use-dark-mode'

import { DARK_MODE, LIGHT_MODE } from '../constants'
import getTheme from '../theme'

export const useThemeMode = () => {
  const darkMode = useDarkMode()
  return darkMode.value ? DARK_MODE : LIGHT_MODE
}

export const useTheme = () => {
  const themeMode = useThemeMode()
  const theme = getTheme(themeMode)
  return theme[themeMode]
}
