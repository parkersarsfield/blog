import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { rhythm } from '../../utils/typography';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import Timeline from '../AboutGrid/Timeline';

const container = css({
  position: 'relative',
  maxWidth: '1000px',
  display: 'flex',
  flexWrap: 'wrap',
  margin: '20px auto',
  left: 0,
  right: 0,
  justifyContent: 'center',
  '> div': {
    padding: rhythm(1),
  },
});

const infoSection = css({
  position: 'relative',
  overflow: 'visible',
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
});

const buttonStyle = css({
  color: '#333',
  // border: '1px solid #ffdf00',
  margin: rhythm(0.5),
  padding: rhythm(0.25),
  backgroundColor: '#ffdf00',
  transition: 'background .1s linear',
  maxWidth: 'fit-content',
  height: 'fit-content',
  borderRadius: '4px',
  border: '2px solid #333',
  ':hover': {
    backgroundColor: '#ffdf00',
    fontWeight: 'bold',
  },
});

const imgContainer = css({
  minWidth: '100%',
});

const AboutGrid = ({ bannerSizes, lastImageSizes, timelineImages }) => {
  return (
    <div css={container}>
      <div css={infoSection} style={{ maxWidth: '800px' }}>
        <h1>About Me</h1>
        <p>
          Hi! I&apos;m Parker. I am a software developer, sneaker enthusiast,
          musician, and creative. I love creating things from the ground up.
        </p>
        <p>I build software for Capital One in the D.C. metro area. </p>
        <p>
          When I&apos;m not writing code, you can find me sneaker shopping,
          playing guitar, or relaxing in a hammock.
        </p>
        <p>
          I am always open to new opportunities and interesting projects.
          Don&apos;t hesitate to <Link to="/contact">contact</Link> me!
        </p>
      </div>
      <div css={imgContainer}>
        <Img sizes={bannerSizes} />
      </div>
      <Timeline images={timelineImages} />
      <div
        css={{
          width: '400px',
          display: 'flex',
          alignItems: 'center',
          minHeight: '525px',
          maxWidth: '100%',
          '& div': { width: '100%' },
        }}
      >
        <Img sizes={lastImageSizes} />
      </div>
      <div
        css={[
          infoSection,
          { flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center' },
        ]}
      >
        <div
          css={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <Link css={buttonStyle} to="/contact">
            Contact Me
          </Link>
          <Link css={buttonStyle} to="/blog">
            Read My Blog
          </Link>
          <Link css={buttonStyle} to="/projects">
            See My Work
          </Link>
        </div>
      </div>
    </div>
  );
};
AboutGrid.propTypes = {
  bannerSizes: PropTypes.object.isRequired,
  lastImageSizes: PropTypes.object.isRequired,
  timelineImages: PropTypes.object.isRequired,
};

export default AboutGrid;
