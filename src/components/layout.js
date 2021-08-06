import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';

const HeadData = () => (
  <Helmet
    htmlAttributes={{
      lang: 'en',
    }}
    title={'Parker Sarsfield'}
  />
);

export default ({ children }) => {
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
        <div className="container mx-auto">
          <HeadData />
          <Header
            logo={data.logo.fixed}
            title={data.site.siteMetadata.title}
            isFrontPage={false}
          />
          <div className="left-0 right-0 m-auto w-xl">{children}</div>
          <Footer />
        </div>
      )}
    />
  );
};
