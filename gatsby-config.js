require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { gray100 } = require('@carbon/elements');

module.exports = {
  siteMetadata: {
    title: "Texas State Travel Guide",
    description: "Everything you need to know about travel destinations in Texas",
    keywords: "travel, tourism, things to do, texas, texas highways, travel texas, txdot",
    homepageTheme: 'g10',
    interiorTheme: 'g10',
    isSearchEnabled: false,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Texas State Travel Guide',
        short_name: 'TSTG',
        icon: 'src/images/favicon.png',
        theme_color: gray100,
        background_color: gray100
      },
    },
    {
      resolve: "gatsby-theme-carbon",
      options: {
        name: "Texas State Travel Guide",
        iconPath: "./src/images/favicon.png",
        short_name: "Travel Guide",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#000000",
        display: "browser",
        titleType: 'append',
        isSearchEnabled: false,
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NX2L52C",
        includeInDevelopment: false,
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sharp-exif`,
    'gatsby-plugin-htaccess',
  ],
}