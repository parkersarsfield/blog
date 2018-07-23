import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { rhythm, options } from '../utils/typography';
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';
import Img from 'gatsby-image';

const baseHeaderStyle = {
  margin: `0 auto ${rhythm(1)} auto`,
  borderBottom: '1px solid #eee',
  top: 0,
  left: 0,
  right: 0,
  position: 'relative',
  width: '100%',
  display: 'flex',
  maxWidth: '800px',
  paddingBottom: rhythm(1),
  '& h1': {
    margin: '0',
  },
  '& h3': {
    margin: 0,
  },
  '& h3 a': {
    flex: '1',
  },
  '& a': {
    flex: '1',
    textAlign: 'left',
  },
  '@media(max-width: 800px)': {
    paddingBottom: rhythm(0.5),
    borderBottom: 'none',
    '& h1': {
      display: 'none',
    },
  },
};

let frontPage = Object.assign({}, baseHeaderStyle);

frontPage = Object.assign(frontPage, {
  position: 'absolute',
  maxWidth: 800,
  padding: rhythm(1),
  paddingTop: '0',
  top: rhythm(1),
});

const frontPageStyle = css(frontPage);

const newHeaderStyle = css(baseHeaderStyle);

const darkZone = css({
  height: '100vh',
  width: '100vw',
  position: 'fixed',
  top: 0,
  left: 0,
  background: '#000',
  opacity: '.8',
  zIndex: 1,
});

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
    },
  },
  '@media(max-width: 800px)': {
    '& h3': {
      display: 'none',
    },
  },
});

const openLinkStyle = css({
  '@media(max-width: 800px)': {
    '& h3': {
      zIndex: '2',
      display: 'flex',
      width: '100vw',
      flexDirection: 'column',
      position: 'fixed',
      top: 0,
      left: 0,
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
      },
    },
  },
});

const slideButton = css({
  '@media(min-width: 800px)': {
    display: 'none',
  },
  display: 'block',
});

const LinkButton = ({ name, slug, close }) => (
  <Link
    onClick={close}
    css={{ color: options.headerColor, marginLeft: rhythm(0.5) }}
    to={slug}
  >
    {name}
  </Link>
);

LinkButton.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {
    this.setState({
      isMenuOpen: true,
    });
  }

  closeMenu() {
    this.setState({
      isMenuOpen: false,
    });
  }

  render() {
    return (
      <div css={this.props.isFrontPage ? frontPageStyle : newHeaderStyle}>
        <Link
          css={{
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            '& div:first-of-type': {
              maxHeight: '50px',
              marginRight: rhythm(0.5),
            },
          }}
          to="/"
        >
          <Img resolutions={this.props.logo} />
          <h1>{this.props.title}</h1>
        </Link>
        <div css={this.state.isMenuOpen ? openLinkStyle : linkStyle}>
          <h3 className="link-dropdown">
            <LinkButton close={this.closeMenu} name={'Blog'} slug={'/blog'} />
            <LinkButton
              close={this.closeMenu}
              name={'Projects'}
              slug={'/projects'}
            />
            <LinkButton
              close={this.closeMenu}
              name={'Contact'}
              slug={'/contact'}
            />
          </h3>
          <div
            css={this.state.isMenuOpen ? darkZone : { height: '0' }}
            onClick={this.closeMenu}
          />
        </div>
        <div css={slideButton} onClick={this.openMenu}>
          <FontAwesome name={'bars'} size={'2x'} />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  logo: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  isFrontPage: PropTypes.bool.isRequired,
};

export default Header;
