require('dotenv').config()
const path = require('path')
const fs = require('fs')
const fetch = require('node-fetch')
const {createFilePath} = require('gatsby-source-filesystem')

const staticImagePath = './static/assets/'
const contentPath = './src/content/'

exports.createPages = ({boundActionCreators, graphql}) => {
 const {createPage} = boundActionCreators

 return graphql(`
   {
     allMarkdownRemark(limit: 1000) {
       edges {
         node {
           id
           fields {
             slug
           }
           frontmatter {
             templateKey
             published
             date(formatString: "YYYY")
             path
           }
         }
       }
     }
   }
 `).then(({errors, data}) => {
   if (errors) {
     errors.forEach(error => console.error(error))

     throw new Error('GraqhQLError: Could not query pages.')
   }

   data.allMarkdownRemark.edges.forEach(({node}) => {
     const {frontmatter, id} = node
     const {date, path: nodePath, templateKey, published} = frontmatter

     if (published) {
       createPage({
         path: node.fields.slug,
         component: path.resolve(`src/templates/${templateKey}.js`),
         context: {
           id,
         },
       })
     }
   })
 })
}

exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
  const {createNodeField} = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const year = new Date(node.frontmatter.date).getFullYear()

    createNodeField({
      name: `slug`,
      value: `work/${year}/${node.frontmatter.path}`,
      node,
    })

    // Add stats for open source projects
    if (node.frontmatter.category === `Open Source`) {
      const accessToken = process.env.GITHUB_ACCESS_TOKEN
      const apiUrl = `https://api.github.com/repos`
      const repoPath = `pburtchaell/${node.frontmatter.path}`

      // Fetch repo stats from GitHub API
      fetch(`${apiUrl}/${repoPath}?access_token=${accessToken}`)
        .then((result) => result.json())
        .then(({stargazers_count, open_issues_count}) => {
          createNodeField({name: `githubStargazers`, value: stargazers_count, node})
          createNodeField({name: `githubOpenIssues`, value: open_issues_count, node})
        })
        .catch((error) => console.warn(error))
    } else {
      createNodeField({name: `githubStargazers`, value: null, node})
      createNodeField({name: `githubOpenIssues`, value: null, node})
    }
  }
}
