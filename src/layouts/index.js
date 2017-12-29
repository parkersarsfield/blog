import React from "react"
import Link from 'gatsby-link'
import { css } from 'glamor'
import typo, { rhythm, options } from '../utils/typography'

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

const LinkButton = ({name, slug}) => (
    <Link css={{color: options.headerColor, marginLeft: rhythm(.5)}}to={slug}>{name}</Link>
)

const Header = ({title}) => (
    <div css={headerBoxStyle}>
        <Link to="/">
            <h3>{title}</h3>
        </Link>
        <div css={{flex: '1', textAlign: 'right'}}>
            <LinkButton name={'About'} slug={'/about/'} />
            <LinkButton name={'Projects'} slug={'/projects/'} />
        </div>
    </div>
)

export default ({ children, data }) => {
    return (
        <div css={outerStyle}>
            <Header title={data.site.siteMetadata.title}/> 
            {children()}
        </div>
    )
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
