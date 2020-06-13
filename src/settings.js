// how many msec staggering delay the children have in their enter animation
export const CONTENT_STAGGER_MSEC = 50

// block-level HTML tags that are converted from markdown and should stagger in
export const MDX_CONTENT_STAGGER_ELEMENTS = [
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'blockquote',
  'ul',
  'ol',
  'pre',
  'hr',
  'img',
]

// the localStorage key that color mode information is stored in
export const COLOR_MODE_STORAGE_KEY = 'color-mode'

// the css variable that provides the initial color mode
export const INITIAL_COLOR_MODE_CSS_VARIABLE = '--initial-color-mode'

/**
 * State-based CSS variables.
 *
 * Application state is either 'splash', 'default' or 'menu'. Based on these
 * states, the css variables values are set.
 */
export const STATE_CSS_VARIABLES = {
  'body-overflow': {
    default: 'visible',
    splash: 'hidden',
    menu: 'hidden',
  },
}

/**
 * Breakpoint definitions.
 * Assumed devices/screens are shown as comments between the breakpints.
 */
export const BREAKPOINTS = [
  // mobile portrait
  568,
  // mobile landsape
  768,
  // tablet portrait
  1024,
  // tablet landscape
  1280,
  // laptop
  1600,
  // desktop
]

/**
 * Responsive CSS variables.
 *
 * Their values correspond to the BREAKPOINTS defined above.
 * The CSS variables are automatically updated on the html element when a
 * breakpoint is hit.
 */
export const RESPONSIVE_CSS_VARIABLES = {
  // vertical header padding
  'header-height': ['80px', '86px', '100px', '116px', '116px', '116px'],
  // horizontal content padding
  'content-padding': ['16px', '24px', '32px', '40px', '40px', '40px'],
  // outer frame width
  'frame-width': ['10px', '15px', '20px', '20px', '25px', '25px'],
  // reading indicator height
  'indicator-height': ['5px', '5px', '8px', '8px', '10px', '10px'],
  // font size
  'text-size': ['14px', '17px', '18px', '20px', '22px', '22px'],
  'text-size-small': ['13px', '15px', '16px', '18px', '20px', '20px'],
  // headline sizes
  'h1-size': ['1.7rem', '2rem', '2.4rem', '2.6rem', '2.6rem', '2.6rem'],
  'h2-size': ['1.2rem', '1.3rem', '1.4rem', '1.6rem', '1.6rem', '1.6rem'],
  'h3-size': ['1.1rem', '1.2rem', '1.3rem', '1.5rem', '1.5rem', '1.5rem'],
  // logo height
  'logo-height': ['36px', '40px', '46px', '50px', '50px', '50px'],
}

/**
 * Main color definitions for light and dark mode.
 */
export const COLORS = {
  frame: {
    light: '#fff',
    dark: '#252c3a',
  },
  bg: {
    light: '#f0f7f2',
    dark: '#15202b',
  },
  'bg-alt': {
    light: '#deede2',
    dark: '#0b1723',
  },
  text: {
    light: '#28342b',
    dark: '#e8e8f0',
  },
  logo: {
    light: '#318513',
    dark: '#e7ceff',
  },
  line: {
    light: '#9cc989',
    dark: '#e68fff',
  },
  indicator: {
    light: '#318513',
    dark: '#8e4da0',
  },
  headline: {
    light: '#286b10',
    dark: '#aaa4dc',
  },
  code: {
    light: '#2f86da',
    dark: '#d0dcaa',
  },
  'code-bg': {
    light: '#fff',
    dark: '#0b111f',
  },
  'line-numbers': {
    light: '#aecdb8',
    dark: '#343d4e',
  },
  link: {
    light: '#5239c2',
    dark: '#cca43b',
  },
}

/**
 * Social links with social icons
 */
export const SOCIAL_LINKS = [
  {
    url: 'https://twitter.com/code_punkt',
    path:
      'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z',
  },
  {
    url: 'https://github.com/codepunkt',
    path:
      'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
  },
  {
    url: 'https://instagram.com/codepunkt',
    path:
      'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z',
  },
  {
    url: 'https://www.linkedin.com/in/christophwerner/',
    path:
      'M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z',
  },
  {
    url: 'mailto:christoph@codepunkt.de',
    path:
      'M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z',
  },
]
