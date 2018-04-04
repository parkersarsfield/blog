import Typography from 'typography'
import judahTheme from 'typography-theme-judah'

judahTheme.headerFontFamily = ['Open Sans', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif']
judahTheme.bodyFontFamily = ['Open Sans', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif']
judahTheme.googleFonts = [{
    name: 'Open Sans',
    styles: ['400']
}]

const typography = new Typography(judahTheme)

export default typography
