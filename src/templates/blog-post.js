import React from 'react'
import Link from 'gatsby-link'

const BlogNav = ({ prev, next }) => {
  return (
    <div>
      {prev ? <Link to={prev.fields.slug}>Previous Post</Link> : null}
      {next ? <Link to={next.fields.slug}>Next Post</Link> : null}
    </div>
  )
}
export default ({ data, pathContext }) => {
  const post = data.markdownRemark
  console.log(pathContext)
  return (
    <div>
      <h2>{post.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <BlogNav next={pathContext.next} prev={pathContext.prev} />
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
