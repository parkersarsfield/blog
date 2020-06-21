import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import BackButton from '../components/BackButton';
import PrevNextNav from '../components/PrevNextNav';
import Layout from '../components/layout';

const BlogPost = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  return (
    <Layout location={location}>
      <div>
        <BackButton to="/blog" />
        <h2>{post.frontmatter.title}</h2>
        <h3>
          <span style={{ color: '#BBB' }}>{post.frontmatter.date}</span>
        </h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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

// eslint-disable-next-line no-undef
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
