import React, {Fragment} from 'react'
import Row from '../components/row'
import Column from '../components/column'
import ListViewItem from '../components/listViewItem'
import Text, {types as textTypes} from '../components/text'

const IndexPage = ({data}) => {
  const {edges: posts} = data.posts
  const {edges: projects} = data.projects
  const {metadata} = data.site

  return (
    <Fragment>
      <Row size="large">
        <Column largeSize={6} smallSize={12}>
          <Text type={textTypes.HEADER_2}>
            {metadata.title}
          </Text>
          <Text>
            {metadata.description}
          </Text>
        </Column>
      </Row>
      <Row size="large">
        <Column largeSize={6} smallSize={12}>
          <Text type={textTypes.SMALL}>
            Available freelance work in New Orleans, San Francisco and elsewhere. If you would like to work together, <a href="mailto:patrick@pburtchaell.com">get in touch</a>.
          </Text>
        </Column>
      </Row>
      <div className="padding padding-large" />
      <Row size="large">
        <Column largeSize={12} smallSize={12}>
          <Text type={textTypes.HEADER_3}>
            Recent Posts
          </Text>
        </Column>
        {posts.map(({ node: post }) => (
          <ListViewItem
            key={post.id}
            title={post.frontmatter.title}
            path={post.frontmatter.path}
            tags={[]}
          />
        ))}
      </Row>
      <Row size="large">
        <Column largeSize={12} smallSize={12}>
          <Text type={textTypes.HEADER_3}>
            Recent Projects
          </Text>
        </Column>
        {projects.map(({ node: project }) => (
          <ListViewItem
            key={project.id}
            title={project.frontmatter.title}
            path={project.frontmatter.path}
            tags={[]}
          />
        ))}
      </Row>
    </Fragment>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      metadata: siteMetadata {
        title
        description
      }
    }
    posts: allMarkdownRemark(
      limit: 10
      filter: {
        frontmatter: { type: { eq: "post" } }
      }
      sort: {
        fields: [ frontmatter___date ],
        order: DESC
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
    projects: allMarkdownRemark(
      limit: 10
      filter: {
        frontmatter: { type: { eq: "project" } }
      }
      sort: {
        fields: [ frontmatter___date ],
        order: DESC
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`
