module.exports = {
  siteMetadata: {
    title: 'Codepunkt',
    description:
      'Personal site of Christoph Werner. I write about web development and cloud topics.',
    siteUrl: 'https://codepunkt.de',
    author: 'Christoph Werner',
    lang: 'en',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'writing',
        path: `${__dirname}/src/content/writing`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          writing: require.resolve('./src/mdx/writing-template.js'),
        },
        remarkPlugins: [],
        rehypePlugins: [],
        gatsbyRemarkPlugins: [
          // syntax highlighting
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: {
                default: 'Slack Theme Ochin',
                parentSelector: {
                  'html[data-mode=dark]': 'Slack Theme Dark Mode',
                },
              },
              injectStyles: true,
              extensions: ['vscode-styled-components', 'slack-theme'],
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-remove-generator',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-linaria',
    // TODO: use codepunkt icon.
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Codepunkt',
        short_name: 'Codepunkt',
        start_url: '/',
        background_color: '#4483ea',
        theme_color: '#4483ea',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
