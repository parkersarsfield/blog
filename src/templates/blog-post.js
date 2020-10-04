import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import PrevNextNav from '../components/PrevNextNav';
import Layout from '../components/layout';

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className="max-w-xl mx-auto">
        <h1 className="mb-2 text-3xl font-light tracking-wide text-center">
          {post.frontmatter.title}
        </h1>
        <div className="text-sm text-center mb-8">{post.frontmatter.date}</div>
        <div
          className="markdown-section"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <PrevNextNav
          next={pageContext.next}
          prev={pageContext.prev}
          type="Post"
        />
      </div>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default BlogPost;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMM, YYYY")
      }
    }
  }
`;
