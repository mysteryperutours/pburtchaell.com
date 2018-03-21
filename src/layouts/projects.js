import 'normalize.css'
import '../styles/index.css'
import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import RouteContainer from '../components/RouteContainer'

/*
 * Function: ProjectsLayout
 * Description:
 */
const ProjectsLayout = ({children, data}) => {
  const {site} = data
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
      <RouteContainer
        header
        footer
        title={null}
        subtitle={null}
        type="project"
        content={html}
      />
    </Fragment>
  );
}

ProjectsLayout.propTypes = {
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

export default ProjectsLayout

export const query = graphql`
  query ProjectsQuery {
    site {
      metadata: siteMetadata {
        url
        title
        description
        keywords
      }
    }
  }
`
