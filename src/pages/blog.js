import React from 'react'
import Link from 'gatsby-link'

import { rhythm } from '../utils/typography'

export default ({ data }) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: 'none', color: 'inherit' }}
          >
            <h3>
              {node.frontmatter.title}{' '}
              <span style={{ color: '#BBB' }}>- {node.frontmatter.date}</span>
            </h3>
          </Link>
          <p style={{ color: '#777' }}>{node.excerpt}</p>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
