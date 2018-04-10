import React from 'react'
import { css } from 'glamor'
import { rhythm, options } from '../utils/typography'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'

const footerStyle = css({
  flexShrink: '0',
  display: 'flex',
  justifyContent: 'center',
})

const Footer = () => (
  <div css={footerStyle}>
    <span>&copy; {new Date().getFullYear()} Parker Sarsfield</span>
  </div>
)

export default Footer
