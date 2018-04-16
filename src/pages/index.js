import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'
import Typist from 'react-typist'
import { rhythm } from '../utils/typography'
import Img from 'gatsby-image'

import bg from '../media/bg.jpg'
import 'react-typist/dist/Typist.css'

import AboutGrid from '../components/AboutGrid'
import Header from '../components/Header'
import Footer from '../components/Footer'

const heroStyle = css({
  position: 'relative',
  top: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  zIndex: '-1'
})

const contentStyle = css({
  width: '100%',
  position: 'absolute',
  color: '#333',
  textAlign: 'center',
  fontWeight: 'lighter',
  fontSize: rhythm(1),
  maxWidth: '100%'
})

const navStyle = css({
  width: '75%',
  color: '#eee',
  top: 0,
  position: 'absolute',
  zIndex: '1',
  padding: rhythm(1),
  margin: '0 auto',
  left: 0,
  right: 0,
  textAlign: 'right'
})

const pageLinkStyle = css({
  color: '#eee',
  border: '1px solid #ffdf00',
  margin: rhythm(0.5),
  padding: rhythm(0.25),
  backgroundColor: 'transparent',
  transition: 'background .1s linear',
  ':hover': {
    backgroundColor: '#ffdf00',
    fontWeight: 'bold'
  }
})

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
    position: 'relative'
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
    cursor: 'pointer'
  }
})

const container = css({
  position: 'absolute',
  width: '100%',
  height: '100%'
})

const Typer = ({ config, textList, restart }) => {
  return (
    <Typist {...config}>
      {textList.map(thing => (
        <span key={thing}>
          {thing}
          <Typist.Backspace delay={2000} count={thing.length + 1} />
        </span>
      ))}
    </Typist>
  )
}

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isTyping: true
    }
  }

  scrollToAboutSection() {
    // the about section starts at 100% of the height of the screen (window.innerHeight)
    window.scrollTo(0, window.innerHeight)
  }

  render() {
    const thingsIAm = [
      'software engineer',
      'sneakerhead',
      'front-end developer',
      'musician'
    ]

    const restart = () => {
      this.setState({ isTyping: false })
      this.setState({ isTyping: true })
    }

    const typerConfig = {
      avgTypingDelay: 100,
      onTypingDone: restart
    }

    return (
      <div css={container}>
        <div css={scrollButton} onClick={this.scrollToAboutSection}>
          About Me
        </div>
        <Header
          logo={this.props.data.logo.resolutions}
          title={'Parker Sarsfield'}
          isFrontPage={true}
          isModalOpen={this.props.isModalOpen}
          closeMenu={this.props.closeMenu}
          openMenu={this.props.openMenu}
        />
        <div css={heroStyle}>
          <div css={contentStyle}>
            <p>
              Hi! I'm <span style={{ fontWeight: 'bold' }}>Parker</span>. I am
              a:
            </p>
            {this.state.isTyping ? (
              <Typer config={typerConfig} textList={thingsIAm} />
            ) : null}
          </div>
        </div>

        <AboutGrid
          bannerSizes={this.props.data.shoeImage.sizes}
          lastImageSizes={this.props.data.lastImage.sizes}
          timelineImages={{
            faithlife: this.props.data.faithlife.resolutions,
            vandy: this.props.data.vandy.resolutions,
            capitalone: this.props.data.capitalone.resolutions
          }}
        />
        <Footer />
      </div>
    )
  }
}

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
  }
`
