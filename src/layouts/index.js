import 'normalize.css'
import '../styles/index.css'
import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import PageContainer from '../components/PageContainer'
import Baseline from '../components/Baseline'

/*
 * Function: DefaultLayout
 * Description: Render the default layout used for all pages
 */
const DefaultLayout = ({children}) => {
  return (
    <Baseline
      lineHeight={9}
      disabled={process.env.NODE_ENV !== 'development'}
    >
      {children()}
    </Baseline>
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
        keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
      }),
    }),
  }),
}

export default DefaultLayout

export const pageQuery = graphql`
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
