module.exports = {
  siteMetadata: {
    title: 'Patrick Burtchaell',
    description: ''
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
     resolve: 'gatsby-source-filesystem',
     options: {
       path: `${__dirname}/src/pages`,
       name: 'markdown-pages'
     },
   },
   'gatsby-transformer-remark'
  ]
};
