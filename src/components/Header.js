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
    zIndex: '1',
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
    alignItems: 'center',
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
        borderBottom: 'none',
        '& h1': {
            fontSize: '1.5rem',
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
    '@media(max-width: 800px)': {
        '& h3': {
            display: 'none',
        },
    }
})

const openLinkStyle = css({
    '@media(max-width: 800px)': {
        '& h3': {
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: ' 12rem',
            background: '#eee',
            '& a': {
                color: '#333',
                borderBottom: '2px solid #333',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0',
                zIndex: 1,
            }
        },
    }
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

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isMenuOpen: false,
        }

        this.openMenu = this.openMenu.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
    }

    openMenu() {
        this.setState({
            isMenuOpen: true,
        })
    }

    closeMenu() {
        this.setState({
            isMenuOpen: false,
        })
    }

    render() {
        return (
            <div css={this.props.isFrontPage ? frontPageStyle : headerBoxStyle}>
                <Link css={{ border: 'none' }} to="/">
                    <h1>{this.props.title}</h1>
                </Link>
                <div css={this.state.isMenuOpen ? openLinkStyle : linkStyle}>
                    <h3>
                        <LinkButton name={'Blog'} slug={'/blog'} />
                        <LinkButton name={'Projects'} slug={'/projects'} />
                        <LinkButton name={'Contact'} slug={'/contact'} />
                    </h3>
                    <div css={this.state.isMenuOpen ? { height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, background: '#000', opacity: '.8' } : { height: '0' }} onClick={this.closeMenu}/>
                </div>
                <div css={slideButton} onClick={this.openMenu}>
                    <FontAwesome name={'bars'} size={'2x'} />
                </div>
            </div>
        )
    }
}

export default Header
