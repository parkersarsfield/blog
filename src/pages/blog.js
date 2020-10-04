import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const BlogPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <div className="max-w-xl left-0 right-0 m-auto">
        <h1 className="mb-4 text-3xl font-light text-center tracking-wide">
          Blog Posts
        </h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="mb-4 margin-auto">
            <Link
              to={node.fields.slug}
              className="text-lg text-blue-700 underline"
            >
              {node.frontmatter.title}{' '}
            </Link>
            <p className="text-sm">
              {node.frontmatter.date} - {node.timeToRead} min read
            </p>
            <p>{node.excerpt}</p>
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
          timeToRead
        }
      }
    }
  }
`;
