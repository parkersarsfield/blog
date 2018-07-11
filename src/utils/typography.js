import Typography from 'typography'
import judahTheme from 'typography-theme-judah'

judahTheme.headerFontFamily = [
  'Roboto',
  'Helvetica Neue',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif'
]
judahTheme.bodyFontFamily = [
  'Roboto',
  'Helvetica Neue',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif'
]
judahTheme.googleFonts = [
  {
    name: 'Roboto',
    styles: ['100', '300', '400']
  }
]

judahTheme.headerWeight = 300

const typography = new Typography(judahTheme)

export default typography
