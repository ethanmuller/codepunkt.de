import { MDXProvider } from '@mdx-js/react'
import { AnimatePresence, motion } from 'framer-motion'
import { cx } from 'linaria'
import React, { memo, useContext } from 'react'
import { CONTENT_STAGGER_MSEC, MDX_CONTENT_STAGGER_ELEMENTS } from '../settings'
import { AppStateContext } from './app-state-provider'
import { globalStyle } from './global-style'

const WRITING_HEADER_ANIMATION_DURATION = 0.9

const createMdxComponents = (delayChildren = 0) => ({
  // wrap mdx into a wrapper that staggers child animations
  wrapper: (props) => {
    return (
      <motion.div
        variants={{
          initial: {},
          animate: {},
          exit: { transition: { duration: 0 } },
        }}
        transition={{
          staggerChildren: CONTENT_STAGGER_MSEC / 1000,
          delayChildren: delayChildren + WRITING_HEADER_ANIMATION_DURATION,
        }}
        {...props}
      />
    )
  },
  // replace all default block-level html elements with animated ones
  ...MDX_CONTENT_STAGGER_ELEMENTS.reduce((acc, tag) => {
    return {
      ...acc,
      [tag]: (props) => {
        const Motion = motion[tag]
        return (
          <Motion
            variants={{
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 1, y: 0, transition: { duration: 0 } },
            }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            {...props}
          />
        )
      },
    }
  }, {}),
})

const MdxProviderWithoutUnnecessaryRerenders = memo(
  ({ children, animationDelay }) => (
    <MDXProvider components={createMdxComponents(animationDelay)}>
      {children}
    </MDXProvider>
  )
)

export const Main = ({ children, className, location }) => {
  const { appState } = useContext(AppStateContext)
  const animationDelay = appState === 'splash' ? 2.8 : 0

  console.log('main', { appState })
  return (
    <main className={cx(className, globalStyle)}>
      <AnimatePresence exitBeforeEnter initial={true}>
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: { opacity: 1 },
            animate: { opacity: 1 },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
          transition={{
            delayChildren: animationDelay,
          }}
        >
          <MdxProviderWithoutUnnecessaryRerenders
            animationDelay={animationDelay}
          >
            {children}
          </MdxProviderWithoutUnnecessaryRerenders>
        </motion.div>
      </AnimatePresence>
    </main>
  )
}
