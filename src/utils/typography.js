import Typography from 'typography'
import judahTheme from 'typography-theme-judah'

judahTheme.headerFontFamily = ['Carrois Gothic SC', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif']
judahTheme.googleFonts = [{
    name: 'Carrois Gothic SC',
    styles: ['400']
}]

const typography = new Typography(judahTheme)

export default typography
