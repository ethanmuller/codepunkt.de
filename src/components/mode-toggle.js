import React, { useContext } from 'react'
import { ColorModeContext } from './color-mode-provider'

export const ModeToggle = () => {
  const { colorMode, setColorMode } = useContext(ColorModeContext)

  console.log('mode toggle', { colorMode })
  return (
    <button
      aria-label="Dark mode"
      aria-pressed={colorMode === 'dark'}
      onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
    >
      {colorMode === 'dark' ? 'light' : 'dark'}
    </button>
  )
}
