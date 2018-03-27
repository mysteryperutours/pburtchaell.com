import React, {Fragment} from 'react'
import Row from '../components/Row'
import Column from '../components/Column'
import ListViewItem from '../components/ListViewItem'
import Text, {types as textTypes} from '../components/text'

const CONTACTS = [
  {label: 'Twitter', linkTo: 'https://twitter.com/pburtchaell'},
  {label: 'Facebook', linkTo: 'https://facebook.com/pburtchaell'},
  {label: 'GitHub', linkTo: 'https://github.com/pburtchaell'},
]

/*
 * Function: IndexPage
 * Description:
 */
const IndexPage = ({data}) => {
  const {edges: projects} = data.projects
  const {metadata} = data.site

  return (
    <Fragment>
      <Row paddingSize="large" rowSize="large">
        <Column largeSize={4} smallSize={12}>
          <Text>
            {metadata.description}
          </Text>
          <small className="small-reset-margin">
            <span>
              {`Hello! I'm partially available for consultancy or freelance work until June 2018. In August 2018, I'm joining Facebook in Menlo Park, California. If you would like to work together, `}
            </span>
            <a href="mailto:patrick@pburtchaell.com">
              get in touch.
            </a>
          </small>
        </Column>
      </Row>
      <Row paddingSize="large" rowSize="large">
        <Column largeSize={12} smallSize={12}>
          <Text type={textTypes.HEADER_3}>
            Selected Work
          </Text>
        </Column>
        {projects.map(({ node: project }) => (
          <Column
            key={project.id}
            largeSize={4}
            smallSize={12}
          >
            <ListViewItem
              title={project.frontmatter.title}
              date={project.frontmatter.date}
              path={project.frontmatter.path}
              category={project.frontmatter.category}
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
            category
          }
        }
      }
    }
  }
`
