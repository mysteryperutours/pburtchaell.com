const siteMetadata = require('./src/content/metadata.json')

// Get environment variables (managed by Netlify CMS admin settings)
const getValueFromEnv = (key, defaultValue = '') => {
  const {env} = process

  if (env[key]) {
    return env[key]
  } else {
    return defaultValue
  }
}

// Get site metadata from JSON file (managed by Netlify CMS)
const getValueFromJson = (key, defaultValue = '') => {
  if (siteMetadata[key]) {
    return siteMetadata[key]
  } else {
    return defaultValue
  }
}

// Configuration for the Gatsby Source Filesystem plugin
const gatsbySourcePages = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `pages`,
    path: `${__dirname}/src/content/`,
  },
}

const gatsbySourceImages = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `assets`,
    path: `${__dirname}/src/assets/`,
  },
}

// Configuration for the Gatsby Transformer Markdown plugin
const gatsbyTransformerMarkdown = {
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 1000,
          linkImagesToOriginal: false,
        },
      },
      `gatsby-remark-prismjs`,
      `gatsby-remark-smartypants`,
    ],
  }
}

// Configuration for Google Analytics
const gatsbyGoogleAnalytics = {
  resolve: `gatsby-plugin-google-analytics`,
  options: {
    trackingId: getValueFromEnv('GOOGLE_ANALYTICS_TRACKING_ID'),
    anonymize: true,
    respectDNT: true,
  },
}

// Default Gatsby configuration
module.exports = {
  siteMetadata: {
    title: getValueFromJson('siteTitle'),
    description: getValueFromJson('siteDescription'),
    keywords: getValueFromJson('siteKeywords'),
    url: getValueFromJson('siteUrl'),
  },
  plugins: [
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-helmet`,
    gatsbySourcePages,
    gatsbySourceImages,
    gatsbyTransformerMarkdown,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cms`,
    gatsbyGoogleAnalytics,
  ]
}
