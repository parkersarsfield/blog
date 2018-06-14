import React from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import { css } from 'glamor'
import { rhythm } from '../utils/typography'
import BackButton from '../components/BackButton'
import PrevNextNav from '../components/PrevNextNav'
const linkStyle = css({
  flex: 1,
  maxWidth: rhythm(5),
  textAlign: 'center',
  border: '3px solid #333',
  color: '#333',
  margin: rhythm(0.5),
  padding: rhythm(0.25),
  backgroundColor: '#ffdf00',
  borderRadius: '4px',
  border: '2px solid #333',
  ':hover': {
    backgroundColor: '#ffdf00',
    fontWeight: 'bold'
  }
})

export default ({ data, pathContext }) => {
  console.log(pathContext)
  const projectHTML = data.markdownRemark.html
  const project = data.markdownRemark.frontmatter
  return (
    <div>
      <BackButton to="/projects" />
      <h2 css={{ margin: '0' }}>{project.title}</h2>
      <p css={{ color: '#000' }}>{project.description}</p>
      <Img
        css={{ border: '2px solid #333' }}
        sizes={project.image.childImageSharp.sizes}
      />
      <div css={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <a css={linkStyle} href={project.link}>
          See Live
        </a>
        <a css={[linkStyle, { background: 'unset' }]} href={project.source}>
          View Source
        </a>
      </div>
      <div>
        <span>
          <h3>Tools Used:</h3>
          <h4>{project.tech.join(', ')}</h4>
        </span>
      </div>
      <div>
        <h3>About</h3>
        <div dangerouslySetInnerHTML={{ __html: projectHTML }} />
      </div>
      <PrevNextNav
        next={pathContext.next}
        prev={pathContext.prev}
        type="Project"
      />
    </div>
  )
}

export const query = graphql`
  query PortfolioPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        link
        description
        tech
        source
        image {
          childImageSharp {
            sizes(maxWidth: 1000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
