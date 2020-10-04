import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const Page404 = ({ location }) => {
  return (
    <Layout>
      <h1>Page Not Found</h1>
      <p>
        You&apos;ve just hit a page that doesn&apos;t exist. Click{' '}
        <Link to="/">here</Link> to go back home.
      </p>
    </Layout>
  );
};

export default Page404;
