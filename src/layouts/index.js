import 'normalize.css'
import '../styles/index.css'
import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import RouteContainer from '../components/RouteContainer'

/*
 * Function: DefaultLayout
 * Description: Render the default layout used for all pages
 */
const DefaultLayout = ({children, data}) => {
  const {site} = data

  return (
    <RouteContainer
      title="Test"
      meta={site.metadata}
      header={false}
      footer={false}
    >
      {children()}
    </RouteContainer>
  )
}

DefaultLayout.propTypes = {
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

export default DefaultLayout

export const query = graphql`
  query DefaultQuery {
    site {
      metadata: siteMetadata {
        url
        title
        description
        keywords
      }
    }
  }
`;
