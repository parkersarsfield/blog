import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const BlogPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <div>
        <h1>My Blog</h1>
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
    </Layout>
  );
};

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPage;

// eslint-disable-next-line no-undef
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
`;
