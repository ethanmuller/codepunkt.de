import { useEffect, useRef, useState } from 'react'
import { useScroll } from './use-scroll'
import { useWindowSize } from './use-window-size'

export const useElementCenter = ({
  accountForScroll = false,
  initialValue = null,
} = {}) => {
  const ref = useRef(null)
  const [center, setCenter] = useState(initialValue)
  const { x: scrollX, y: scrollY } = useScroll()
  const { width: windowWidth, height: windowHeight } = useWindowSize()

  useEffect(() => {
    if (ref.current) {
      const bcr = ref.current.getBoundingClientRect()
      setCenter({
        x: bcr.x + bcr.width / 2,
        y: bcr.y + bcr.height / 2,
      })
    }
  }, [ref, scrollX, scrollY, windowWidth, windowHeight])

  return { ref, ...center }
}
