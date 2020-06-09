const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// settings
const ARTICLES_PER_PAGE = 100

// Create additional fields on pages
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({ node, name: 'path', value: `/writing${value}` })
  }
}

// Create the pages for browsing blog posts
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    query {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___published] }
        ${
          process.env.NODE_ENV === 'production'
            ? 'filter: {frontmatter: {draft: {ne: true}}}'
            : ''
        }
      ) {
        edges {
          node {
            id
            fields {
              path
            }
          }
        }
      }
    }
  `).then((result, errors) => {
    if (errors) return Promise.reject(errors)

    const posts = [...result.data.allMdx.edges]
    const numPages = Math.ceil(posts.length / ARTICLES_PER_PAGE)

    // create writing pages
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.path,
        component: path.resolve('./src/mdx/writing-template.js'),
        context: {
          id: node.id,
          permaLink: `https://codepunkt.de${node.fields.path}`,
        },
      })
    })

    // create writing index pages
    Array.from({ length: numPages }).forEach((_, i) => {
      const currentPage = i + 1

      createPage({
        path: currentPage === 1 ? `/writing/` : `/writing/${currentPage}/`,
        component: path.resolve('./src/mdx/writing-index-template.js'),
        context: {
          pageInfo: {
            totalCount: numPages,
            currentPage,
            hasPreviousPage: currentPage !== 1,
            hasNextPage: currentPage !== numPages,
          },
          ids: posts
            .slice(
              i * ARTICLES_PER_PAGE,
              i * ARTICLES_PER_PAGE + ARTICLES_PER_PAGE
            )
            .map(({ node }) => node.id),
        },
      })
    })
  })
}
