import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { Menu } from './menu'

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
              exit: { opacity: 0 },
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  )
}
