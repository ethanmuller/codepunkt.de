import { motion } from 'framer-motion'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import { css, cx } from 'linaria'
import React, { useContext } from 'react'
import { AppStateContext } from '../components/app-state-provider'
import { Seo } from '../components/seo'
import { formatPostDate } from './util/format-post-date'

const WritingTemplate = (props) => {
  const { appState } = useContext(AppStateContext)
  const animationDelay = appState === 'splash' ? 2.8 : 0

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

  const {
    data: {
      mdx: {
        frontmatter: { title, subtitle, description, published },
      },
    },
  } = props

  console.log('writing-template', props)
  return (
    <>
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
          <div className={cx(slider, subHeadline)}>
            <motion.span {...sliderProps}>{subtitle}</motion.span>
          </div>
          <div className={slider}>
            <motion.span {...sliderProps}>{title}</motion.span>
          </div>
        </h1>
        <p className={slider}>
          <motion.span {...sliderProps}>{description}</motion.span>
        </p>
        <div className={cx(slider, meta)}>
          <motion.div className={metaInner} {...sliderProps}>
            <div>
              <div className={metaLabel}>Type</div>Article
            </div>
            <div>
              <div className={metaLabel}>Published</div>
              {formatPostDate(published)}
            </div>
          </motion.div>
        </div>
      </motion.header>
      <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
    </>
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

const meta = css`
  margin: 32px 0 48px 0;
`

const metaInner = css`
  display: flex;
  div {
    min-width: 25%;
  }
`

const metaLabel = css`
  text-transform: uppercase;
`

const headline = css`
  margin-bottom: 0.86rem;
`

const subHeadline = css`
  font-size: var(--h2-size);
  font-weight: 400;
`

const slider = css`
  overflow: hidden;
  span {
    display: block;
  }
`
