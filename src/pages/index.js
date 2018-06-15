import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Page from '../components/Page';
import Row from '../components/Row';
import Column from '../components/Column';
import List from '../components/List';
import Text, { types as textTypes } from '../components/Text';
import '../styles/pages/index.css';

const pageTitle = 'Home';
const pageUrl = '/';

/*
 * Function: IndexPage
 * Description: Renders the home page for the site.
 */
const IndexPage = ({ data: { site, projects } }) => {
  const { enablePortfolio } = site.metadata;

  return (
    <Page.Container
      pageTitle={pageTitle}
      siteTitle={site.metadata.title}
      pageUrl={pageUrl}
      siteUrl={site.metadata.url}
      description={site.metadata.description}
      keywords={site.metadata.keywords}
    >
      <Page.Content>
        <Row padding="none">
          <Column largeSize={9} smallSize={12}>
            <Text>{site.metadata.description}</Text>
            <Text type={textTypes.SMALL}>
              {site.metadata.introduction}
            </Text>
            <div className="index-page__twitter">
              <a
                hidden
                href="https://twitter.com/pburtchaell?ref_src=twsrc%5Etfw"
                className="twitter-follow-button"
                data-show-count="true"
              >
                Follow @pburtchaell
              </a>
            </div>
          </Column>
        </Row>
        {enablePortfolio && (
          <Fragment>
            <Text type={textTypes.HEADER_2}>
              Selected Work
            </Text>
            <List items={projects} />
          </Fragment>
        )}
      </Page.Content>
    </Page.Container>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      metadata: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        introduction: PropTypes.string.isRequired,
        keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
        enablePortfolio: PropTypes.bool.isRequired,
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
            date: PropTypes.string.isRequired,
          }),
        }),
      })),
    }),
  }).isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
        site {
      metadata: siteMetadata {
        url
        title
      description
      introduction
      keywords
      enablePortfolio
    }
  }
    projects: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "project"}, published: {eq: true}, featured: {eq: true}}}, sort: {fields: [frontmatter___date], order: DESC}) {
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
}
`;
