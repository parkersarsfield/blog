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
                fonts: ['Open Sans']
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: "UA-117186698-1",
              head: false,
              anonymize: true,
              respectDNT: true,
            },
          },
        'gatsby-plugin-glamor',
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ]
}