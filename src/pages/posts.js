import React from 'react';
import PropTypes from 'prop-types';
import Page from '../components/Page';

/*
 * Function: PostsPage
 * Description: Renders an index page for posts
 */
// Todo: render the posts as a list view
const PostsPage = ({ data }) => (
  <Page.Container
    pageTitle="Posts"
  />
);

PostsPage.propTypes = {
  data: PropTypes.shape({

  }).isRequired,
};

export default PostsPage;

// Todo: fetch the posts
export const pageQuery = graphql`
  query PostsQuery {
    site {
      metadata: siteMetadata {
        url
        title
        description
        introduction
        keywords
        enablePortfolio
        portfolioCompanies
      }
    }
  }
`;
