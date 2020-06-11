import React, { createContext, useEffect, useState } from 'react'
import { STATE_CSS_VARIABLES } from '../settings'

export const AppStateContext = createContext()

export const AppStateProvider = ({ children }) => {
  const [appState, setAppState] = useState('splash')

  useEffect(() => {
    document.documentElement.setAttribute('data-state', appState)
    Object.entries(STATE_CSS_VARIABLES).forEach(([name, valueByMode]) => {
      document.documentElement.style.setProperty(
        `--${name}`,
        valueByMode[appState]
      )
    })
  }, [appState])

  return (
    <AppStateContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppStateContext.Provider>
  )
}
