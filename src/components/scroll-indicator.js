import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { css } from 'linaria'
import React from 'react'

export const ScrollIndicator = () => {
  const { scrollYProgress } = useViewportScroll()
  const width = useTransform(scrollYProgress, (value) => `${value * 100}%`)

  console.log('scroll-indicator')
  return (
    <div className={wrapper}>
      <motion.div className={indicator} style={{ width }} />
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
