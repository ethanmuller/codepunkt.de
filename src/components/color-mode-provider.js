import React, { createContext, useEffect, useMemo, useState } from 'react'
import {
  COLORS,
  COLOR_MODE_STORAGE_KEY,
  INITIAL_COLOR_MODE_CSS_VARIABLE,
} from '../settings'

export const ColorModeContext = createContext()

export const ColorModeProvider = ({ children }) => {
  // TODO: how can i initialize this with a value from document on the client
  // render? (it's obvious that i have to initialize with undefined for ssr)
  const [colorMode, rawSetColorMode] = useState(undefined)

  /**
   * Because colors matter a lot for the initial page view, we're doing a lot
   * of the in gatsby-ssr to provide an initial color mode.
   * The initial color mode is read here on mount as the starting value
   * provided.by this component. It has to be read in useEffect and cannot
   * be directly set on the useState statement above because window is not
   * available to read from in ssr and useEffect is only run on the client.
   */
  useEffect(() => {
    rawSetColorMode(
      document.documentElement.style.getPropertyValue(
        INITIAL_COLOR_MODE_CSS_VARIABLE
      )
    )
  }, [])

  /**
   * This component provides both the current color mode (see above) and a way
   * to change it. Whenever the color mode changes, it is persisted to
   * localStorage, added as a data attribute to the HTML element and all
   * --color-something CSS variables are recomputed and also set on the HTML
   * element.
   *
   * TODO: is the data-mode attribute required?
   */
  const contextValue = useMemo(() => {
    const setColorMode = (newValue) => {
      localStorage.setItem(COLOR_MODE_STORAGE_KEY, newValue)
      document.documentElement.setAttribute('data-mode', newValue)
      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        document.documentElement.style.setProperty(
          `--color-${name}`,
          colorByTheme[newValue]
        )
      })
      rawSetColorMode(newValue)
    }

    return {
      colorMode,
      setColorMode,
    }
  }, [colorMode, rawSetColorMode])

  return (
    <ColorModeContext.Provider value={contextValue}>
      {children}
    </ColorModeContext.Provider>
  )
}
