import React from 'react';
import PropTypes from 'prop-types';
import Page from '../components/Page';
import Sidebar from '../components/Sidebar';
import Text, { types as textTypes } from '../components/Text';

/*
 * Function: PostTemplate
 * Description: Renders the page for a post
 */
function PostTemplate({ data }) {
  const { page, site } = data;

  return (
    <Page.Container
      pageTitle={page.frontmatter.title}
      siteTitle={site.metadata.title}
      siteUrl={site.metadata.url}
      pageUrl={page.fields.slug}
      description={page.frontmatter.description}
      keywords={page.frontmatter.keywords}
    >
      <Sidebar.Container flexOrder={0}>
        <Text type={textTypes.HEADER_1}>
          {page.frontmatter.title}
        </Text>
        <Text>
          {page.frontmatter.description}
        </Text>
      </Sidebar.Container>
      <Page.Content flexOrder={1}>
        {page.html}
      </Page.Content>
    </Page.Container>
  );
}

PostTemplate.propTypes = {
  data: PropTypes.shape({

  }).isRequired,
};

export default PostTemplate;

export const pageQuery = graphql`
  query PostTemplate($id: String!) {
    site {
      metadata: siteMetadata {
        url
        title
        description
        keywords
      }
    }
    page: markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        keywords
      }
    }
  }
`;
