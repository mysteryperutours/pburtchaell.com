import 'normalize.css'
import '../styles/index.css'
import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import RouteContainer from '../components/RouteContainer'

/*
 * Function: DefaultLayout
 * Description: Render the default layout used for all pages
 */
const DefaultLayout = ({children, data}) => {
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
      >
        {children()}
      </RouteContainer>
    </Fragment>
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
