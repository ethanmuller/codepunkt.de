import { Link } from 'gatsby'
import React from 'react'

export const Menu = () => {
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
}
