import Typography from 'typography';
import judahTheme from 'typography-theme-judah';

judahTheme.headerFontFamily = [
  'Roboto',
  'Helvetica Neue',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
];
judahTheme.bodyFontFamily = [
  'Roboto',
  'Helvetica Neue',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
];
judahTheme.googleFonts = [
  {
    name: 'Roboto',
    styles: ['100', '300', '400', '700'],
  },
];

judahTheme.headerWeight = 300;

judahTheme.overrideThemeStyles = options => ({
  a: {
    color: options.bodyColor,
    textDecoration: 'none',
  },
  'a:hover,a:active': {
    color: options.bodyColor,
    textDecoration: 'none',
  },
  'p a': {
    color: options.bodyColor,
    fontWeight: 'bold',
    textDecoration: 'none',
    textDecorationColor: '#ffdf00',
  },
  'p a:hover, p a:active': {
    color: options.bodyColor,
    fontWeight: 'unset',
    textDecoration: 'underline',
    textDecorationColor: '#ffdf00',
  },
});

const typography = new Typography(judahTheme);

export default typography;
