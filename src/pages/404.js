import React from 'react';
import Link from 'gatsby-link';

const Page404 = () => {
  return (
    <div>
      <h1>Uh Oh!</h1>
      <p>
        You&apos;ve just hit a page that doesn&apos;t exist. Click{' '}
        <Link to="/">here</Link> to go back home.
      </p>
    </div>
  );
};

export default Page404;
