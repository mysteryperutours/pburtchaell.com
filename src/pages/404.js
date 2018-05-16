import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Page from '../components/Page';
import Column from '../components/Column';
import Text, { types as textTypes } from '../components/Text';

/*
 * Function: NotFoundPage
 * Description: Renders 404 error page
 */
const NotFoundPage = ({ data }) => {
  const { site } = data;

  return (
    <Page.Container
      pageTitle="Not Found"
      siteTitle={site.metadata.title}
      siteUrl={site.metadata.url}
      description={site.metadata.description}
      keywords={site.metadata.keywords}
    >
      <Column largeSize="4" smallSize="12">
        <Text>
          Page Not Found
        </Text>
        <Text type={textTypes.SMALL}>
          {'Oh no! Sorry, but there\'s no page here.'}
        </Text>
      </Column>
    </Page.Container>
  );
};

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
