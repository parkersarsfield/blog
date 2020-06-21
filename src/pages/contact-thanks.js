import React from 'react';

import Layout from '../components/layout';

const ThankYou = ({ location }) => {
  return (
    <Layout location={location}>
      <div>
        <h1>Thanks!</h1>
        <p>Your message has been sent. I&apos;ll get back to you soon!</p>
      </div>
    </Layout>
  );
};

export default ThankYou;
