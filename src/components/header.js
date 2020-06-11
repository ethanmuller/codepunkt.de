import { Link } from 'gatsby'
import React from 'react'
import { Logo } from './logo'
import { Menu } from './menu'
import { ModeToggle } from './mode-toggle'

export const Header = (props) => {
  console.log('header', props)

  return (
    <header>
      <Link to="/">
        <Logo />
      </Link>
      <Menu />
      <ModeToggle />
    </header>
  )
}
