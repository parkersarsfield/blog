import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { rhythm } from '../utils/typography';
import FontAwesome from 'react-fontawesome';

const BackButton = ({ to }) => (
  <Link to={to}>
    <FontAwesome
      css={{ marginBottom: rhythm(1) }}
      name={'angle-left'}
      size="1x"
    />{' '}
    Back
  </Link>
);

BackButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default BackButton;
