import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { css } from 'glamor';
import { rhythm } from '../../utils/typography';

const projectCard = css({
  border: '1px solid #eee',
  display: 'flex',
  alignContent: 'center',
  width: '100%',
  padding: rhythm(0.5),
});

const ProjectCard = ({ node }) => (
  <Link
    to={node.fields.slug}
    css={{ textDecoration: 'none', color: 'inherit' }}
  >
    <div key={node.id} css={projectCard}>
      <div css={{ width: '40%' }}>
        <Img sizes={node.frontmatter.image.childImageSharp.sizes} />
      </div>
      <div
        css={{
          display: 'flex',
          flex: '1',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          css={{
            borderLeft: '4px solid #333',
            marginLeft: rhythm(1),
            paddingLeft: rhythm(1),
          }}
        >
          <h2>{node.frontmatter.title}</h2>
          <p css={{ color: '#333' }}>{node.frontmatter.description} </p>
          <p css={{ color: '#333', fontSize: rhythm(0.5) }}>
            Tech: {node.frontmatter.tech.join(', ')}
          </p>
        </div>
      </div>
    </div>
  </Link>
);

ProjectCard.propTypes = {
  node: PropTypes.object.isRequired,
};

const ProjectPage = ({ data }) => {
  return (
    <div>
      <h1>My Projects</h1>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <ProjectCard key={node.id} node={node} />
        ))}
      </div>
    </div>
  );
};

ProjectPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProjectPage;

// eslint-disable-next-line no-undef
export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            description
            tech
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
