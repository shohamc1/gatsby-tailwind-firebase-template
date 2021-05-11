require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Site",
    siteUrl: `https://shohamc1.com`, // change later
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Site",
        short_name: "Site",
        start_url: "/",
        display: "standalone",
        icon: "src/assets/favicon.jpg",
      },
    },
  ],
};
