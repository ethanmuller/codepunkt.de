import { useLocation } from '@reach/router'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'gatsby'
import { css } from 'linaria'
import React, { useCallback, useContext } from 'react'
import { AppStateContext } from './app-state-provider'
import { MenuToggle } from './menu-toggle'
import { ModeToggle } from './mode-toggle'

export const Menu = () => {
  const { appState, setAppState } = useContext(AppStateContext)
  const location = useLocation()
  const closeMenu = useCallback(
    (e) => {
      // If user clicks on a menu entry that matches the existing URL, the link
      // functionality is prevented
      if (location.pathname === e.target.getAttribute('href')) {
        e.preventDefault()
        e.stopPropagation()
      }
      setAppState('default')
    },
    [location.pathname, setAppState]
  )

  console.log('menu', { appState }, location)
  return (
    <div className={menu}>
      <ModeToggle />
      <MenuToggle />
      <AnimatePresence>
        {appState === 'menu' && (
          <motion.div
            key="background"
            className={background}
            initial={{ scale: 0.01 }}
            animate={{
              scale: 2.83,
              opacity: 1,
              transition: { duration: 0.7, ease: [0.28, 0.81, 0.44, 1] },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 1, ease: 'easeOut' },
            }}
          ></motion.div>
        )}
        {appState === 'menu' && (
          <motion.nav
            key="nav"
            className={nav}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
            }}
          >
            <ul className={menuEntries}>
              <li>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/writing" onClick={closeMenu}>
                  Writing
                </Link>
              </li>
              <li>
                <Link
                  to="/writing/how-i-built-my-portfolio/"
                  onClick={closeMenu}
                >
                  Article
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

const menu = css`
  display: flex;
  align-items: center;
  --button-size: 48px;
`

const menuEntries = css``

const background = css`
  width: 100vmax;
  height: 100vmax;
  position: fixed;
  top: calc(
    -49.5vmax + var(--indicator-height) + var(--frame-width) + var(
        --header-padding
      ) + var(--button-size) / 2
  );
  right: calc(
    -50vmax + var(--frame-width) + var(--content-padding) + var(--button-size) /
      2
  );
  background: var(--color-bg-alt);
  transform: scale(0.01);
  border-radius: 50%;
  z-index: 2;
`

const backgroundVisible = css`
  visibility: visible;
  @keyframes scaleToFill {
    0% {
      transform: scale(0.01);
    }
    100% {
      transform: scale(2.83);
    }
  }
  animation: scaleToFill 0.7s cubic-bezier(0.28, 0.81, 0.44, 1) 0s forwards;
`

const nav = css`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 2;
  padding: calc(120px + 5vh) calc(var(--content-padding) + var(--frame-width))
    5vh calc(var(--content-padding) + var(--frame-width));
`
