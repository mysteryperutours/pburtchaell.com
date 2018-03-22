import React from 'react'
import PropTypes from 'prop-types'
import Row from '../components/row'
import Column from '../components/column'
import Text, {types as textTypes} from '../components/text'
import RouteContainer from '../components/RouteContainer'

/*
 * Function: ProjectLayout
 * Description:
 */
function ProjectLayout({data}) {
  const {project, site} = data

  return (
    <RouteContainer
      title={project.frontmatter.title}
      meta={site.metadata}
      header={false}
      footer={false}
    >
      <Row>
        <Column
          largeSize={8}
          smallSize={8}
        >
          <Text type={textTypes.HEADER_2}>
            {project.frontmatter.title}
          </Text>
          <div dangerouslySetInnerHTML={{__html: project.html}} />
        </Column>
      </Row>
    </RouteContainer>
  );
}

ProjectLayout.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      metadata: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.string.isRequired,
      }),
    }),
    project: PropTypes.shape({
      id: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default ProjectLayout

export const pageQuery = graphql`
  query ProjectById($id: String!) {
    site {
      metadata: siteMetadata {
        url
        title
        description
        keywords
      }
    }
    project: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`
