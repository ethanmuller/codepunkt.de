import { AnimatePresence, motion } from 'framer-motion'
import { css } from 'linaria'
import React, { useContext, useEffect } from 'react'
import { AppStateContext } from './app-state-provider'

export const SplashScreen = () => {
  const { appState, setAppState } = useContext(AppStateContext)

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setAppState('default')
    }, 2500)
    return () => window.clearTimeout(timeout)
  })

  console.log('splash-screen', { appState })
  return (
    <AnimatePresence initial={true}>
      {appState === 'splash' && (
        <div className={wrapper} key="splash-screen">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: '110%' }}
            transition={{ duration: 0.7, ease: [0.28, 0.81, 0.44, 1] }}
            className={background}
          >
            Codepunkt
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

const wrapper = css`
  position: fixed;
  overflow: hidden;
  height: calc(100vh - var(--indicator-height) - var(--frame-width) * 2);
  width: calc(100vw - var(--frame-width) * 2);
  z-index: 1;
`

const background = css`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-bg-alt);
`
