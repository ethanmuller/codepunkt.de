import { MDXProvider } from '@mdx-js/react'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { Menu } from './menu'

const mdxComponents = {
  wrapper: (props) => (
    <motion.div
      variants={{
        initial: {},
        animate: {},
        exit: { transition: { duration: 0 } },
      }}
      transition={{ staggerChildren: 0.2 }}
      {...props}
    />
  ),
  p: (props) => (
    <motion.p
      variants={{
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 1, y: 0, transition: { duration: 0 } },
      }}
      {...props}
    />
  ),
}

export const Layout = (props) => {
  const { children, location } = props
  console.log('layout', props)

  return (
    <>
      <header>Codepunkt</header>
      <Menu />
      <main>
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
    </>
  )
}
