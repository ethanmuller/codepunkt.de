import { css } from 'linaria'
import React, { useContext } from 'react'
import { AppStateContext } from './app-state-provider'

export const MenuToggle = () => {
  const { appState, setAppState } = useContext(AppStateContext)

  return (
    <button
      className={button}
      aria-label="Menu"
      aria-pressed={appState === 'menu'}
      onClick={() => {
        setAppState(appState === 'menu' ? 'default' : 'menu')
        window.scrollTo(0, 0)
      }}
    >
      <div className={buns}>
        <span className={patty} />
      </div>
    </button>
  )
}

const button = css`
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
  /* change bun size on hover and keyboard focus */
  html:not([data-state='menu']) &:hover div::before,
  html:not([data-state='menu']) &:hover div::after,
  html[data-whatinput='keyboard']:not([data-state='menu']) &:focus div::before,
  html[data-whatinput='keyboard']:not([data-state='menu']) &:focus div::after {
    width: 28px;
  }
  /* change patty size on hover and keyboard focus */
  &:hover span,
  html[data-whatinput='keyboard'] &:focus span {
    width: 16px;
  }
  @media screen and (min-width: 521px) {
    width: 48px;
    height: 48px;
  }
`

const buns = css`
  width: 28px;
  height: 28px;
  position: relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    left: 0;
    z-index: 1;
    background: var(--color-logo);
    transition: transform 0.2s ease-out, width 0.2s ease-out;
    will-change: transform, width;
  }
  &::before {
    top: 3px;
    width: 24px;
  }
  &::after {
    bottom: 3px;
    width: 18px;
  }
  [data-state='menu'] &::before {
    transform: translate3d(0, 10px, 0) rotate(45deg);
    width: 30px;
  }
  [data-state='menu'] &::after {
    transform: translate3d(0, -10px, 0) rotate(135deg);
    width: 30px;
  }
`

const patty = css`
  display: block;
  background: var(--color-logo);
  position: absolute;
  left: 0;
  top: 13px;
  width: 100%;
  height: 2px;
  transition: width 0.2s ease-out;
  will-change: width;
  [data-state='menu'] & {
    background: var(--color-bg-alt);
  }
`
