import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import PageContainer from '../components/PageContainer'
import Row from '../components/Row'
import Column from '../components/Column'
import ListViewItem from '../components/ListView'
import Text, {types as textTypes} from '../components/Text'

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
  const {projects, site} = data

  return (
    <PageContainer
      pageTitle="Home"
      siteTitle={site.metadata.title}
      siteUrl={site.metadata.url}
      description={site.metadata.description}
      keywords={site.metadata.keywords}
    >
      <Fragment>
        <Row paddingSize="large" rowSize="large">
          <Column largeSize={4} smallSize={12}>
            <Text>{site.metadata.description}</Text>
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
          {projects.edges.map(({node:project}) => (
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
    </PageContainer>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    projects: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string.isRequired,
          fields: PropTypes.shape({
            slug: PropTypes.string.isRequired,
          }).isRequired,
          frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
          }),
        }),
      })),
    }),
    site: PropTypes.shape({
      metadata: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
      }),
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      metadata: siteMetadata {
        url
        title
        description
        keywords
      }
    }
    projects: allMarkdownRemark(
      limit: 10
      filter: {
        frontmatter: { templateKey: { eq: "project" } }
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
            title
            date(formatString: "YYYY")
            category
          }
        }
      }
    }
  }
`
