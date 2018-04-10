import React from 'react'
import Link from 'gatsby-link'
import { css, link } from 'glamor'
import typo, { rhythm, options } from '../utils/typography'
import { Helmet } from 'react-helmet'

import cdn from '../utils/cdn'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'

const outerStyle = css({
  margin: '0 auto',
  maxWidth: 800,
  padding: rhythm(1),
  paddingBottom: 0,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
})

const sidebarStyle = css({
  position: 'absolute',
  right: '0',
  top: '0',
  bottom: '0',
  margin: `auto ${rhythm(1)}`,
  height: '75%',
  width: '12rem',
  padding: rhythm(0.5),
  '@media(max-width: 1200px)': {
    display: 'none'
  },
  textAlign: 'center'
})

const headshotStyle = css({
  borderRadius: '100%',
  width: '100%'
})

const Sidebar = ({ children, position }) => {
  if (position === 'left') {
    sidebarStyle.right = undefined
    sidebarStyle.left = 0
  }
  return <div css={sidebarStyle} />
}

const HeadData = () => (
  <Helmet
    htmlAttributes={{
      lang: 'en'
    }}
    title={'Parker Sarsfield'}
  />
)

export default ({ children, data, location }) => {
  if (location.pathname === '/') {
    return (
      <div
        css={{ display: 'flex', minHeight: '100%', flexDirection: 'column' }}
      >
        <HeadData />
        <div css={{ flex: '1 0 auto', minHeight: 'fit-content' }}>
          {children()}
        </div>
      </div>
    )
  } else {
    return (
      <div css={outerStyle}>
        <HeadData />
        <div css={{ flex: '1' }}>
          <Header title={data.site.siteMetadata.title} isFrotPage={false} />
          {children()}
        </div>
        <Footer />
      </div>
    )
  }
}

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
