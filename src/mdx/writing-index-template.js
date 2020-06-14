import { motion } from 'framer-motion'
import { graphql, Link, navigate } from 'gatsby'
import { css, cx } from 'linaria'
import React, { useContext } from 'react'
import { AppStateContext } from '../components/app-state-provider'
import { Seo } from '../components/seo'
import { CONTENT_STAGGER_MSEC } from '../settings'
import { formatPostDate } from './util/format-post-date'

const variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 1, y: 0, transition: { duration: 0 } },
}
const transition = { ease: 'easeOut', duration: 0.5 }

const HEADER_ANIMATION_DURATION = 0.6
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

const WritingIndexTemplate = (props) => {
  const {
    data: {
      allMdx: { nodes: articles },
    },
    // TODO: use this to build pagination
    // pageContext: {
    //   pageInfo: { hasPreviousPage, hasNextPage, currentPage },
    // },
  } = props

  const { appState } = useContext(AppStateContext)
  const animationDelay = appState === 'splash' ? 2.8 : 0

  console.log('writing-index-template', props)
  return (
    <motion.div
      className={wrapper}
      variants={{
        initial: {},
        animate: {},
        exit: { transition: { duration: 0 } },
      }}
      transition={{
        staggerChildren: CONTENT_STAGGER_MSEC / 1000,
        delayChildren: animationDelay + HEADER_ANIMATION_DURATION,
      }}
    >
      <Seo title="Writing" />
      <motion.header
        variants={{
          initial: {},
          animate: {},
          exit: { transition: { duration: 0 } },
        }}
        transition={{ staggerChildren: 0.2, delayChildren: animationDelay }}
      >
        <h1 className={cx(headline, slider)}>
          <motion.span {...sliderProps}>My writing</motion.span>
        </h1>
        <p className={cx(intro, slider)}>
          <motion.span {...sliderProps}>
            Articles and short snippets on a broad spectrum of web- and
            cloud-related development topics, aimed at teaching you something
            new and improving my own knowledge with your feedback. Practical
            lessons from real world projects and observations from evaluation of
            new technology.
          </motion.span>
        </p>
      </motion.header>
      <ul className={articleList}>
        {articles.map(
          ({
            frontmatter: { title, subtitle, description, published, category },
            fields: { path },
          }) => {
            return (
              <motion.li
                className={articleListItem}
                key={path}
                variants={variants}
                transition={transition}
                onClick={() => navigate(path)}
              >
                <div>{formatPostDate(published)}</div>
                <Link to={path} className={articleLink}>
                  <h2 className={articleHeadline}>
                    {subtitle ? `${subtitle} ${title}` : title}
                  </h2>
                </Link>
                <p className={articleTeaser}>{description}</p>
              </motion.li>
            )
          }
        )}
      </ul>
    </motion.div>
  )
}

export default WritingIndexTemplate

export const query = graphql`
  query mdxPostList($ids: [String]) {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___published] }
      filter: { id: { in: $ids } }
    ) {
      nodes {
        fields {
          path
        }
        frontmatter {
          draft
          title
          subtitle
          description
          published
          category
        }
        id
        timeToRead
      }
    }
  }
`

const wrapper = css`
  max-width: 1000px;
  margin: 0 auto;
`
const headline = css`
  margin: 0;
`
const intro = css`
  font-style: italic;
  margin-bottom: 4em;
`
const articleList = css``
const articleListItem = css`
  margin-bottom: 2.4em;
`
const articleHeadline = css`
  margin: 0 0 0.4em 0;
  display: inline-block;
  color: var(--color-link);

  text-decoration: none;
  background-position: 0 1.3em;
  background-position: 0 calc(1em + 4px);
  background-image: linear-gradient(
    to right,
    var(--color-link) 100%,
    var(--color-link) 0
  );
  background-repeat: no-repeat;
  background-size: 100% 1px;

  transition: background-size 0.1s ease-out;
  &:hover {
    background-size: 0% 1px;
  }

  text-shadow: -4px 1px var(--color-bg), 4px 1px var(--color-bg),
    -3px 1px var(--color-bg), 3px 1px var(--color-bg), -2px 1px var(--color-bg),
    2px 1px var(--color-bg), -1px 1px var(--color-bg), 1px 1px var(--color-bg),
    0 1px var(--color-bg);

  &:first-letter {
    text-transform: uppercase;
  }
`
const articleTeaser = css`
  margin: 0;
  padding-bottom: 0.4em;
`
const articleLink = css`
  text-decoration: none;
  color: var(--color-text);
`
const slider = css`
  overflow: hidden;
  span {
    display: block;
  }
`
