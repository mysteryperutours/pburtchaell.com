import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Page from '../components/Page';
import Column from '../components/Column';
import ListViewItem from '../components/ListView';
import Text, { types as textTypes } from '../components/Text';
import './writing.css';

const pageTitle = 'Writing';
const pageUrl = '/writing';

/*
 * Function: PostsPage
 * Description: Renders an index page for posts
 */
// Todo: render the posts as a list view
const PostsPage = ({ data }) => {
  return (
    <Page.Container
      pageTitle={pageTitle}
      siteTitle={data.site.metadata.title}
      pageUrl={pageUrl}
      siteUrl={data.site.metadata.url}
      description={data.site.metadata.description}
      keywords={data.site.metadata.keywords}
    >
      <Fragment>
        <Column largeSize={12} smallSize={12}>
          <Text type={textTypes.HEADER_1}>
            {pageTitle}
          </Text>
        </Column>
        <Column largeSize={9} smallSize={12} className="writing__page-column writing__page-column-posts">
          <Text type={textTypes.HEADER_2}>
            Posts
          </Text>
          {data.posts.edges.map(({ node }) => (
            <ListViewItem
              title={node.frontmatter.title}
              excerpt={node.frontmatter.description}
              date={node.frontmatter.date}
              path={node.frontmatter.path}
              category={node.frontmatter.category}
              linkTo={node.fields.slug}
            />
          ))}
        </Column>
        <Column largeSize={3} smallSize={12} className="writing__page-column writing__page-column-notes">
          <Text type={textTypes.HEADER_2}>
            Notes
          </Text>
          <Text type={textTypes.SMALL}>
            These notes are basic, informal writing and resources on my personal and professional interests.
          </Text>
          {data.notes.edges.map(({ node }) => (
            <ListViewItem
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              path={node.frontmatter.path}
              category={node.frontmatter.category}
              linkTo={node.fields.slug}
            />
          ))}
        </Column>
      </Fragment>
    </Page.Container>
  );
};

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
    notes: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "note"}, published: {eq: true}}}, sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
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
  }
`;
