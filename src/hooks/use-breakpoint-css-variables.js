import { useEffect, useState } from 'react'
import { BREAKPOINTS, RESPONSIVE_CSS_VARIABLES } from '../settings'

export const useBreakpointCssVariables = () => {
  const [breakpointIndex, setBreakpointIndex] = useState(0)
  const handleResize = () =>
    setBreakpointIndex(
      BREAKPOINTS.reduce(
        (breakIndex, breakpointWidth, index) =>
          window.innerWidth >= breakpointWidth ? index + 1 : breakIndex,
        0
      )
    )

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    Object.entries(RESPONSIVE_CSS_VARIABLES).forEach(
      ([name, responsiveValues]) => {
        window.document.documentElement.style.setProperty(
          `--${name}`,
          responsiveValues[breakpointIndex]
        )
      }
    )
  }, [breakpointIndex])
}
