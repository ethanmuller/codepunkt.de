import { graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import React from "react"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"

const WritingTemplate = props => {
  console.log("writing-template", props)

  const {
    data: {
      mdx: {
        frontmatter: { title, subtitle, description },
      },
    },
  } = props

  return (
    <Layout>
      <Seo title={`${subtitle ? `${subtitle} ` : ""}${title}`} />
      <header>
        <h2>{subtitle}</h2>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
    </Layout>
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
