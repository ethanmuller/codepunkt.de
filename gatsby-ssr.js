/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { Layout } from './src/components/layout'

// Wrap with component that won’t get unmounted on page changes.
export const wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
