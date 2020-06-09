import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Header } from "./header"
import { Menu } from "./menu"

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Menu />
      <main>{children}</main>
    </>
  )
}
