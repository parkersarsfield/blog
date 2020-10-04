import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Header = ({ title }) => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap p-4 pb-2 mb-8 border-b-2 border-gray-400 items-center justify-between">
      <span className="text-3xl font-mono tracking-wide">
        {title}
        <span className="inline-block animate-blink">_</span>
      </span>
      <div className="mt-4 md:mt-0">
        <Link className="text-lg tracking-wide mx-2" to={'/'}>
          About
        </Link>
        <Link className="text-lg tracking-wide mx-2" to={'/blog'}>
          Blog
        </Link>
        <Link className="text-lg tracking-wide mx-2" to={'/projects'}>
          Projects
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
