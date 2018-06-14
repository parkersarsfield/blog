import React from 'react'
import Link from 'gatsby-link'
import BackButton from '../components/BackButton'
import PrevNextNav from '../components/PrevNextNav'

export default ({ data, pathContext }) => {
  const post = data.markdownRemark
  return (
    <div>
      <BackButton to="/blog" />
      <h2>{post.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <PrevNextNav
        next={pathContext.next}
        prev={pathContext.prev}
        type="Post"
      />
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
