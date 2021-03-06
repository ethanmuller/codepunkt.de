import { css, cx } from 'linaria'
import React from 'react'

export const Logo = ({ className, idPrefix = 'site' }) => {
  return (
    <svg
      className={cx(logo, className)}
      role="presentation"
      focusable="false"
      viewBox="7 13.1 219.03 62.3"
      aria-labelledby={`${idPrefix}-logo-title ${idPrefix}-logo-desc`}
    >
      <title id={`${idPrefix}-logo-title`}>Codepunkt</title>
      <desc id={`${idPrefix}-logo-desc`}>
        Codepunkt written in cursive Kaushan Script font
      </desc>
      <path d="M7.4 46.2q0-3.7.8-7.2.9-3.5 2.5-6.6 1.5-3.2 3.7-5.8Q16.5 24 19 22q2.6-1.9 5.5-3 3-1 6-1 3.6 0 5.6 1.5 2 1.5 2 4.2 0 1-.3 2.1T37 28l-1.2 2-1.6 1.8q-1.4-.2-2.4-1.3-1-1-1.2-2.3 1.8-1.5 2.9-3.2 1-1.6 1-3 0-2.2-2.8-2.2-1.2 0-2.5.4l-2.6 1.4q-1.3 1-2.5 2.2-1.2 1.2-2.3 2.7-7.2 10.4-7.2 21.3 0 3.8 1.2 6.2 1.2 2.3 3.2 2.7 2.2-.5 5.6-2.8 3.5-2.4 7.5-6.1.6.5.7 1-1.5 2-3.2 3.9-1.6 1.8-3.2 3.3-1.5 1.5-3 2.7-1.6 1.1-3 1.7-6.4 0-9.7-3.7-3.3-3.6-3.3-10.5z" />
      <path d="M42.3 58.2q-3-.3-4.7-2.6-1.8-2.3-1.8-5.8 0-2.1.7-4.3.6-2.3 1.7-4.4 1.2-2.1 2.7-4 1.6-1.8 3.4-3.2 2.9-2.1 5.4-2.1 1.6.9 3.2 3.7h1q2.7 0 2.7 4.8 0 3.3-1 6.2-1.1 3-3 5.3-1.9 2.4-4.5 4-2.6 1.7-5.8 2.4zM45 41.8l-1.7 2.6q-.8 1.4-1.3 2.8L41 50l-.2 2.4q0 1.2.4 2.4.4 1.1 1 1.3 2.3-.6 4.2-2 2-1.4 3.4-3.6 1.4-2 2.2-4.8.8-2.7.8-5.8l-.1-2.1q-.2-.8-.5-1.3-2.3.6-4.1 2.1-1.8 1.5-3.1 3.2z" />
      <path d="M70.5 32q1 0 2.3.7 1.4.6 2.4 1.6l-.6-4q-.4-1.8-1.1-3.7-.8-2-2-4.3-1.3-2.4-3.2-5.4.2-.5.7-1l1.3-1.3 1.4-1 1.5-.4q1.4 1.6 2.7 4 1.3 2.4 2.3 5.2 1 2.8 1.5 5.7.6 3 .6 5.7t-.6 5.6Q79 42.2 78 45q-1 2.7-2.4 5.1-1.4 2.5-3 4.4-1.7 2-3.5 3.1-1.8 1.3-3.5 1.6-3.6-.4-5.5-2.3-2-2-2-5.3 0-1.7.6-3.8.6-2 1.5-4.1.9-2.1 2.1-4 1.2-2 2.6-3.6 1.4-1.5 2.8-2.6t2.8-1.4zm-5.3 25.1q1.8-.6 3.6-2.8 1.8-2 3.3-5 1.4-2.9 2.3-6.2 1-3.3 1-6.3v-1.1l-.1-.4q-1.3.5-2.7 1.7-1.4 1.3-2.8 3-1.4 1.5-2.6 3.5-1.3 1.9-2.3 3.8-1 2-1.5 3.7-.6 1.8-.6 3.1 0 2.6 2.4 3z" />
      <path d="M100.3 34.8q-.3 3.3-1.2 5.6-1 2.3-2.7 4-1.7 1.8-4.2 3.2-2.5 1.4-5.8 2.7V53q.1.8.4 1.4l.7 1q.5.4 1.2.4 1.4 0 2.8-.6 1.3-.7 2.5-1.6 1.3-.9 2.3-2l2-1.9.8.9q-2.3 3.1-5.1 5.2-2.8 2-5.3 2.6-3.6-.4-5.6-2.6-2-2.2-2-5.4 0-2 .6-4.3.6-2.2 1.7-4.3 1-2 2.5-3.8 1.4-1.9 3-3.2 1.7-1.4 3.4-2.1 1.8-.8 3.5-.8 2.4.3 4.5 3zm-3.6 1.8q-1.4.2-3 1.1-1.5 1-2.8 2.5-1.3 1.6-2.4 3.6-1 2.1-1.7 4.5 4.2-2 6.9-5.1 2.8-3 3-6.6z" />
      <path d="M98.8 73.6q-.7-.2-.8-1.6l-.3-1.6v-2.1q0-1.1.3-3l1-4.3 1.6-5.2 2.1-5.6 2.4-6.2 1.8-4.6 1.1-3.2.7-2 .7-1.6 1-1.8 1-1.7 1-1.2q1.9.2 3.5 1 1.6.6 2 1.2-.7.7-1.7 2.1-1 1.4-1.8 3.1-.9 1.7-1.6 3.5l-1.1 3.1 1.3-2 2.6-2.8q2-2 3.6-3 1.7-1 3-1 2 0 3.2 1 1.3 1.1 1.3 2.8 0 3.8-1.3 7.4-1.2 3.7-3.6 6.7-.8 1.1-2 2.1l-2.5 1.9q-1.3.8-2.6 1.3-1.2.4-2.2.4-1 0-1.7-.4-.7-.3-1-1 2.1-1.1 4-3.3 2-2 3.6-4.9 1.6-2.7 2.8-6 1.3-3.2 1.9-6.5-2 1-3.6 2.2-1.5 1.3-3.1 3.2l-3 3.7-1.8 2.4q-.7 1-1.1 1.9l-1 2-1.7 4.5-2 6-2 7.3-2 7.6q-.5-.1-1-.8l-.5-.7-.5-.3z" />
      <path d="M142.7 55.2q-1-.8-1.3-2-.4-1.3-.4-2.2 0-1 .3-1.9-.2 0-1 .9l-1.5 2q-.9 1-1.7 2.2l-1.3 1.6-1.3 1.1q-.6.5-1 .5-.7 0-1.7-.3-.9-.3-1.7-.8-.8-.6-1.4-1.3-.6-.7-.8-1.6l.1-2.4q0-1 .3-2 .5-2 1.4-4.5l2.1-5q1.2-2.4 2.7-4.5 1.5-2 3.1-3.3l1.1.1q.7 0 1.3.3l1.3.5 1 .7-2.4 3.5q-1.9 3-4.2 8.5L135 47l-.7 2.3-.6 2.3-.2 1.9.1.6.3.3q.7-.3 2-1.7l3.3-4.3 1.2-1.7 1.4-2 1.4-2.2 1-2.3.6-1.5.8-1.8q.5-1 1.2-1.9.6-1 1.5-1.8l1.5.2 1.4.4 1.3.5.7.6q-.9 2.3-2 4.5l-2.2 4.4q-1 2.2-1.6 4.3-.7 2.1-.7 4.2 0 1 .2 1.9l.4 1.3.3 1 .2.5v.2h-.2l-1-.1-1.2-.5-1.4-.6-1.3-.8z" />
      <path d="M162.7 31.1q1.3.5 2.5 1.9T167 36q-.6 1.4-1.8 3.4l-2.4 4-2.2 4q-1 1.8-1 3l1.8-2 2-2.4 1.8-2.1 1.3-1.5 2.3-2.4q1.3-1.4 2.8-2.6 1.5-1.2 3-2 1.5-1 2.8-1 1.3 0 2.2 1 1 .9 1.5 1.9l-.4.3q-.4.2-1.1 1-.8 1-1.7 2.6l-1.8 3.5q-.8 1.9-1.4 3.9-.5 2-.5 3.6 0 1.3.3 1.6.3.4 1 .4.5 0 1.1-.3l1-.2q.2 0 .4.4l.1.6-1 .7-1.2.7-1.2.5-1 .2q-1.6 0-2.5-.4-1-.4-1.5-1.2-.6-.7-.8-1.7-.2-1-.2-2.2V50l.5-1.8.9-2.6 1.5-3.5-1.5.7q-1.3.7-2.8 2.2-2.4 2.4-4.4 4.7-2 2.3-4 5-1 1.7-2 2.8-.8 1.1-1.4 1.5-1.1-.7-1.6-1.8-.6-1-.8-2.3 0-1 .3-2.5l.8-3.3 1.2-4 1.6-4q2-4.5 3.6-7.1 1.6-2.6 2-2.9z" />
      <path d="M182.4 51.5q0-1.9 1-5.2 1-3.3 2.5-7.3l3.5-8.2q2-4.2 4-7.8 2-3.7 3.9-6.3 1.8-2.7 3.1-3.6.7 0 1.6.6l1.6 1.4q.7.8 1.2 1.7.5.9.5 1.6-2.3 1.9-4.8 4.8-2.4 3-4.6 6.5-2.2 3.5-4 7.4-1.8 4-3 7.7 1.6-2.8 3.4-5.2 1.8-2.3 3.6-4 1.9-1.6 3.6-2.6 1.7-.9 3.3-1 2.3 1.8 2.3 4.5 0 1.7-.7 3.4-.7 1.6-1.8 3-1.1 1.5-2.5 2.5-1.5 1-3 1.4.5 1.8 1.3 3.6.8 2 2 3.7 1 1.8 2.5 3.3 1.4 1.5 3.2 2.5-.2.5-.8 1-.5.6-1.2 1l-1.6.6q-.8.2-1.7.2-1.4 0-2.6-1.4-1.2-1.4-2.2-4-.8-2.2-1.5-5.1-.8-3-1.3-6.2l1.8-1.4 2.3-2.1q4.6-4.4 4.6-7.7 0-.4-.6-.4-1 0-2.5 1-1.4 1-3 2.6-1.5 1.7-3.2 4-1.6 2.1-3.1 4.8l-1.2 2.3-.9 2.8-.6 2.9-.2 2.6q0 .7.2 1.1-1.6-.1-2-.8l-.7-1-.6-.6q-.5-.4-.8-1.6-.3-1.2-.3-3z" />
      <path d="M213.5 36.5h-3l-.4-1.4-.2-1.7 2.6.2 2.3.1q.7-1.6 1.6-3.1l1.8-2.8 1.6-2.2q.8-.9 1.2-1.1l1.3.2 1.7.4 1.5.6 1 .7q-1.7 2-2.8 3.6l-2.4 3.9h2.1l2.2-.2.4.6q.2.4.2.9-2.6.9-6.2 1-1.3 2.5-2.3 5l-1.8 4.7q-.7 2.3-1 4.3-.5 2-.5 3.7 0 2.3 1.8 2.5 1.5-.2 3-.8 1.3-.5 2.4-1.4l.4.8-1 1-1.7 1.3-1.7 1-1.3.5q-1.3 0-2.6-.6-1.3-.5-2.3-1.3-1.1-.8-1.8-1.8t-.7-1.9q0-1.2.4-3.1.3-1.9 1-4.1l1.4-4.7q.8-2.5 1.8-4.8z" />
      <text
        y="24"
        x="3"
        fill="rgba(255, 255, 255, 0.0001)"
        transform="scale(2.5)"
      >
        Codepunkt
      </text>
    </svg>
  )
}

const logo = css`
  height: var(--logo-height);
  margin-top: calc(var(--logo-height) / 5);
  z-index: 2;
  color: var(--color-logo);
  path {
    fill: currentColor;
  }
`
