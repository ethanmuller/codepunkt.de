import { css } from 'linaria'
import React from 'react'
import { AppStateProvider } from './app-state-provider'
import { BreakpointManager } from './breakpoint-manager'
import { ColorModeProvider } from './color-mode-provider'
import { Header } from './header'
import { Main } from './main'
import { ScrollIndicator } from './scroll-indicator'
import { SplashScreen } from './splash-screen'

export const Layout = ({ children, location }) => {
  console.log('layout')
  return (
    <AppStateProvider>
      <ColorModeProvider>
        <BreakpointManager />
        <SplashScreen />
        <ScrollIndicator />
        <Header />
        <Main location={location} className={main}>
          {children}
        </Main>
      </ColorModeProvider>
    </AppStateProvider>
  )
}

// TODO: min-height does not take header height into account
const main = css`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 12vh var(--content-padding) 0;
  min-height: calc(
    100vh - var(--header-height) - var(--indicator-height) - var(--frame-width) *
      2
  );

  /* ie9-11 hack, see https://stackoverflow.com/a/20095764 */
  display: block;
`
