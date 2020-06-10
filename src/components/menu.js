import { Link } from 'gatsby'
import React, { memo } from 'react'

export const Menu = memo(() => {
  console.log('menu')
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/writing">Writing</Link>
      </li>
    </ul>
  )
})
