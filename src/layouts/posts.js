import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import RouteContainer from '../components/RouteContainer';
import '../styles/index.css';

const PostsLayout = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div>
      <Helmet
        title={frontmatter.title}
        meta={[
          {
            name: 'description',
            content: ''
          },
          {
            name: 'keywords',
            content: ''
          }
        ]}
      />
      <RouteContainer>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </RouteContainer>
    </div>
  );
};

PostsLayout.propTypes = {
  children: PropTypes.func
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default PostsLayout;
