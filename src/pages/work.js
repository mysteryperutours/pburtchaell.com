import React from 'react';
import PropTypes from 'prop-types';
import Page from '../components/Page';
import List from '../components/List';
import Text, { types as textTypes } from '../components/Text';

const pageTitle = 'Work';
const pageUrl = '/work';

/*
 * Function: WorkPage
 * Description: Renders an index page for work
 */
const WorkPage = ({ data: { site, projects } }) => {
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
      <Page.Content>
        <List items={projects} />
      </Page.Content>
    </Page.Container>
  );
};

WorkPage.propTypes = {
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
    projects: PropTypes.shape({
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
            featuredImage: PropTypes.shape({
              childImageSharp: PropTypes.shape({
                sizes: PropTypes.shape({
                  aspectRatio: PropTypes.number.isRequired,
                  base64: PropTypes.string.isRequired,
                  sizes: PropTypes.string.isRequired,
                  src: PropTypes.string.isRequired,
                  srcSet: PropTypes.string.isRequired,
                }),
              }),
            }),
            date: PropTypes.string.isRequired,
          }),
        }),
      })),
    }),
  }).isRequired,
};

export default WorkPage;

export const pageQuery = graphql`
  query WorkQuery {
    site {
      metadata: siteMetadata {
        url
        title
        description
        introduction
        keywords
      }
    }
    projects: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "project"}, published: {eq: true}}}, sort: {fields: [frontmatter___date], order: DESC}) {
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
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 800) {
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
