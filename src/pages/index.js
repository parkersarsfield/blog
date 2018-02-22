import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'
import { rhythm } from '../utils/typography'

const heroStyle = css({
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
})

let slideBox = css.keyframes('slideBox', { 
    '0%': { margin: '0 auto' },
    '100%': { margin: rhythm(2)+ ' auto' }
  });

let slideBottom = css.keyframes('slideBot', {
    '0%': {
        height: '0'
    },
    '100%': {
        height: rhythm(4),
    }
})

const box = css({
    textAlign: 'center',
    width: 'fit-content',
    padding: rhythm(1),
    border: '3px solid black',
    background: '#eee',
    margin: rhythm(2) + ' auto',
    ':after': {
        position: 'absolute',
        content: ' ',
        background: 'black',
        border: '1px solid black',
        width: '2px',
        height:rhythm(4),
        animation: `${slideBottom} 1.5s`,
        zIndex: '-1',
        maxHeight: '20%',
    },
    ':before': {
        position: 'absolute',
        content: ' ',
        background: 'black',
        border: '1px solid black',
        width: '2px',
        height:rhythm(4),
        bottom: '50%',
        animation: `${slideBottom} 1.5s`,
        zIndex: '-1',
    },
    animation: `1s ${slideBox}`
})

const textStyle = css({
    margin: 0,
})


const linkStyle = css({
    border: '2px solid black',
    margin: '0 auto',
    padding: rhythm(.5),
    background: '#eee'
})

const PageButton = ({target, text}) => (
    <Link css={linkStyle} to={target}>
        <h2 css={textStyle}>
            {text}
        </h2>
    </Link>
)

export default ({data}) => {
    return (
    <div css={heroStyle}>
        <PageButton target="/blog" text="BLOG" />
        <div css={box}>
            <h1 css={textStyle}>PARKER SARSFIELD</h1>
        </div>
        <PageButton target="/about" text="ABOUT" />
    </div>
    )}

export const query = graphql`
query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
        totalCount
        edges {
            node {
                id
                frontmatter {
                    title
                    date(formatString: "DD MMM, YYYY")
                }
                fields {
                    slug
                }
                excerpt
            }
        }
    }
}
`
