import React from 'react';
import PropTypes from 'prop-types';
import BackButton from '../components/BackButton';
import PrevNextNav from '../components/PrevNextNav';

const BlogPost = ({ data, pathContext }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <BackButton to="/blog" />
      <h2>{post.frontmatter.title}</h2>
      <h3>
        <span style={{ color: '#BBB' }}>{post.frontmatter.date}</span>
      </h3>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <PrevNextNav
        next={pathContext.next}
        prev={pathContext.prev}
        type="Post"
      />
    </div>
  );
};

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired,
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
