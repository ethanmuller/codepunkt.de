import { css } from 'linaria'
import React, { useCallback, useEffect, useRef, useState } from 'react'

export const ScrollIndicator = () => {
  const ticking = useRef(false)
  const [scrollPercent, setScrollPercent] = useState(0)

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const scrollHeight = document.documentElement.scrollHeight
        const innerHeight = window.innerHeight
        const scrollY = window.scrollY
        const maxScrollY = Math.max(0, scrollHeight - innerHeight)
        setScrollPercent(100 * (scrollY / maxScrollY))
        ticking.current = false
      })
      ticking.current = true
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  console.log('scroll-indicator')
  return (
    <div className={wrapper}>
      <div className={indicator} style={{ width: `${scrollPercent}%` }} />
    </div>
  )
}

const wrapper = css`
  position: fixed;
  top: 0px;
  left: 0px;
  height: calc(var(--indicator-height) / 2);
  background: var(--color-line);
  width: 100%;
  z-index: 7;
`

const indicator = css`
  height: 100%;
  background: var(--color-indicator);
`
