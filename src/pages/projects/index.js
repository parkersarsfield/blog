import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';
import { css } from 'glamor';
import { rhythm } from '../../utils/typography';
import Layout from '../../components/layout';

const projectCard = css({
  border: '2px solid #666',
  display: 'flex',
  alignContent: 'center',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  padding: rhythm(1),
  background: '#fff',
  alignItems: 'center',
  transition: 'padding 1s',
  ':hover': {
    '& .border-left': {
      // paddingTop: rhythm(0.5),
      // paddingBottom: rhythm(0.5),
    },
    border: '2px solid #ffdf00',
  },
  '@media(max-width: 800px)': {
    flexDirection: 'column',
    '& .border-left': {
      borderLeft: 'none',
      borderTop: '2px solid #333',
      margin: `${rhythm(0.5)} 0 0 0`,
      padding: `${rhythm(0.5)} 0 0 0`,
      width: '100%',
      textAlign: 'center',
    },
  },
  margin: `0 0 ${rhythm(1)} 0`,
});

const ProjectCard = ({ node }) => (
  <Link
    to={node.fields.slug}
    css={{ textDecoration: 'none', color: 'inherit' }}
  >
    <div key={node.id} css={projectCard}>
      <div
        css={{
          width: '40%',
          '& img': { margin: '0' },
          '@media(max-width: 800px)': {
            width: '100%',
          },
        }}
      >
        <Img sizes={node.frontmatter.image.childImageSharp.sizes} />
      </div>
      <div
        css={{
          display: 'flex',
          flex: '1',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden',
          height: '100%',
          width: '100%',
        }}
      >
        <div
          css={{
            borderLeft: '4px solid #333',
            marginLeft: rhythm(1),
            paddingLeft: rhythm(1),
          }}
          className="border-left"
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

const ProjectPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <h1>My Projects</h1>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <ProjectCard key={node.id} node={node} />
        ))}
      </div>
    </Layout>
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
      sort: { fields: [frontmatter___title], order: ASC }
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
