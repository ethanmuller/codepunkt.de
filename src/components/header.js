import { Link } from 'gatsby'
import { css } from 'linaria'
import React from 'react'
import { Logo } from './logo'
import { Menu } from './menu'

export const Header = (props) => {
  console.log('header', props)

  return (
    <header className={header}>
      <Link to="/">
        <Logo />
      </Link>
      <Menu />
    </header>
  )
}

const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 var(--content-padding);
  height: var(--header-height);
`
