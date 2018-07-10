import React from 'react'
import { css } from 'glamor'
import { rhythm } from '../../utils/typography'
import Img from 'gatsby-image'

const pulse = css.keyframes('pulse', {
  '0%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1.25)' },
  '100%': { transform: 'scale(1)' }
})

const timelineStyle = css({
  width: '100%',
  maxWidth: '600px',
  '& ul': {
    maxWidth: '100%',
    margin: '0 auto'
  },
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
      border: '2px solid #333'
    },
    ':last-child::after': {
      background: '#4bb543',
      animation: `${pulse} 1.5s linear`,
      animationIterationCount: 'infinite',
      left: '-200%'
    },
    '& > div': {
      position: 'relative',
      bottom: '0',
      width: '90vw',
      maxWidth: rhythm(20),
      padding: rhythm(1)
    }
  }
})

const timelineData = [
  {
    date: '2014-2018',
    title: 'Vanderbilt University',
    info:
      'I graduated from Vanderbilt in May of 2018. I studied computer science, classical guitar, and engineering management.',
    logo: 'vandy',
    location: 'Nashville, TN'
  },
  {
    date: 'Summer 2016',
    title: 'Faithlife Inc.',
    info:
      'Faithlife is where I fell in love with software development. I worked on the Faithlife Groups team where I built web apps using React, Redux, and C#.',
    logo: 'faithlife',
    location: 'Bellingham, WA'
  },
  {
    date: 'Summer 2017 - present',
    title: 'Capital One',
    info: `I spent the summer of 2017 at Capital One building full stack web apps for Tech College. I returned full time after my graduation from Vanderbilt.`,
    logo: 'capitalone',
    location: 'McLean, VA'
  }
]

const TimelineSection = ({ date, title, info, image, location }) => (
  <li>
    <div>
      <Img resolutions={image} />
      <div>
        <h4 css={{ margin: rhythm(0.25) + ' 0', color: '#777' }}>{date}</h4>
        <h4 css={{ marginBottom: rhythm(0.5), color: '#777' }}>{location}</h4>
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
    </div>
  </li>
)

const Timeline = ({ images }) => (
  <div css={timelineStyle}>
    <h1>My Journey</h1>
    <ul>
      {timelineData.map(data => (
        <TimelineSection image={images[data.logo]} key={data.title} {...data} />
      ))}
    </ul>
  </div>
)

export default Timeline
