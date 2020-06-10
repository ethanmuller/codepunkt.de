// how many msec staggering delay the mdx children have in their enter animation
export const MDX_CONTENT_STAGGER_MSEC = 50

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
  'header-padding': ['16px', '16px', '20px', '24px', '24px', '24px'],
  // horizontal content padding
  'content-padding': ['20px', '30px', '40px', '40px', '40px', '40px'],
  // outer frame width
  'frame-width': ['10px', '10px', '20px', '20px', '25px', '25px'],
  // reading indicator height
  'indicator-height': ['5px', '5px', '8px', '8px', '10px', '10px'],
  // font size
  'text-size': ['14px', '17px', '18px', '20px', '22px', '22px'],
  'text-size-small': ['13px', '15px', '16px', '18px', '20px', '20px'],
  // headline sizes
  'h1-size': ['1.7rem', '2rem', '2.4rem', '2.6rem', '2.6rem', '2.6rem'],
  'h2-size': ['1.2rem', '1.3rem', '1.4rem', '1.6rem', '1.6rem', '1.6rem'],
  'h3-size': ['1.1rem', '1.2rem', '1.3rem', '1.5rem', '1.5rem', '1.5rem'],
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
}
