import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { rhythm } from '../utils/typography';
import Img from 'gatsby-image';

import AboutGrid from '../components/AboutGrid';
import Header from '../components/Header';
import Footer from '../components/Footer';

const heroStyle = css({
  position: 'relative',
  top: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  zIndex: '-1',
});

const contentStyle = css({
  width: '100%',
  position: 'absolute',
  color: '#333',
  textAlign: 'center',
  fontWeight: '300',
  fontSize: rhythm(1),
  maxWidth: '100%',
});

const scrollButton = css({
  position: 'absolute',
  bottom: '0',
  // zIndex: '1',
  left: 0,
  right: 0,
  margin: `${rhythm(1)} auto`,
  maxWidth: '8rem',
  display: 'flex',
  flexDirection: 'column',
  fontSize: rhythm(0.5),
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'light',
  ':after': {
    content: ' ',
    boxSizing: 'border-box',
    height: rhythm(0.5),
    width: rhythm(0.5),
    border: 'solid #333',
    borderWidth: '0px 2px 2px 0px',
    transform: 'rotate(45deg)',
    margin: '0 auto 10px auto',
    left: 0,
    right: 0,
    position: 'relative',
  },
  color: '#333',
  padding: '0 ' + rhythm(0.25),
  backgroundColor: '#ffdf00',
  transition: 'max-width .1s linear',
  // maxWidth: 'fit-content',
  height: 'fit-content',
  borderRadius: '4px',
  border: '2px solid #333',
  ':hover': {
    fontWeight: 'bold',
    maxWidth: '10rem',
    cursor: 'pointer',
  },
});

const container = css({
  position: 'absolute',
  width: '100%',
  height: '100%',
});

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  scrollToAboutSection() {
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div css={container}>
        <div css={scrollButton} onClick={this.scrollToAboutSection}>
          About Me
        </div>
        <Header
          logo={this.props.data.logo.resolutions}
          title={'Parker Sarsfield'}
          isFrontPage={true}
        />
        <div css={heroStyle}>
          <div css={contentStyle}>
            <Img
              resolutions={this.props.data.headshot.resolutions}
              css={{ borderRadius: '100%', marginBottom: rhythm(2) }}
            />
            <p>I&apos;m Parker.</p>
            <p>I create things.</p>
          </div>
        </div>

        <AboutGrid
          bannerSizes={this.props.data.shoeImage.sizes}
          lastImageSizes={this.props.data.lastImage.sizes}
          timelineImages={{
            faithlife: this.props.data.faithlife.resolutions,
            vandy: this.props.data.vandy.resolutions,
            capitalone: this.props.data.capitalone.resolutions,
          }}
        />
        <Footer />
      </div>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

//eslint-disable-next-line no-undef
export const query = graphql`
  query IndexQuery {
    shoeImage: imageSharp(id: { regex: "/shoes.jpg/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    lastImage: imageSharp(id: { regex: "/nyc.jpg/" }) {
      sizes(maxWidth: 350) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    faithlife: imageSharp(id: { regex: "/faithlife.png/" }) {
      resolutions(width: 50) {
        ...GatsbyImageSharpResolutions_tracedSVG
      }
    }
    vandy: imageSharp(id: { regex: "/vandy.png/" }) {
      resolutions(width: 50) {
        ...GatsbyImageSharpResolutions_tracedSVG
      }
    }
    capitalone: imageSharp(id: { regex: "/cap1.png/" }) {
      resolutions(width: 50) {
        ...GatsbyImageSharpResolutions_tracedSVG
      }
    }
    logo: imageSharp(id: { regex: "/logo.png/" }) {
      resolutions(width: 50) {
        ...GatsbyImageSharpResolutions_tracedSVG
      }
    }
    headshot: imageSharp(id: { regex: "/headshot.png/" }) {
      resolutions(width: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
