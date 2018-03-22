import React, {Fragment} from 'react'
import Row from '../components/row'
import Column from '../components/column'
import ListViewItem from '../components/listViewItem'
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
      <div className="padding padding-large" />
      <Row size="large">
        <Column largeSize={12} smallSize={12}>
          <Text type={textTypes.HEADER_3}>
            Selected Work
          </Text>
        </Column>
        {projects.map(({ node: project }) => (
          <Column largeSize={6} smallSize={12}>
            <ListViewItem
              key={project.id}
              title={project.frontmatter.title}
              date={project.frontmatter.date}
              path={project.frontmatter.path}
              tags={project.frontmatter.keywords}
              linkTo={project.frontmatter.path}
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
            date(formatString: "YYYY")
            keywords
          }
        }
      }
    }
  }
`
