import Typography from 'typography';
import judahTheme from 'typography-theme-judah';

judahTheme.headerFontFamily = [
  'Heebo',
  'Helvetica Neue',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
];
judahTheme.bodyFontFamily = [
  'Heebo',
  'Helvetica Neue',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
];
judahTheme.googleFonts = [
  {
    name: 'Heebo',
    styles: ['100', '300', '400', '700'],
  },
];

judahTheme.headerWeight = 300;

//ignore this to keep the order of args correct
//eslint-disable-next-line no-unused-vars
// judahTheme.overrideThemeStyles = ({ rhythm }, options) => ({
//   // a: {
//   //   color: options.bodyColor,
//   //   textDecoration: 'none',
//   // },
//   // 'a:hover,a:active': {
//   //   color: options.bodyColor,
//   //   textDecoration: 'none',
//   // },
//   // 'p a': {
//   //   color: options.bodyColor,
//   //   fontWeight: 'bold',
//   //   textDecoration: 'none',
//   //   textDecorationColor: '#ffdf00',
//   // },
//   // 'p a:hover, p a:active': {
//   //   color: options.bodyColor,
//   //   fontWeight: 'unset',
//   //   textDecoration: 'underline',
//   //   textDecorationColor: '#ffdf00',
//   // },
// });

const typography = new Typography(judahTheme);
const { rhythm, scale, options } = typography;
export { rhythm, scale, options, typography as default };
