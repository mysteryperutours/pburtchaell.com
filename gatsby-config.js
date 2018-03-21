// Get environment variables
const getValueFromEnv = (key, defaultValue = '') => {
  const {env} = process

  if (env[key]) {
    console.log(`\n${key} is set to ${env[key]} in this environment.`)

    return env[key]
  } else {
    console.warn(`\n${key} variable not found in this environment.`)

    return defaultValue
  }
}

// Configuration for the Gatsby Source Filesystem plugin
const gatsbySourceFilesystem = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `pages`,
    path: `${__dirname}/src/content/`,
    name: 'markdown-pages',
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
    title: getValueFromEnv('SITE_TITLE', 'Default Site'),
    description: getValueFromEnv('SITE_DESCRIPTION'),
    keywords: getValueFromEnv('SITE_KEYWORDS'),
    url: getValueFromEnv('URL'),
  },
  plugins: [
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    gatsbySourceFilesystem,
    gatsbyTransformerMarkdown,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    gatsbyGoogleAnalytics,
  ]
}
