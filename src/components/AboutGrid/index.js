import React from 'react'
import { css } from 'glamor'
import {rhythm} from '../../utils/typography'
import Link from 'gatsby-link'
import PostPreview from './PostPreview'

import longPicSrc from '../../media/mountain.jpg'
import shoeSrc from '../../media/shoes.jpg'

const container = css({
    position: 'relative',
    maxWidth: '1000px',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(4, minmax(100px, max-content));',
    gridGap: '20px',
    margin: '20px auto',
    left: 0,
    right: 0,
    alignItems: 'center',
    '> div': {
        padding: rhythm(1),
    }
})

const about = css({
    gridColumn: 'span 8'
})

const spotify = css({
    gridColumn: 'span 4',
})

const history = css({
    gridColumn: 'span 5',
    gridRow: 'span 2',
    '& ul li': {
        listStyleType: 'none',
        position: 'relative',
        width: '6px',
        margin: '0 auto 0 0',
        paddingTop: '50px',
        background: '#aaa',
        '::after': {
            content: ' ',
            position: 'absolute',
            left: '50%',
            bottom: 0,
            transform: 'translateX(-50%)',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: '#ffdf00',
        },
        ':last-child::after': {
            background: '#4bb543',
        },
        '& div': {
            position: 'relative',
            bottom: '0',
            width: rhythm(10),
            padding: rhythm(1),
        }
    }
})

const blogPreview = css({
    gridColumn: 'span 7',
    gridRow: '',
})

const longPhoto = css({
    gridColumn: 'span 7',
})

const learnMore = css({
    gridColumn: 'span 7',
    alignSelf: 'start',
})

const buttonStyle= css({
    color: '#333',
    border: '1px solid #ffdf00',
    margin: rhythm(0.5),
    padding: rhythm(.25),
    backgroundColor: '#ffdf00',
    transition: 'background .1s linear',
    ':hover': {
        backgroundColor: '#ffdf00',
        fontWeight: 'bold',
    },
})

const shoeStyle = css({
    width: '100%',
    gridColumn: 'span 12',
    gridRow: 'span 1'
})
const AboutGrid = ({ posts, aboutText}) => {
    return (
        <div css={container}>
            <div css={about}>
                <h1>About Me</h1>
                <p>I'm Parker Sarsfield. I am a developer, sneakerhead, musician, and tech junkie.</p>
                <p>I am an incoming software engineer at Capital One, and a freelance web developer. </p>
                <p>When I'm not working hard with the cutting edge technology, you can find me sneaker shopping, reading, or playing Spikeball.</p>
                <p>I am always open to new opportunities and interesting projects. Don't hesitate to <Link to='/contact'>contact me!</Link></p>
            </div>
            <div css={spotify}>
                <h3>What I'm Listening to</h3>
                <iframe src="https://open.spotify.com/embed/user/1266242470/playlist/6b3Yy0FEyh1b98UVFiNes3" width="100%" height="380" frameBorder="0" allowTransparency="true"></iframe>            
            </div>
            <img css={shoeStyle} src={shoeSrc} />
            <div css={history}>
                <h1>My Journey</h1>
                <ul>
                    <li><div>
                            <time>2014-2018</time>
                            <h3>Vanderbilt University</h3>
                            <p>I am finishing up my degree at Vanderbilt University. I studied computer science, classical guitar, and engineering management.</p>
                        </div></li>
                    <li><div>
                        <time>2016</time>
                        <h3>Faithlife Inc.</h3>
                        <p>Faithlife is where I fell in love with web development. I worked on <a href="https://www.faithlife.com">this site</a>.</p>
                    </div></li>
                    <li><div>
                        <time>2017 - present</time>
                        <h3>Capital One</h3>
                        <p>I spent the summer of 2017 at Capital One building full stack web applications for Tech College. I'll be returning full time in September.</p>
                    </div></li>
                </ul>
            </div>
            <div css={longPhoto}>
                <img src={longPicSrc} />
            </div>
            <div css={learnMore}>
                <h1>Learn More!</h1>
                <Link css={buttonStyle} to='/contact'>Contact Me</Link>
                <Link css={buttonStyle} to='/blog'>Read My Blog</Link>
                <Link css={buttonStyle} to='/projects'>See My Work</Link>
            </div>
        </div>
    )
}

export default AboutGrid
