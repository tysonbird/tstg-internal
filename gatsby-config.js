module.exports = {
  siteMetadata: {
    title: "Texas State Travel Guide",
    description: "Everything you need to know about travel destinations in Texas",
    keywords: "travel, tourism, things to do",
    homepageTheme: 'g10'
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Texas State Travel Guide",
        icon: "src/images/tstg-favicon.png",
        short_name: "Travel Guide",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0062ff",
        display: "browser",
        titleType: 'append'
      },
    },
    'gatsby-theme-carbon',
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sharp-exif`,
  ],
}