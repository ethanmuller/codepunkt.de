import { css } from 'linaria'
import React from 'react'
import { Avatar } from '../components/avatar'
import { PatternBackground } from '../components/pattern-background'
import { Seo } from '../components/seo'

const IndexPage = () => (
  <div className={moveUp}>
    <Seo title="Home" />
    <section className={avatarSection}>
      <div class={avatarStage}>
        <PatternBackground x="0" y="0" />
        <div className={avatarLayout}>
          <Avatar />
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
          I help teams deliver better products in less time by teaching web and
          cloud technologies.
        </p>
      </div>
    </section>
  </div>
)

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
  height: 45vh;
  min-height: 250px;
  max-height: min(80vw, 500px);
  @media screen and (min-width: 1001px) {
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
  @media screen and (min-width: 1001px) {
    top: 0;
    left: 72%;
    max-width: 425px;
  }
  @media screen and (min-width: 1201px) {
    max-width: 500px;
  }
`

const introSection = css`
  display: flex;
  align-items: center;
  min-height: auto;
  margin-bottom: 50vh;
  @media screen and (min-width: 1001px) {
    padding-top: 2vh;
  }
`

const introContent = css`
  position: relative;
  width: 100%;
  min-height: auto;
  text-align: center;
  padding: 20px 0;
  @media screen and (min-width: 1001px) {
    min-height: 25vh;
    text-align: left;
    padding: 0;
    max-width: 500px;
  }
  @media screen and (min-width: 1201px) {
    max-width: 600px;
  }
`

const introWelcome = css`
  color: var(--color-text);
  font-weight: 500;
  line-height: 1.3em;
  font-family: montserrat;
  will-change: transform, opacity;

  b {
    font-weight: 700;
    color: #318513;
    transition: color 0.2s ease-out;
    [data-mode='dark'] & {
      color: #835bb3;
    }
  }
`

const introParagraph = css`
  line-height: 1.65;
  font-size: var(--h2-size);
  margin-top: 30px;
  max-width: auto;
  padding: 0 5%;
  font-weight: 500;
  will-change: transform, opacity;
  @media screen and (min-width: 1001px) {
    max-width: 430px;
    padding: 0;
  }
  @media screen and (min-width: 1201px) {
    max-width: 530px;
  }
`
