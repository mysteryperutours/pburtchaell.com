import React from 'react'
import Row from '../components/row'
import Column from '../components/column'
import Text, {types as textTypes} from '../components/text'

/**
 * Function: ProjectLayout
 * Description:
 */
function ProjectLayout({ data }) {
  const {project, site} = data
  const {title, description, keywords} = site.metadata

  return (
    <Fragment>
      <Helmet
        title={title}
        meta={[
          {name: 'description', content: description},
          {name: 'keywords', content: keywords},
        ]}
      />
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
    </Fragment>
  );
}

ProjectLayout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      metadata: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default ProjectLayout

export const query = graphql`
  query ProjectByPathQuery($path: String!) {
    site {
      metadata: siteMetadata {
        url
        title
        description
        keywords
      }
    }
    project: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
