require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Texas State Travel Guide",
    description: "Everything you need to know about travel destinations in Texas",
    keywords: "travel, tourism, things to do",
    homepageTheme: 'g10',
    isSearchEnabled: false,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: `src/images/favicon.png`,
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
        theme_color: "#0062ff",
        display: "browser",
        titleType: 'append',
        isSearchEnabled: false,
      }
    },
    'gatsby-theme-carbon',
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sharp-exif`,
    'gatsby-plugin-htaccess',
  ],
}