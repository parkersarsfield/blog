import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'
import { rhythm } from '../utils/typography'
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'

const BackButton = ({ to }) => (
  <Link to={to}>
    <FontAwesome
      css={{ marginBottom: rhythm(1) }}
      name={'angle-left'}
      size="1x"
    />{' '}
    Back
  </Link>
)

export default BackButton
