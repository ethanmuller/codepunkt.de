import { css } from 'linaria'
import React from 'react'
import { Avatar } from '../components/avatar'
import { PatternBackground } from '../components/pattern-background'
import { Seo } from '../components/seo'
import { useOffset } from '../hooks/use-offset'
import { BREAKPOINTS } from '../settings'

const IndexPage = () => {
  const { x, y, ref, isDizzy } = useOffset()

  return (
    <div className={moveUp}>
      <Seo title="Home" />
      <section className={avatarSection}>
        <div className={avatarStage}>
          <PatternBackground x={x} y={y} />
          <div className={avatarLayout}>
            <Avatar centerRef={ref} x={x} y={y} isDizzy={isDizzy} />
          </div>
        </div>
      </section>
      <section className={introSection}>
        <div className={introContent}>
          <h1 className={introWelcome}>
            Hey, my name
            <br />
            is <b>Christoph</b>.
          </h1>
          <p className={introParagraph}>
            I help teams deliver better products in less time by teaching web
            and cloud technologies.
          </p>
        </div>
      </section>
    </div>
  )
}

export default IndexPage

const moveUp = css`
  margin-top: -5vh;
  position: relative;
`

const avatarSection = css`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 55vh;
  min-height: 250px;
  max-height: min(80vw, 500px);
  @media screen and (min-width: ${BREAKPOINTS[2]}px) {
    position: absolute;
    padding-top: 0;
  }
`

const avatarStage = css`
  position: relative;
  height: 100%;
  width: 100%;
`

const avatarLayout = css`
  position: absolute;
  transform: translate(-50%);
  transform-origin: bottom center;
  top: 0;
  width: 100%;
  height: 100%;
  left: 50%;
  @media screen and (min-width: ${BREAKPOINTS[2]}px) {
    top: 0;
    left: 74%;
    max-width: 425px;
  }
  @media screen and (min-width: ${BREAKPOINTS[3]}px) {
    max-width: 500px;
  }
`

const introSection = css`
  display: flex;
  align-items: center;
  min-height: auto;
  margin-bottom: 5vh;
  @media screen and (min-width: ${BREAKPOINTS[2]}px) {
    padding-top: 7vh;
  }
`

const introContent = css`
  position: relative;
  width: 100%;
  min-height: auto;
  text-align: center;
  padding: 20px 0;
  @media screen and (min-width: ${BREAKPOINTS[2]}px) {
    min-height: 25vh;
    text-align: left;
    padding: 0;
    max-width: 470px;
  }
  @media screen and (min-width: ${BREAKPOINTS[3]}px) {
    /* 1280 and up */
    max-width: 550px;
  }
`

const introWelcome = css`
  color: var(--color-text);
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 1.3em;
  font-family: montserrat;
  will-change: transform, opacity;
  margin: 0 0 1rem 0;

  @media screen and (min-width: ${BREAKPOINTS[2]}px) {
    font-size: 2.8rem;
  }
  @media screen and (min-width: ${BREAKPOINTS[3]}px) {
    font-size: 3.4rem;
  }

  b {
    font-weight: 700;
    color: #318513;
    [data-mode='dark'] & {
      color: #e7ceff;
    }
  }
`

const introParagraph = css`
  line-height: 1.65;
  font-size: 1.5rem;
  font-weight: 500;
  will-change: transform, opacity;
  margin: 0;
  max-width: 70vw;
  margin: 30px auto 0 auto;
  @media screen and (min-width: ${BREAKPOINTS[2]}px) {
    padding: 0
    max-width: none;
  }
`
