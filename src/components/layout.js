import React from 'react'
import { AppStateProvider } from './app-state-provider'
import { ColorModeProvider } from './color-mode-provider'
import { Header } from './header'
import { Main } from './main'
import { SplashScreen } from './splash-screen'

export const Layout = ({ children, location }) => {
  console.log('layout')

  return (
    <AppStateProvider>
      <ColorModeProvider>
        <SplashScreen />
        <Header />
        <Main location={location}>{children}</Main>
      </ColorModeProvider>
    </AppStateProvider>
  )
}
