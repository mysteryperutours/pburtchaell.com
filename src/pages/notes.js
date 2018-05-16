import React from 'react';
import PropTypes from 'prop-types';
import Page from '../components/Page';
/*
 * Function: GuidesPage
 * Description: Renders an index page for the guides
 */
// Todo: render the guides as a list view
const NotesPage = ({ data }) => (
  <Page.Container
    pageTitle="Guides"
  />
);

NotesPage.propTypes = {
  data: PropTypes.shape({

  }).isRequired,
};

export default NotesPage;

// Todo: fetch the guides
export const pageQuery = graphql`
  query GuidesQuery {
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
    pages: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "note" }
          published: { eq: true }
        }
      }
      sort: {
        fields: [ frontmatter___date ],
        order: DESC
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY")
            category
          }
        }
      }
    }
  }
`;
