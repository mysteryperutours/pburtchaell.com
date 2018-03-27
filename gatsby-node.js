const path = require('path')
const fs = require('fs')
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
  }
}
