module.exports = {
  siteMetadata: {
    title: 'Patrick Burtchaell',
    description: 'Designer and web developer, working with teams to thoughtfully build impactful products.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
     resolve: 'gatsby-source-filesystem',
     options: {
       path: `${__dirname}/src/pages`,
       name: 'pages'
     }
   }
  ]
};
