import { css } from 'linaria'

export const globalStyle = css`
  :global() {
    /* Box sizing rules */
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    /* Remove list styles and margin/padding on ul, ol elements with a class attribute */
    ul[class],
    ol[class] {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
      --link-color: #0058ff;
      --link-line-color: #a1c1aa;
      &:hover {
        --link-color: var(--color-headline);
        --link-line-color: #a1c1aa;
      }
      font-weight: 600;
      text-decoration-skip-ink: auto;
      color: var(--link-color);
      text-decoration: none;
      text-shadow: -3px 1px var(--color-bg), 3px 1px var(--color-bg),
        -2px 1px var(--color-bg), 2px 1px var(--color-bg),
        -1px 1px var(--color-bg), 1px 1px var(--color-bg), 0 1px var(--color-bg);
      background-image: linear-gradient(var(--color-logo), var(--color-logo));
      background-position: 0% 28px;
      background-repeat: no-repeat;
      background-size: 100% 2px;
    }

    /* Make images easier to work with */
    img {
      max-width: 100%;
      display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    /* Remove all animations and transitions for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }

    html {
      scrollbar-color: lightgray white;
      scrollbar-width: thin;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      scroll-behavior: auto;
      overscroll-behavior-y: none;
      overflow: var(--body-overflow);
      font-kerning: normal;
      font-size: var(--text-size);
      font-family: 'Open Sans', -apple-system, 'BlinkMacSystemFont', 'Segoe UI',
        'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', 'Helvetica Neue',
        sans-serif;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      text-rendering: optimizeSpeed;
    }

    body {
      position: relative;
      min-height: 100%;
      min-height: stretch;
      margin: 0;
      overflow-x: hidden;
      scroll-behavior: smooth;
      min-height: 100%;
      overflow: var(--body-overflow);
      color: var(--color-text);
      background: var(--color-bg);
      padding: calc(var(--frame-width) + var(--indicator-height))
        var(--frame-width) var(--frame-width);
    }

    /* frame */
    html::after,
    html::before {
      content: '';
      position: fixed;
      top: 0;
      height: 100%;
      width: var(--frame-width);
      z-index: 5;
      background: var(--color-frame);
    }
    html::before {
      left: 0;
    }
    html::after {
      right: 0;
    }
    body::after,
    body::before {
      content: '';
      position: fixed;
      left: 0;
      width: 100%;
      height: var(--frame-width);
      background: var(--color-frame);
      z-index: 6;
    }
    body::before {
      top: 0;
      box-sizing: content-box;
      height: var(--frame-width);
      border-top: var(--indicator-height) solid var(--color-line);
    }
    body::after {
      bottom: 0;
    }

    /* disable outline on inputs other than keyboard */
    html:not([data-whatinput='keyboard']) * {
      outline: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: var(--color-headline);
      font-family: Montserrat, Lucida Bright, Lucidabright, 'Lucida Serif',
        Lucida, 'DejaVu Serif', 'Bitstream Vera Serif', 'Liberation Serif',
        Georgia, serif;
      font-weight: 600;
    }
    h1 {
      font-size: var(--h1-size);
      font-weight: 700;
    }
    h2 {
      font-size: var(--h2-size);
    }
    h3 {
      font-size: var(--h3-size);
    }
  }
`
