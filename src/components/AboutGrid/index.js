import React from 'react'
import { css } from 'glamor'
import { rhythm } from '../../utils/typography'
import Link from 'gatsby-link'
import PostPreview from './PostPreview'
import Img from 'gatsby-image'
import SlantedBg from '../SlantedBg'
import Timeline from '../AboutGrid/Timeline'
import longPicSrc from '../../media/mountain.jpg'
import shoeSrc from '../../media/shoes.jpg'

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
    padding: rhythm(1)
  }
})

const infoSection = css({
  position: 'relative',
  overflow: 'visible',
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%'
})

const hideOnMobile = css({
  '@media(max-width: 1000px)': {
    display: 'none'
  }
})

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
    fontWeight: 'bold'
  }
})

const imgContainer = css({
  minWidth: '100%'
})

const AboutGrid = ({
  aboutText,
  bannerSizes,
  lastImageSizes,
  timelineImages
}) => {
  return (
    <div css={container}>
      <div css={infoSection} style={{ maxWidth: '600px' }}>
        <h1>About Me</h1>
        <p>
          I'm Parker Sarsfield. I am a developer, sneakerhead, musician, and
          tech junkie.
        </p>
        <p>
          I am an incoming software engineer at Capital One, and a freelance web
          developer.{' '}
        </p>
        <p>
          When I'm not working hard with cutting edge technology, you can find
          me sneaker shopping, reading, or playing Spikeball.
        </p>
        <p>
          I am always open to new opportunities and interesting projects. Don't
          hesitate to <Link to="/contact">contact me!</Link>
        </p>
      </div>
      <div css={[infoSection, hideOnMobile, { width: '380px' }]}>
        <h3>What I'm Listening to</h3>
        <iframe
          src="https://open.spotify.com/embed/user/1266242470/playlist/6b3Yy0FEyh1b98UVFiNes3"
          width="100%"
          height="380"
          frameBorder="0"
          allowTransparency="true"
        />
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
          '& div': { width: '100%' }
        }}
      >
        <Img sizes={lastImageSizes} />
      </div>
      <div
        css={[
          infoSection,
          { flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center' }
        ]}
      >
        {/* <h1>Learn More!</h1> */}
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
  )
}

export default AboutGrid
