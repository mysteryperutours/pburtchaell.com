import React from 'react';
import PropTypes from 'prop-types';
import Page from '../components/Page';
import Text, { types as textTypes } from '../components/Text';

/*
 * Function: NotFoundPage
 * Description: Renders 404 error page
 */
const NotFoundPage = ({ data: { site } }) => (
  <Page.Container
    pageTitle="Not Found"
    siteTitle={site.metadata.title}
    pageUrl={null}
    siteUrl={site.metadata.url}
    description={site.metadata.description}
    keywords={site.metadata.keywords}
  >
    <Page.Sidebar>
      <Text type={textTypes.HEADER_1}>Not Found</Text>
    </Page.Sidebar>
    <Page.Content>
      <Text>Sorry, but there is no page here.</Text>
    </Page.Content>
  </Page.Container>
);

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      metadata: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
      }),
    }),
  }).isRequired,
};

export default NotFoundPage;

export const pageQuery = graphql`
  query NotFoundQuery {
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
