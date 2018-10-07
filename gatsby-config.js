module.exports = {
  siteMetadata: {
    title: "Charles P. Oliver | Full-Stack Developer"
  },
  plugins: [
    "gatsby-plugin-favicon",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "cpoliver.com",
        short_name: "starter",
        start_url: "/",
        background_color: "#171727",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/favicon.png" // This path is relative to the root of the site.
      }
    }
  ]
};
