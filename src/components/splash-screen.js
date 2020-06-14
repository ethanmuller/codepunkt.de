import { AnimatePresence, motion } from 'framer-motion'
import { css } from 'linaria'
import React, { useContext, useEffect } from 'react'
import { AppStateContext } from './app-state-provider'
import { Logo } from './logo'

const logoAnimationDuration = 1600

export const SplashScreen = () => {
  const { appState, setAppState } = useContext(AppStateContext)

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setAppState('default')
    }, 2500)
    return () => window.clearTimeout(timeout)
  }, [setAppState])

  console.log('splash-screen', { appState })
  return (
    <AnimatePresence initial={true}>
      {appState === 'splash' && (
        <div className={wrapper} key="splash-screen">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: '110%' }}
            transition={{ duration: 0.7, ease: [0.58, 0.01, 0.53, 1.01] }}
            className={background}
          >
            <Logo className={logo} idPrefix="site-initial" />
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
  z-index: 4;
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

const logo = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(2);
  color: var(--color-logo);
  @keyframes fadeOut {
    0% {
      opacity: 1;
      top: 50%;
    }
    100% {
      opacity: 0;
      top: 45%;
    }
  }
  opacity: 1;
  animation: fadeOut 0.3s cubic-bezier(0.58, 0.01, 0.53, 1.01) 2500ms 1 forwards;
  @keyframes drawPath {
    0% {
      stroke-dashoffset: var(--path-length);
      fill: transparent;
    }
    50% {
      stroke-dashoffset: 0;
      fill: transparent;
    }
    100% {
      stroke-dashoffset: 0;
      fill: currentColor;
    }
  }
  path {
    stroke-dasharray: var(--path-length);
    stroke-dashoffset: var(--path-length);
    stroke: currentColor;
    stroke-width: 0.5;
    fill: transparent;
    animation: drawPath ${logoAnimationDuration}ms linear 0ms 1 forwards;
  }
  path:nth-of-type(1) {
    --path-length: 180;
    animation-delay: 0ms;
  }
  path:nth-of-type(2) {
    --path-length: 123;
    animation-delay: 25ms;
  }
  path:nth-of-type(3) {
    --path-length: 173;
    animation-delay: 50ms;
  }
  path:nth-of-type(4) {
    --path-length: 131;
    animation-delay: 75ms;
  }
  path:nth-of-type(5) {
    --path-length: 194;
    animation-delay: 100ms;
  }
  path:nth-of-type(6) {
    --path-length: 139;
    animation-delay: 125ms;
  }
  path:nth-of-type(7) {
    --path-length: 153;
    animation-delay: 150ms;
  }
  path:nth-of-type(8) {
    --path-length: 217;
    animation-delay: 175ms;
  }
  path:nth-of-type(9) {
    --path-length: 113;
    animation-delay: 200ms;
  }
`
