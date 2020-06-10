import { Link } from 'gatsby'
import React, { useContext } from 'react'
import { ColorModeContext } from './color-mode-provider'
import { Menu } from './menu'

export const Header = (props) => {
  console.log('header', props)

  const { colorMode, setColorMode } = useContext(ColorModeContext)

  return (
    <header>
      <Link to="/">Codepunkt</Link>
      <Menu />
      <button
        aria-label="Dark mode"
        aria-pressed={colorMode === 'dark'}
        onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
      >
        {colorMode === 'dark' ? 'light' : 'dark'}
      </button>
    </header>
  )
}
