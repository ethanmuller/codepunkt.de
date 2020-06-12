import { motion } from 'framer-motion'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import { css, cx } from 'linaria'
import React, { useContext } from 'react'
import { AppStateContext } from '../components/app-state-provider'
import { Seo } from '../components/seo'
import { BREAKPOINTS } from '../settings'
import { formatPostDate } from './util/format-post-date'

const sliderProps = {
  variants: {
    initial: { y: '100%' },
    animate: { y: '0%' },
    exit: { y: '0%', transition: { duration: 0 } },
  },
  transition: {
    ease: [0.48, 1.01, 0.67, 1],
    duration: 0.6,
  },
}

const WritingTemplate = (props) => {
  const { appState } = useContext(AppStateContext)
  const animationDelay = appState === 'splash' ? 2.8 : 0

  const {
    data: {
      mdx: {
        frontmatter: { title, subtitle, description, published, category },
      },
    },
  } = props

  console.log('writing-template', props)
  return (
    <div className={wrapper}>
      <Seo title={`${subtitle ? `${subtitle} ` : ''}${title}`} />
      <motion.header
        variants={{
          initial: {},
          animate: {},
          exit: { transition: { duration: 0 } },
        }}
        transition={{ staggerChildren: 0.2, delayChildren: animationDelay }}
      >
        <h1 className={headline}>
          <div className={cx(slider, subHeadline, firstLetterUppercase)}>
            <motion.span {...sliderProps}>{subtitle}</motion.span>
          </div>
          <div className={cx(slider, firstLetterUppercase)}>
            <motion.span {...sliderProps}>{title}</motion.span>
          </div>
        </h1>
        <p className={cx(slider, teaser)}>
          <motion.span {...sliderProps}>{description}</motion.span>
        </p>
        <div className={cx(slider, meta)}>
          <motion.div className={metaInner} {...sliderProps}>
            <div className={metaItem}>
              <div className={metaLabel}>Published</div>
              <div className={metaContent}>{formatPostDate(published)}</div>
            </div>
            <div className={metaItem}>
              <div className={metaLabel}>Type</div>
              <div className={metaContent}>{category}</div>
            </div>
            <div className={metaItem}>
              <div className={metaLabel}>Tags</div>
              <div className={metaContent}>JavaScript, Something</div>
            </div>
          </motion.div>
        </div>
      </motion.header>
      <div className={mdx}>
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </div>
    </div>
  )
}

export default WritingTemplate

export const query = graphql`
  query mdxPostDetails($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        draft
        title
        subtitle
        description
        published
        category
      }
      timeToRead
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

const mdx = css`
  /* syntax highlighted code */
  code:not(.grvsc-code) {
    color: var(--color-code);
    background: var(--color-code-bg);
  }

  /* override & extend vscode syntax highlighting */
  .grvsc-container {
    background: var(--color-code-bg) !important;
    margin: 0 -3% 1.72rem;
    padding: 18px 3%;
    counter-reset: line;
    border-radius: 8px;
  }
  .grvsc-code {
    font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
      monospace;
    line-height: 1.65;
    font-size: 0.85rem;
  }
  .grvsc-line {
    padding: 0 6px;
    &::before {
      counter-increment: line;
      content: counter(line);
      margin: 0 20px 0 -8px;
      user-select: none;
      color: var(--color-line-numbers);
      text-align: right;
      width: 20px;
      display: inline-block;
    }
  }
`

const wrapper = css`
  max-width: 1000px;
  margin: 0 auto;
`

const meta = css`
  margin: 48px 0 64px 0;
`

const metaInner = css`
  display: flex;
`

const metaItem = css`
  &:nth-child(1) {
    min-width: 55%;
    @media (min-width: ${BREAKPOINTS[1]}px) {
      min-width: 32%;
    }
  }
  &:nth-child(2) {
    min-width: 45%;
    @media (min-width: ${BREAKPOINTS[1]}px) {
      min-width: 18%;
    }
  }
  &:nth-child(3) {
    display: none;
    @media (min-width: ${BREAKPOINTS[1]}px) {
      display: block;
    }
  }
`

const metaLabel = css`
  text-transform: uppercase;
  font-size: 0.75rem;
`

const metaContent = css`
  font-weight: 600;
  font-size: 0.9rem;
`

const headline = css`
  margin-top: 0;
  margin-bottom: 0.86rem;
`

const firstLetterUppercase = css`
  &:first-letter {
    text-transform: uppercase;
  }
`

const subHeadline = css`
  font-size: var(--h2-size);
  font-weight: 400;
`

const teaser = css`
  font-style: italic;
`

const slider = css`
  overflow: hidden;
  span {
    display: block;
  }
`
