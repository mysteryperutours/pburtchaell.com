import React, {Fragment} from 'react'
import Row from '../components/Row'
import Column from '../components/Column'
import ListViewItem from '../components/ListViewItem'
import Text, {types as textTypes} from '../components/text'

/*
 * Function: IndexPage
 * Description:
 */
const IndexPage = ({data}) => {
  const {edges: projects} = data.projects
  const {metadata} = data.site

  return (
    <Fragment>
      <Row paddingSize="large">
        <Column largeSize={6} smallSize={12}>
          <Text>
            {metadata.description}
          </Text>
        </Column>
      </Row>
      <Row paddingSize="large">
        <Column largeSize={12} smallSize={12}>
          <Text type={textTypes.HEADER_3}>
            Selected Work
          </Text>
        </Column>
        {projects.map(({ node: project }) => (
          <Column
            key={project.id}
            largeSize={6}
            smallSize={12}
          >
            <ListViewItem
              title={project.frontmatter.title}
              date={project.frontmatter.date}
              path={project.frontmatter.path}
              tags={project.frontmatter.keywords}
              linkTo={project.fields.slug}
            />
          </Column>
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
    projects: allMarkdownRemark(
      limit: 10
      filter: {
        frontmatter: { type: { eq: "project" } }
        frontmatter: { published: { eq: true } }
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
          fields {
            slug
          }
          frontmatter {
            path
            title
            date(formatString: "YYYY")
            keywords
          }
        }
      }
    }
  }
`
