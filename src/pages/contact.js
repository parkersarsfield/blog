import React from 'react'
import { css } from 'glamor'
import { rhythm } from '../utils/typography'
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'

const formStyle = css({
  padding: rhythm(1),
  minWidth: '300px',
  '& label': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  '& input': {
    border: '1px solid lightgrey',
  },
  '& textarea': {
    resize: 'none',
    height: rhythm(4),
    border: '1px solid lightgrey',
  },
  '& p:last-of-type': {
    textAlign: 'center',
  },
})

const linksStyle = css({
  padding: rhythm(1),
  '@media(max-width: 600px)': {
    width: '100%',
    padding: 0,
  },
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
})

const containerStyle = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  padding: rhythm(1),
  justifyContent: 'center',
  '@media(max-width: 600px)': {
    width: '100%',
    padding: 0,
  },
})

const linkStyle = css({
  width: '100%',
  height: rhythm(2),
  margin: `0 0 ${rhythm(1)} 0`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  '& .fa': {
    marginRight: rhythm(0.5),
  },
  '& span:last-of-type': {
    overflow: 'hidden',
    maxHeight: rhythm(1),
  },
  '&:hover span:last-of-type': {
    maxWidth: '100%',
  },
})

const SocialLink = ({ url, icon, text }) => (
  <a href={url} css={linkStyle}>
    <FontAwesome name={icon} size="3x" />
    <span css={{}}>{text}</span>
  </a>
)

const Contact = () => {
  const socialSites = [
    {
      url: 'https://github.com/parkersarsfield',
      icon: 'github',
      text: 'Clone my code.',
    },
    {
      url: 'https://www.linkedin.com/in/parker-sarsfield-bb978b118/',
      icon: 'linkedin',
      text: 'Connect with me.',
    },
    {
      url: 'https://www.twitter.com/parkersarsfield/',
      icon: 'twitter',
      text: 'Follow me.',
    },
  ]

  return (
    <div css={containerStyle}>
      <div css={formStyle}>
        <form name="contact" method="POST" netlify>
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
      <div css={linksStyle}>
        {socialSites.map(s => (
          <SocialLink url={s.url} icon={s.icon} text={s.text} />
        ))}
      </div>
    </div>
  )
}

export default Contact
