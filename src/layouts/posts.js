import 'normalize.css'
import '../styles/index.css'
import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import RouteContainer from '../components/RouteContainer'

/*
 * Function: PostsLayout
 * Description:
 */
const PostsLayout = ({children, data}) => {
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
        content={html}
      />
    </Fragment>
  );
}

PostsLayout.propTypes = {
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

export default PostsLayout

export const query = graphql`
  query PostsQuery {
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
