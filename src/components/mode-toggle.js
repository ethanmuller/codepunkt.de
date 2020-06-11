import { css } from 'linaria'
import React, { memo, useContext } from 'react'
import { ColorModeContext } from './color-mode-provider'

export const ModeToggle = memo(() => {
  const { colorMode, setColorMode } = useContext(ColorModeContext)

  // If, for whatever reason, no colorMode is set, omit this component
  if (!colorMode) {
    return null
  }

  console.log('mode toggle', { colorMode })
  return (
    <button
      className={button}
      aria-label="Dark mode"
      aria-pressed={colorMode === 'dark'}
      onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
    >
      {colorMode === 'dark' ? 'light' : 'dark'}
    </button>
  )
})

const button = css`
  z-index: 3;
`
