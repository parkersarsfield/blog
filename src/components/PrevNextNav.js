import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const PrevNextNav = ({ prev, next, type }) => {
  return (
    <div className="text-blue-700 underline flex justify-between border-t-2 py-2 mt-4">
      {prev ? <Link to={prev.fields.slug}>Previous {type}</Link> : <div />}
      {next ? <Link to={next.fields.slug}>Next {type}</Link> : <div />}
    </div>
  );
};

PrevNextNav.propTypes = {
  prev: PropTypes.any.isRequired,
  next: PropTypes.any.isRequired,
  type: PropTypes.any.isRequired,
};

export default PrevNextNav;
