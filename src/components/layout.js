import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { css } from 'glamor';
import { rhythm } from '../utils/typography';
import { Helmet } from 'react-helmet';

// imports fa icons once for use across site
// eslint-disable-next-line no-unused-vars
import faStyles from 'font-awesome/css/font-awesome.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import './index.css';

const outerStyle = css({
  margin: '0 auto',
  maxWidth: 800,
  padding: rhythm(1),
  paddingBottom: 0,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

const HeadData = () => (
  <Helmet
    htmlAttributes={{
      lang: 'en',
    }}
    title={'Parker Sarsfield'}
  />
);

export default ({ children, location }) => {
  if (location.pathname === '/') {
    return (
      <div
        css={{ display: 'flex', minHeight: '100%', flexDirection: 'column' }}
      >
        <HeadData />
        <div css={{ flex: '1 0 auto', minHeight: 'fit-content' }}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
            }
          }
          logo: imageSharp(fluid: { originalName: { regex: "/logo.png/" } }) {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      `}
      render={(data) => (
        <div css={outerStyle}>
          <HeadData />
          <div css={{ flex: '1' }}>
            <Header
              logo={data.logo.fixed}
              title={data.site.siteMetadata.title}
              isFrontPage={false}
            />
            {children}
          </div>
          <Footer />
        </div>
      )}
    />
  );
};
