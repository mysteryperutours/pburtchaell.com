const path = require('path')
const fs = require('fs')

exports.createPages = ({boundActionCreators, graphql}) => {
 const {createPage} = boundActionCreators

 return graphql(`
   {
     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
       edges {
         node {
           frontmatter {
             type
             path
           }
         }
       }
     }
   }
 `).then(({errors, data}) => {
   if (errors) {
     throw result.errors
   }

   data.allMarkdownRemark.edges.forEach(({node}) => {
     const {frontmatter} = node
     const {path: nodePath, type} = frontmatter

     createPage({
       path: nodePath,
       component: path.resolve(`src/layouts/${type}.js`),
       context: {},
     })
   })
 })
}
