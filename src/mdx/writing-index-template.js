import { graphql, Link } from 'gatsby'
import React from 'react'
import { Layout } from '../components/layout'
import { Seo } from '../components/seo'

const WritingIndexTemplate = (props) => {
  console.log('writing-index-template', props)

  const {
    data: {
      allMdx: { nodes: articles },
    },
    // TODO: use this to build pagination
    // pageContext: {
    //   pageInfo: { hasPreviousPage, hasNextPage, currentPage },
    // },
  } = props

  return (
    <Layout>
      <Seo title="Writing" />
      <h1>Writing</h1>
      <ul>
        {articles.map(
          ({
            frontmatter: { title, subtitle, description },
            fields: { path },
          }) => {
            return (
              <li>
                <Link to={path}>
                  {subtitle && <div>{subtitle}</div>}
                  <div>{title}</div>
                </Link>
                <p>{description}</p>
              </li>
            )
          }
        )}
      </ul>
    </Layout>
  )
}

export default WritingIndexTemplate

export const query = graphql`
  query mdxPostList($ids: [String]) {
    allMdx(filter: { id: { in: $ids } }) {
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
