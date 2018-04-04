import React from 'react'
import { css } from 'glamor'
import { rhythm, options } from '../utils/typography'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'


const headerBoxStyle = css({
    borderBottom: '1px solid #bbb',
    marginBottom: rhythm(1),
    fontStyle: 'normal',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: rhythm(1),
    '& a': {
        flex: '1',
    },
    '& h1': {
        margin: '0',
    },
    '& h3': {
        margin: '0',
    },
    '@media(max-width: 800px)': {
        paddingBottom: rhythm(.5),
        '& div': {
            display: 'none',
        },
        '& div:last-of-type': {
            display: 'block',
        }
    }
})

const frontPageStyle = Object.assign({}, headerBoxStyle)

Object.assign(frontPageStyle, {
    margin: '0 auto',
    borderBottom: '1px solid #eee',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    display: 'flex',
    maxWidth: '800px',
    padding: rhythm(1),
    '& h1': {
        color: '#eee',
        margin: '0',
    },
    '& h3': {
        margin: 0,

    },
    '& h3 a': {
        color: '#eee',
        flex: '1',
    },
    '& div': {
        color: '#eee',
    },
    '& a': {
        flex: '1',
        textAlign: 'left',
    },
    '@media(max-width: 800px)': {
        paddingBottom: rhythm(.5),

        '& div': {
            display: 'none',
        },
        '& div:last-of-type': {
            display: 'block',
        }
    }
})

const linkStyle = css({
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    textAlign: 'right',
    justifyContent: 'center',
    margin: 0,
    '& a': {
        
        '&:hover': {
            borderBottom: '2px solid #ffdf00',
        }
    },

})

const slideButton = css({
    '@media(min-width: 800px)': {
        display: 'none',
    },
    display: 'block',
})

const LinkButton = ({ name, slug }) => (
    <Link css={{ color: options.headerColor, marginLeft: rhythm(.5), }} to={slug}>{name}</Link>
)

const Header = ({ title, isFrontPage }) => (
    <div css={isFrontPage ? frontPageStyle : headerBoxStyle}>
        <Link css={{ border: 'none' }} to="/">
            <h1>{title}</h1>
        </Link>
        <div css={linkStyle}>
            <h3>
                <LinkButton name={'Blog'} slug={'/blog'} />
                <LinkButton name={'Projects'} slug={'/projects'} />
                <LinkButton name={'Contact'} slug={'/contact'} />
            </h3>
        </div>
        <div css={slideButton}>
            <FontAwesome name={'angle-left'} size={'3x'} />
        </div>
    </div>
)

export default Header
