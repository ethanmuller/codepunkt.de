import throttlefn from 'lodash/throttle'
import { useEffect, useState } from 'react'

export const useWindowSize = ({ throttle = 100 } = {}) => {
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }

    const handleResizeThrottled = throttlefn(handleResize, throttle)
    window.addEventListener('resize', handleResizeThrottled)
    return () => {
      window.removeEventListener('resize', handleResizeThrottled)
    }
  }, [throttle])

  return { ...size }
}
