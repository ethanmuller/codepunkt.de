import { motion } from 'framer-motion'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import { css } from 'linaria'
import React from 'react'
import { Seo } from '../components/seo'

const WritingTemplate = (props) => {
  console.log('writing-template', props)

  const {
    data: {
      mdx: {
        frontmatter: { title, subtitle, description, published },
      },
    },
  } = props

  return (
    <>
      <Seo title={`${subtitle ? `${subtitle} ` : ''}${title}`} />
      <motion.header
        variants={{
          initial: { x: -100 },
          animate: { x: 0 },
          exit: { x: 0, duration: 0 },
        }}
      >
        <h2>{subtitle}</h2>
        <h1>{title}</h1>
        <p>{description}</p>
        <div
          className={css`
            display: flex;
          `}
        >
          <div>Article</div>
          <div>{published}</div>
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
