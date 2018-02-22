module.exports = {
    siteMetadata: {
        title: "Parker Sarsfield",
        author: "Parker Sarsfield"
    },
    plugins: [
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src`
            }
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: ['carios gothic sc']
            }
        },
        'gatsby-plugin-glamor'
    ]
}