import throttlefn from 'lodash/throttle'
import { useCallback, useEffect, useState } from 'react'

export const useScroll = ({ throttle = 100, onScroll = null } = {}) => {
  const [scroll, setScroll] = useState({ x: window.scrollX, y: window.scrollY })
  const handleScroll = useCallback(() => {
    setScroll({ x: window.scrollX, y: window.scrollY })
    if (typeof onScroll === 'function') {
      onScroll({ x: window.scrollX, y: window.scrollY })
    }
  }, [onScroll])

  useEffect(() => {
    const handleScrollThrottled = throttlefn(handleScroll, throttle)
    window.addEventListener('scroll', handleScrollThrottled)
    return () => {
      window.removeEventListener('scroll', handleScrollThrottled)
    }
  }, [handleScroll, throttle])

  return scroll
}
