import React from 'react'
import { css } from 'glamor'
import Link from 'gatsby-link'
import { rhythm } from '../utils/typography'
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'

const PrevNextNav = ({ prev, next, type }) => {
  return (
    <div css={{ display: 'flex', justifyContent: 'space-between' }}>
      {prev ? (
        <Link to={prev.fields.slug}>
          <FontAwesome
            css={{ marginBottom: rhythm(1) }}
            name={'angle-left'}
            size="1x"
          />{' '}
          Previous {type}
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link to={next.fields.slug}>
          Next {type}{' '}
          <FontAwesome
            css={{ marginBottom: rhythm(1) }}
            name={'angle-right'}
            size="1x"
          />
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}

export default PrevNextNav
