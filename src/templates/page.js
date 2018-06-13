import React from 'react';
import PropTypes from 'prop-types';
import Page from '../components/Page';
import Text, { types as textTypes } from '../components/Text';

/*
 * Function: PostTemplate
 * Description: Renders a simple page
 */
function PageTemplate({ data }) {
  const { page, site } = data;

  return (
    <Page.Container
      pageTitle={page.frontmatter.title}
      siteTitle={site.metadata.title}
      pageUrl={page.fields.slug}
      siteUrl={site.metadata.url}
      description={page.frontmatter.description}
      keywords={page.frontmatter.keywords}
    >
      <Page.Sidebar>
        <Text type={textTypes.HEADER_1}>
          {page.frontmatter.title}
        </Text>
      </Page.Sidebar>
      <Page.Content newsletter>
        {page.html}
      </Page.Content>
    </Page.Container>
  );
}

PageTemplate.propTypes = {
  data: PropTypes.shape({
    // Todo: add prop types
  }).isRequired,
};

export default PageTemplate;

export const pageQuery = graphql`
  query PageTemplate($id: String!) {
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
      }
    }
  }
`;
