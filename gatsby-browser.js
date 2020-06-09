import React from 'react'
import { Layout } from './src/components/layout'

// Wrap with component that won’t get unmounted on page changes.
export const wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
