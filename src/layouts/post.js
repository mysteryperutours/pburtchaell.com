import 'normalize.css'
import '../styles/index.css'
import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Row from '../components/row'
import Column from '../components/column'
import Text, { types as textTypes } from '../components/text';

/**
 * Function: PostLayout
 * Description: This function returns a template for posts
 */
function PostLayout({ data }) {
  const {post, site} = data
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
            {post.frontmatter.title}
          </Text>
          <div dangerouslySetInnerHTML={{__html: post.html}} />
        </Column>
      </Row>
    </Fragment>
  )
}

PostLayout.propTypes = {
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

export default PostLayout

export const query = graphql`
  query PostByPathQuery($path: String!) {
    site {
      metadata: siteMetadata {
        url
        title
        description
        keywords
      }
    }
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
