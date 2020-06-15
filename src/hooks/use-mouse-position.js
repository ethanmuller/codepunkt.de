import throttlefn from 'lodash/throttle'
import { useCallback, useEffect, useState } from 'react'

export const useMousePosition = ({
  throttle = 50,
  initialValue = null,
  // TODO: is this required?
  historyIntervalMsec = null,
} = {}) => {
  const [position, setPosition] = useState(initialValue)
  const [history, setHistory] = useState([])

  const handleMouseMove = useCallback(
    (event) => {
      const timestamp = Date.now()
      const position = { x: event.clientX, y: event.clientY, timestamp }
      setPosition(position)
      if (historyIntervalMsec !== null) {
        setHistory((history) => [
          ...history.filter(
            (h) => timestamp - historyIntervalMsec < h.timestamp
          ),
          position,
        ])
      }
    },
    [historyIntervalMsec]
  )

  useEffect(() => {
    const handleMouseMoveThrottled = throttlefn(handleMouseMove, throttle)
    document.addEventListener('mousemove', handleMouseMoveThrottled)
    return () => {
      document.removeEventListener('mousemove', handleMouseMoveThrottled)
    }
  }, [handleMouseMove, throttle])

  return { ...position, ...(historyIntervalMsec !== null ? { history } : null) }
}
