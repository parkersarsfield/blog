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
    background: '#000',
    ':after': {
        content: ' ',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        background: `url(${bg})`,
        backgroundPosition: 'center',
        opacity: '.2',
    }
})

const contentStyle = css({
    width: '100%',
    position: 'absolute',
    color: '#eee',
    textAlign: 'center',
    fontWeight: 'lighter',
    fontSize: rhythm(1),
    maxWidth: '100%',
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
    textAlign: 'right',
})

const pageLinkStyle = css({
    color: '#eee',
    border: '1px solid #ffdf00',
    margin: rhythm(0.5),
    padding: rhythm(.25),
    backgroundColor: 'transparent',
    transition: 'background .1s linear',
    ':hover': {
        backgroundColor: '#ffdf00',
        fontWeight: 'bold',
    },
})

const scrollButton = css({
    background: '#ffdf00',
    position: 'absolute',
    bottom: '0',
    zIndex: '1',
    left: 0,
    right: 0,
    margin: `${rhythm(1)} auto`,
    width: '10rem',
    borderRadius: '1000px',
    display: 'flex',
    flexDirection: 'column',
    fontSize: rhythm(.5),
    justifyContent: 'center',
    fontWeight: 'light',
    ':after': {
        content: ' ',
        boxSizing: 'border-box',
        height: rhythm(.5),
        width: rhythm(.5),
        border: 'solid #333',
        borderWidth: '0px 2px 2px 0px',
        transform: 'rotate(45deg)',
        margin: '0 auto 10px auto',
        left: 0,
        right: 0,
        position: 'relative',
    }
})


const container = css({
    position: 'absolute',
    width: '100%',
    height: '100%',
})

const Typer = ({ config, textList, restart }) => {
    return (
        <Typist {...config}>
            {textList.map(thing => <span key={thing}>{thing}<Typist.Backspace delay={2000} count={thing.length + 1} /></span>)}
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

    render() {
        const thingsIAm = ['software engineer', 'sneakerhead', 'front-end developer', 'musician']

        const restart = () => {
            this.setState({ isTyping: false })
            this.setState({ isTyping: true })
        }

        const typerConfig = {
            avgTypingDelay: 100,
            onTypingDone: restart,
        }

        return (
            <div css={container}>
                <div css={heroStyle}>
                    <Header title={'Parker Sarsfield'} isFrontPage={true}/>

                    <div css={contentStyle}>
                        <p>Hi! I'm <span style={{ fontWeight: 'bold' }}>Parker</span>. I am a:</p>
                        {this.state.isTyping ? <Typer config={typerConfig} textList={thingsIAm} /> : null}
                    </div>
                    <div css={scrollButton}>
                        <div>
                            About Me
                </div>
                    </div>
                </div>
                <AboutGrid bannerSizes={this.props.data.shoeImage.sizes} lastImageSizes={this.props.data.lastImage.sizes} />
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
    },
    lastImage: imageSharp(id: { regex: "/nyc.jpg/" }) {
        sizes(maxWidth: 1000) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
  }
`
