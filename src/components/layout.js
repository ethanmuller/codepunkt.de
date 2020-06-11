import { css } from 'linaria'
import React from 'react'
import { AppStateProvider } from './app-state-provider'
import { BreakpointManager } from './breakpoint-manager'
import { ColorModeProvider } from './color-mode-provider'
import { Header } from './header'
import { Main } from './main'
import { SplashScreen } from './splash-screen'

export const Layout = ({ children, location }) => {
  console.log('layout')
  return (
    <AppStateProvider>
      <ColorModeProvider>
        <BreakpointManager />
        <SplashScreen />
        <Header />
        <Main location={location} className={main}>
          {children}
        </Main>
      </ColorModeProvider>
    </AppStateProvider>
  )
}

const main = css`
  max-width: 1200px;
  width: 90%;
  /* ie9-11 hack, see https://stackoverflow.com/a/20095764 */
  display: block;
  margin: 120px auto 0;
  min-height: calc(100vh - 6rem - 160px);
  @media only screen and (min-width: 668px) {
    margin: 160px auto 0;
  }
`
