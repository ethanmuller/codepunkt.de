import { useLocation } from '@reach/router'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'gatsby'
import { css } from 'linaria'
import React, { useCallback, useContext } from 'react'
import { BREAKPOINTS, MENU_ENTRIES, SOCIAL_LINKS } from '../settings'
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
            transition={{ delay: 0.3 }}
          >
            <div className={navContent}>
              <ol className={menuEntries}>
                {MENU_ENTRIES.map(({ url, name, label }) => (
                  <li>
                    <Link
                      className={menuEntry}
                      to={url}
                      onClick={closeMenu}
                      activeClassName="active"
                      partiallyActive={url === '/writing'}
                    >
                      <span className={menuEntryName}>{name}</span>
                      <span className={menuEntryLabel}>{label}</span>
                    </Link>
                  </li>
                ))}
              </ol>
              <motion.ol className={socialLinks}>
                {SOCIAL_LINKS.map(({ url, name, path, color }) => {
                  return (
                    <motion.li key={url}>
                      <a href={url} className={socialLink}>
                        <svg
                          className={socialIcon}
                          role="img"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-labelledby={`social-icon-${name}`}
                        >
                          <title id={`social-icon-${name}`}>{name}</title>
                          <path d={path} fill={color} />
                        </svg>
                      </a>
                    </motion.li>
                  )
                })}
              </motion.ol>
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
  --padding: calc(var(--frame-width) + var(--content-padding));
  --header-offset: calc(
    var(--indicator-height) + (var(--header-height) - var(--logo-height) / 2)
  );
  padding: var(--padding);
  padding-top: calc(var(--padding) + var(--header-offset));
`

const navContent = css`
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const socialLink = css`
  margin-right: 1rem;
`
const socialLinks = css`
  display: flex;
`
const socialIcon = css`
  width: 32px;
  height: 32px;
  fill: currentColor;
`

const menuEntries = css`
  margin-bottom: 3rem !important;
`
const menuEntry = css`
  display: inline-block;
  text-decoration: none;
  margin-bottom: 1rem;
  color: var(--color-text);
  &:hover span:nth-child(2),
  &:focus span:nth-child(2),
  &.active span:nth-child(2) {
    padding-left: 20px;
  }
  &.active {
    color: var(--color-logo);
  }
`
const menuEntryName = css`
  display: block;
  font-size: var(--h1-size);
  font-weight: 600;
`
const menuEntryLabel = css`
  display: block;
  font-size: 1rem;
`
