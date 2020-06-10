import React from 'react'
import Terser from 'terser'
import { Layout } from './src/components/layout'
import {
  COLORS,
  COLOR_MODE_STORAGE_KEY,
  INITIAL_COLOR_MODE_CSS_VARIABLE,
  RESPONSIVE_CSS_VARIABLES,
} from './src/settings'

const setCssVariables = () => {
  const colors = '🌈'
  const colorModeStorageKey = '🔑'
  const colorModeCssVariable = '⚡️'
  const styleVariables = '🔧'

  const preferDarkQuery = '(prefers-color-scheme: dark)'
  const mediaQueryList = window.matchMedia(preferDarkQuery)
  const supportsColorSchemeQuery = mediaQueryList.media === preferDarkQuery

  const persistedColorMode = localStorage.getItem(colorModeStorageKey)

  let colorMode = 'light'
  if (typeof persistedColorMode === 'string') {
    colorMode = persistedColorMode
  } else if (supportsColorSchemeQuery) {
    colorMode = mediaQueryList.matches ? 'dark' : 'light'
  }

  let root = document.documentElement
  root.style.setProperty(colorModeCssVariable, colorMode)
  root.setAttribute('data-mode', colorMode)

  Object.entries(styleVariables).forEach(([name, responsiveValues]) => {
    // default to tablet portrait breakpoint
    root.style.setProperty(`--${name}`, responsiveValues[2])
  })

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`
    root.style.setProperty(cssVarName, colorByTheme[colorMode])
  })

  root.style.setProperty(`--body-overflow`, 'hidden')
}

/**
 * This converts the setCssVariables method to a string, inserts the color
 * options from the settings, wraps it in an immediately invoked function and
 * minifies the result with terser.
 *
 * The end result is then added to a script tag.
 */
const CssVariablesScriptTag = () => {
  const string = String(setCssVariables)
  const withConfig = string
    .replace("'🌈'", JSON.stringify(COLORS))
    .replace('🔑', COLOR_MODE_STORAGE_KEY)
    .replace('⚡️', INITIAL_COLOR_MODE_CSS_VARIABLE)
    .replace("'🔧'", JSON.stringify(RESPONSIVE_CSS_VARIABLES))
  const iiFunction = `(${withConfig})()`
  const minified = Terser.minify(iiFunction).code

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: minified }} />
}

/**
 * If the user has JS disabled, the injected script will never fire!
 * This means that they won't have any colors set, everything will be default
 * black and white.
 * We can solve for this by injecting a `<style>` tag into the head of the
 * document, which sets default values for all of our colors.
 * Only light mode will be available for users with JS disabled.
 */
const FallbackStyles = () => {
  // TODO: create fallbacks for RESPONSIVE_CSS_VARIABLES and --body-overflow
  // Create a string holding each CSS variable:
  const cssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}--color-${name}:${colorByTheme.light};`
    },
    ''
  )

  const wrappedInSelector = `html{${cssVariableString}}html::before,html::after{transition:width 0.25s ease-out;}body::before,body::after{transition:height 0.25s ease-out;}`

  return <style>{wrappedInSelector}</style>
}

// Add css variables script and fallback styles
export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<FallbackStyles />)
  setPreBodyComponents(<CssVariablesScriptTag />)
}

// Wrap with component that won’t get unmounted on page changes.
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
