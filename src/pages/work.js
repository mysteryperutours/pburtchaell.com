import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Page from '../components/Page';
import Row from '../components/Row';
import Column from '../components/Column';
import ListViewItem from '../components/ListView';
import Text, { types as textTypes } from '../components/Text';

const pageTitle = 'Work';
const pageUrl = '/work';

/*
 * Function: WorkPage
 * Description: Renders an index page for work
 */
const WorkPage = ({ data }) => {
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
        {data.projects.edges.map(({ node: project }) => (
          <Column
            key={project.fields.slug}
            largeSize={12}
            smallSize={12}
          >
            <ListViewItem
              title={project.frontmatter.title}
              excerpt={project.frontmatter.description}
              date={project.frontmatter.date}
              path={project.frontmatter.path}
              category={project.frontmatter.category}
              linkTo={project.fields.slug}
            />
          </Column>
        ))}
      </Fragment>
    </Page.Container>
  );
};

WorkPage.propTypes = {
  data: PropTypes.shape({

  }).isRequired,
};

export default WorkPage;

// Todo: fetch the work
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
          fields {
            slug
          }
          frontmatter {
            title
            description
            featured
            date(formatString: "YYYY")
            category
          }
        }
      }
    }
  }
  `;
