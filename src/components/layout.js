import { MDXProvider } from '@mdx-js/react'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import {
  MDX_CONTENT_STAGGER_ELEMENTS,
  MDX_CONTENT_STAGGER_MSEC,
} from '../settings'
import { ColorModeProvider } from './color-mode-provider'
import { globalStyle } from './global-style'
import { Header } from './header'

const mdxComponents = {
  // wrap mdx into a wrapper that staggers child animations
  wrapper: (props) => (
    <motion.div
      variants={{
        initial: {},
        animate: {},
        exit: { transition: { duration: 0 } },
      }}
      transition={{ staggerChildren: MDX_CONTENT_STAGGER_MSEC / 1000 }}
      {...props}
    />
  ),
  // replace all default block-level html elements with animated ones
  ...MDX_CONTENT_STAGGER_ELEMENTS.reduce((acc, tag) => {
    return {
      ...acc,
      [tag]: (props) => {
        const Motion = motion[tag]
        return (
          <Motion
            variants={{
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 1, y: 0, transition: { duration: 0 } },
            }}
            {...props}
          />
        )
      },
    }
  }, {}),
}

export const Layout = (props) => {
  const { children, location } = props
  console.log('layout', props)

  return (
    <ColorModeProvider>
      <Header />
      <main className={globalStyle}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0, transition: { duration: 0.3 } },
            }}
          >
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
          </motion.div>
        </AnimatePresence>
      </main>
    </ColorModeProvider>
  )
}
