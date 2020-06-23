import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { rhythm } from '../utils/typography';
import FontAwesome from 'react-fontawesome';
import Layout from '../components/layout';

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
});

const linksStyle = css({
  padding: rhythm(1),
  '@media(max-width: 600px)': {
    width: '100%',
    padding: 0,
  },
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
});

const containerStyle = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'center',
  '@media(max-width: 600px)': {
    width: '100%',
    padding: 0,
  },
});

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
});

const SocialLink = ({ url, icon, text }) => (
  <a href={url} css={linkStyle}>
    <FontAwesome name={icon} size="3x" />
    <span css={{}}>{text}</span>
  </a>
);

SocialLink.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const Contact = ({ location }) => {
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
  ];

  return (
    <Layout location={location}>
      <div css={containerStyle}>
        <h1>Contact Me</h1>
        <div css={formStyle}>
          <form
            name="contact"
            netlify-honeypot="bot-field"
            method="POST"
            action="contact-thanks"
            netlify
          >
            <p css={{ display: 'none' }}>
              <label>
                Don’t fill this out if you&apos;re human:{' '}
                <input name="bot-field" />
              </label>
            </p>
            <p>
              <label>
                Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Email: <input type="text" name="email" />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message" />
              </label>
            </p>
            <p>
              <button
                css={{
                  color: '#333',
                  margin: rhythm(0.5),
                  padding: `${rhythm(0.25)} ${rhythm(0.5)}`,
                  backgroundColor: '#ffdf00',
                  transition: 'background .1s linear',
                  borderRadius: '4px',
                  border: '2px solid #333',
                  ':hover': {
                    backgroundColor: '#ffdf00',
                    fontWeight: 'bold',
                  },
                  cursor: 'pointer',
                }}
                type="submit"
              >
                Send
              </button>
            </p>
          </form>
        </div>
        <div css={linksStyle}>
          {socialSites.map((s) => (
            <SocialLink url={s.url} icon={s.icon} text={s.text} key={s.url} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
