import throttlefn from 'lodash/throttle'
import { useEffect, useState } from 'react'

export const useWindowSize = ({ throttle = 100 } = {}) => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const handleResize = () => {
    setSize({ width: window.innerWidth, height: window.innerHeight })
  }

  useEffect(() => {
    const handleResizeThrottled = throttlefn(handleResize, throttle)
    window.addEventListener('resize', handleResizeThrottled)
    return () => {
      window.removeEventListener('resize', handleResizeThrottled)
    }
  }, [throttle])

  return { ...size }
}
