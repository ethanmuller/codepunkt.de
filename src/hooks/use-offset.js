import { useEffect, useState } from 'react'
import { useDeviceOrientation } from './use-device-orientation'
import { useElementCenter } from './use-element-center'
import { useMousePosition } from './use-mouse-position'
import { useWindowSize } from './use-window-size'

const clamp = (num, [min, max]) => Math.min(Math.max(num, min), max)

const DIZZY_CALCULATION_INTERVAL = 2500
const DIZZY_CALCULATION_THRESHOLD = 15
const POINTER_PRECEDENCE_THRESHOLD = 2000

export const useOffset = () => {
  const [offsets, setOffsets] = useState([])
  const [isDizzy, setIsDizzy] = useState(false)
  const [orientation, setOrientation] = useState(null)
  const { width: windowWidth, height: windowHeight } = useWindowSize()
  const initialValue = { x: windowWidth / 2, y: windowHeight / 2 }
  const { ref, x: cx, y: cy } = useElementCenter({ initialValue })
  const { x: mx, y: my, timestamp: mouseTimestamp } = useMousePosition({
    initialValue,
  })
  const {
    inferred: { beta, gamma },
  } = useDeviceOrientation()

  // calculate new offset and push it to offset history whenver one of the
  // dependencies change
  useEffect(() => {
    const timestamp = Date.now()
    const mousePositionInThresholdExists =
      mouseTimestamp &&
      timestamp - mouseTimestamp < POINTER_PRECEDENCE_THRESHOLD

    let offset
    if (mousePositionInThresholdExists) {
      // if we have a mouse position in the last POINTER_PRECEDENCE_THRESHOLD
      // miliseconds, use it!
      offset = {
        timestamp,
        x: clamp(mx < cx ? -1 + mx / cx : (mx - cx) / (windowWidth - cx), [
          -1,
          1,
        ]),
        y: clamp(my < cy ? -1 + my / cy : (my - cy) / (windowHeight - cy), [
          -1,
          1,
        ]),
      }
    } else {
      // otherwise, use orientation
      // TODO: only if orientation timestamps are fresh. otherwise, fall back
      // to latest mx and my regardless of age
      setOrientation({ gamma, beta })
      offset = {
        timestamp,
        x: -1 * clamp(gamma / 22.5, [-1, 1]),
        y: -1 * clamp(beta / 22.5, [-1, 1]),
      }
    }

    setOffsets((offsets) => [
      offset,
      ...offsets.filter(
        (o) => timestamp - DIZZY_CALCULATION_INTERVAL < o.timestamp
      ),
    ])
  }, [cx, cy, mx, my, mouseTimestamp, beta, gamma, windowWidth, windowHeight])

  // re-calculate isDizzy whenever offset history changes
  useEffect(() => {
    const offsetDistance = offsets.reduce((count, h, i, all) => {
      return i === 0
        ? count
        : count + Math.abs(h.x - all[i - 1].x) + Math.abs(h.y - all[i - 1].y)
    }, 0)

    setIsDizzy(offsetDistance > DIZZY_CALCULATION_THRESHOLD)
  }, [offsets])

  return { ref, isDizzy, ...(offsets[0] ?? { x: 0, y: 0 }) }
}
