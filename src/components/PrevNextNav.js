import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { rhythm } from '../utils/typography';
import FontAwesome from 'react-fontawesome';

const PrevNextNav = ({ prev, next, type }) => {
  return (
    <div css={{ display: 'flex', justifyContent: 'space-between' }}>
      {prev ? (
        <Link to={prev.fields.slug}>
          <FontAwesome
            css={{ marginBottom: rhythm(1) }}
            name={'angle-left'}
            size="1x"
          />{' '}
          Previous {type}
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link to={next.fields.slug}>
          Next {type}{' '}
          <FontAwesome
            css={{ marginBottom: rhythm(1) }}
            name={'angle-right'}
            size="1x"
          />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};

PrevNextNav.propTypes = {
  prev: PropTypes.any.isRequired,
  next: PropTypes.any.isRequired,
  type: PropTypes.any.isRequired,
};

export default PrevNextNav;
