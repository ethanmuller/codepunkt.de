import React from 'react'
import { useBreakpointCssVariables } from '../hooks/use-breakpoint-css-variables'

// TODO: can this all be put into gatsby-ssr injected script?
export const BreakpointManager = () => {
  useBreakpointCssVariables()

  console.log('breakpoint-manager')
  return <></>
}
