import React from 'react';
import { css } from 'glamor';
import { rhythm } from '../utils/typography';
import { Helmet } from 'react-helmet';

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

export default ({ children, data, location }) => {
  if (location.pathname === '/') {
    return (
      <div
        css={{ display: 'flex', minHeight: '100%', flexDirection: 'column' }}
      >
        <HeadData />
        <div css={{ flex: '1 0 auto', minHeight: 'fit-content' }}>
          {children()}
        </div>
      </div>
    );
  } else {
    return (
      <div css={outerStyle}>
        <HeadData />
        <div css={{ flex: '1' }}>
          <Header
            logo={data.logo.resolutions}
            title={data.site.siteMetadata.title}
            isFrontPage={false}
          />
          {children()}
        </div>
        <Footer />
      </div>
    );
  }
};

// eslint-disable-next-line no-undef
export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
    logo: imageSharp(id: { regex: "/logo.png/" }) {
      resolutions(width: 50) {
        ...GatsbyImageSharpResolutions_tracedSVG
      }
    }
  }
`;
