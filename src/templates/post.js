import React from 'react';
import PropTypes from 'prop-types';
import Page from '../components/Page';
import Text, { types as textTypes } from '../components/Text';
import Img from 'gatsby-image';
import '../styles/pages/post.css';

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
      pageUrl={page.fields.slug}
      siteUrl={site.metadata.url}
      imageUrl={page.frontmatter.featuredImage ? page.frontmatter.featuredImage.childImageSharp.sizes.src : null}
      description={page.frontmatter.description}
      keywords={page.frontmatter.keywords}
    >
      <Page.Sidebar>
        <Text type={textTypes.HEADER_1}>
          {page.frontmatter.title}
        </Text>
        <Text type={textTypes.SMALL}>
          Posted on {page.frontmatter.date}
        </Text>
      </Page.Sidebar>
      <Page.Content newsletter>
        {page.frontmatter.featuredImage && (
          <Img
            className="post-page__image"
            title={site.metadata.title}
            alt={page.frontmatter.description}
            sizes={page.frontmatter.featuredImage.childImageSharp.sizes}
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </Page.Content>
    </Page.Container>
  );
}

PostTemplate.propTypes = {
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
        date(formatString: "MMMM Do, YYYY")
        keywords
        featuredImage {
          childImageSharp {
            sizes(maxHeight: 400) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
