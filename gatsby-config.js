// Get environment variables
const getValueFromEnv = (key, defaultValue = '') => {
  const {env} = process

  if (env[key]) {
    return env[key]
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
          maxWidth: 500,
          linkImagesToOriginal: false,
        },
      },
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
    title: getValueFromEnv('SITE_TITLE', 'Patrick Burtchaell'),
    description: getValueFromEnv('SITE_DESCRIPTION', 'Designer and web developer, working with teams to thoughtfully build impactful products.'),
    keywords: getValueFromEnv('SITE_KEYWORDS'),
    url: getValueFromEnv('URL', 'http://localhost:8000'),
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
