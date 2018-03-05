import React from "react"
import Link from 'gatsby-link'
import { css, link } from 'glamor'
import typo, { rhythm, options } from '../utils/typography'

import cdn from '../utils/cdn'

import './index.css'

const outerStyle = css({
    margin: '0 auto',
    maxWidth: 800,
    padding: rhythm(1),
    paddingTop: rhythm(1),
})

const headerBoxStyle = css({
    borderBottom: '1px solid #bbb',
    marginBottom: rhythm(1),
    fontStyle: 'normal',
    display: 'flex',
})

const linkStyle = css({
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    textAlign: 'right',
    justifyContent: 'center',
    margin: 0,
})

const LinkButton = ({ name, slug }) => (
    <Link css={{ color: options.headerColor, marginLeft: rhythm(.5) }} to={slug}>{name}</Link>
)

const Header = ({ title }) => (
    <div css={headerBoxStyle}>
        <Link to="/">
            <h1>{title}</h1>
        </Link>
        <div css={linkStyle}>
            <h3>
                <LinkButton name={'About'} slug={'/about/'} />
                <LinkButton name={'Projects'} slug={'/projects/'} />
            </h3>
        </div>
    </div>
)


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
    width: '100%',
})

const Sidebar = ({ children, position }) => {
    if (position === 'left') {
        sidebarStyle.right = undefined
        sidebarStyle.left = 0
    }
    return (
        <div css={sidebarStyle}>
        </div>
    )
}

export default ({ children, data, location }) => {
    if (location.pathname === '/') {
        return (
        <div>
            {children()}
        </div>
        )
    } else {
    return (
        <div css={outerStyle}>
            <Header title={data.site.siteMetadata.title} />
            {children()}
            <Sidebar position="left">
                {<img css={headshotStyle} src={cdn.nyc} />}
            </Sidebar>

            <Sidebar position="right">
                {<div>hello</div>}
            </Sidebar>
        </div>
    )}
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
