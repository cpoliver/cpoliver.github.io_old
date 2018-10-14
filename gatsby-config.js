module.exports = {
  siteMetadata: {
    title: "Charles P. Oliver | Full-Stack Developer"
  },
  plugins: [
    "gatsby-plugin-favicon",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /components/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "cpoliver.com",
        short_name: "starter",
        start_url: "/",
        background_color: "#171727",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/favicon.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true
      }
    }
  ]
};
