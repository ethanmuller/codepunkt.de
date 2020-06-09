import React from 'react'
import { Menu } from './menu'

export const Layout = ({ children }) => {
  return (
    <>
      <header>Codepunkt</header>
      <Menu />
      <main>{children}</main>
    </>
  )
}
