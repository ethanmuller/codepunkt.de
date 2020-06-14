import { useLocation } from '@reach/router'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'gatsby'
import { css } from 'linaria'
import React, { useCallback, useContext } from 'react'
import { BREAKPOINTS, SOCIAL_LINKS } from '../settings'
import { AppStateContext } from './app-state-provider'
import { MenuToggleButton } from './menu-toggle-button'
import { ModeToggleButton } from './mode-toggle-button'

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
      <ModeToggleButton buttonClassName={menuButton} />
      <MenuToggleButton buttonClassName={menuButton} />
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
              transition: { duration: 0 },
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
              exit: { opacity: 0, transition: { duration: 0 } },
            }}
          >
            <div className={navContent}>
              <motion.ol className={socialLinks}>
                {SOCIAL_LINKS.map((link) => {
                  return (
                    <motion.li key={link.url}>
                      <a href={link.url} className={socialLink}>
                        <svg
                          className={socialIcon}
                          role="img"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-labelledby={`social-icon-${link.name}`}
                        >
                          <title id={`social-icon-${link.name}`}>
                            {link.name}
                          </title>
                          <path d={link.path} />
                        </svg>
                      </a>
                    </motion.li>
                  )
                })}
              </motion.ol>

              <ol className={menuEntries}>
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
              </ol>
            </div>
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

const menuButton = css`
  /**
   * scale buttons down on mobile portrait, use negative right margin to
   * compensate for the scaling effect
   */
  transform: scale(0.8);
  &:first-child {
    margin-right: -10px;
  }
  @media (min-width: ${BREAKPOINTS[0]}px) {
    transform: none;
    &:first-child {
      margin-right: 0;
    }
  }

  background: transparent;
  border: none;
  padding: 0;
  width: var(--button-size);
  height: var(--button-size);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  cursor: pointer;
`

const menuEntries = css``

const background = css`
  width: 100vmax;
  height: 100vmax;
  position: fixed;
  top: calc(
    -49.5vmax + var(--indicator-height) + var(--frame-width) + var(
        --header-height
      ) / 2
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

const navContent = css`
  max-width: 1000px;
  margin: 0 auto;
  height: calc(90vh - 120px);
`

const socialLink = css``
const socialLinks = css`
  display: flex;
`
const socialIcon = css`
  width: 32px;
  height: 32px;
  fill: currentColor;
`
