import React from 'react';
import PropTypes from 'prop-types';
import Page from '../components/Page';
import List from '../components/List';
import Text, { types as textTypes } from '../components/Text';
import '../styles/pages/writing.css';

const pageTitle = 'Writing';
const pageUrl = '/writing';

/*
 * Function: WritingPage
 * Description: Renders an index page for posts
 */
const WritingPage = ({ data: { site, posts, notes } }) => {
  return (
    <Page.Container
      pageTitle={pageTitle}
      siteTitle={site.metadata.title}
      pageUrl={pageUrl}
      siteUrl={site.metadata.url}
      description={site.metadata.description}
      keywords={site.metadata.keywords}
    >
      <Page.Sidebar>
        <Text type={textTypes.HEADER_1}>
          {pageTitle}
        </Text>
      </Page.Sidebar>
      <Page.Content className="writing-page__content">
        <List items={posts} />
      </Page.Content>
      <Page.Sidebar className="writing-page__sidebar-right">
        <Text type={textTypes.HEADER_2}>
          Notes
        </Text>
        <Text type={textTypes.SMALL}>
          These notes are basic, informal writing and resources on my personal and professional interests.
        </Text>
        <List items={notes} />
      </Page.Sidebar>
    </Page.Container>
  );
};

const postsAndNotesPropTypes = PropTypes.shape({
  edges: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      id: PropTypes.string.isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    }),
  })),
});

WritingPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      metadata: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        introduction: PropTypes.string.isRequired,
        keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
      }),
    }),
    posts: postsAndNotesPropTypes,
    notes: postsAndNotesPropTypes,
  }).isRequired,
};

export default WritingPage;

export const pageQuery = graphql`
  query WritingQuery {
    site {
      metadata: siteMetadata {
        url
        title
        description
        introduction
        keywords
      }
    }
    notes: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "note"}, published: {eq: true}}}, sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "YYYY")
            category
          }
        }
      }
    }
    posts: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "post"}, published: {eq: true}}}, sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMMM Do, YYYY")
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
    }
  }
`;
