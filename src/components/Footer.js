import React from 'react';
import { css } from 'glamor';

const footerStyle = css({
  flexShrink: '0',
  display: 'flex',
  justifyContent: 'center',
});

const Footer = () => (
  <div css={footerStyle}>
    <span>&copy; {new Date().getFullYear()} Parker Sarsfield</span>
  </div>
);

export default Footer;
