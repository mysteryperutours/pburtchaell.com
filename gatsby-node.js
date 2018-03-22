const path = require('path')
const fs = require('fs')
const {createFilePath} = require('gatsby-source-filesystem')

exports.createPages = ({boundActionCreators, graphql}) => {
 const {createPage} = boundActionCreators

 return graphql(`
   {
     allMarkdownRemark(limit: 1000) {
       edges {
         node {
           id
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
         path: `work/${date}/${nodePath}`,
         component: path.resolve(`src/layouts/${templateKey}.js`),
         context: {
           id,
         },
       })
     }
   })
 })
}
