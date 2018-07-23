import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { rhythm } from '../../utils/typography';
import Link from 'gatsby-link';

const previewStyle = css({
  padding: rhythm(1),
  background: '#ddd',
  margin: `0 0 ${rhythm(1)} 0`,
});

const title = css({
  fontSize: rhythm(0.75),
});

const postInfo = css({
  color: '#aaa',
});

const excerpt = css({
  color: '#333',
});

const linkStyle = css({
  color: 'inherit',
});

const PostPreview = ({ post }) => {
  return (
    <Link to={post.fields.slug} css={linkStyle}>
      <div css={previewStyle}>
        <div css={title}>{post.frontmatter.title}</div>
        <div css={postInfo}>
          <span>{`${post.frontmatter.date} - ${
            post.timeToRead
          } minute read`}</span>
        </div>
        <div css={excerpt}>{post.excerpt}</div>
      </div>
    </Link>
  );
};

PostPreview.propTypes = {
  post: PropTypes.object,
};

export default PostPreview;
