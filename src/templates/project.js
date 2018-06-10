import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Page from '../components/Page';
import Row from '../components/Row';
import Column from '../components/Column';
import Text, { types as textTypes } from '../components/Text';
import '../styles/pages/project.css';

/*
 * Function: SidebarDetail
 * Description: Renders a detail for the project template sidebar
 */
function SidebarDetail({ label, data, formatData }) {
  if (data) {
    const renderData = v =>
      (Array.isArray(v) ? Array.from(v).map(i => <Fragment>{i}<br /></Fragment>) : v);

    return (
      <Column largeSize={12} smallSize={6}>
        <Text type={textTypes.SMALL}>
          {label}
        </Text>
        <Text>
          {renderData(formatData ? formatData(data) : data)}
        </Text>
      </Column>
    );
  }

  return null;
}

SidebarDetail.defaultProps = {
  formatData: data => data,
};

SidebarDetail.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  formatData: PropTypes.func,
};

/*
 * Function: ProjectExternalLink
 * Description: Renders the external link for a project if it exists
 */
const ProjectExternalLink = ({ linkTo, description }) => linkTo && (
  <a
    className="anchor-arrow-upright column-hide-on-small"
    target="_blank"
    href={linkTo}
  >
    {description}
  </a>
);

ProjectExternalLink.propTypes = {
  linkTo: PropTypes.string,
  description: PropTypes.string,
};

/*
 * Function: ProjectDetails
 * Description: Renders the summary of the project for the left sidebar
 */
export const ProjectSummary = (props) => {
  const {
    title,
    description,
    externalLink,
    externalLinkDescription,
  } = props;

  return (
    <Fragment>
      <Text type={textTypes.HEADER_1} className="project-page__title">
        {title}
      </Text>
      <Text className="project-page__description">
        {description}
      </Text>
      <ProjectExternalLink
        linkTo={externalLink}
        description={externalLinkDescription}
      />
    </Fragment>
  );
};

ProjectSummary.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  externalLink: PropTypes.string.isRequired,
  externalLinkDescription: PropTypes.string.isRequired,
};

/*
 * Function: ProjectDetails
 * Description: Renders the details of the project for the right sidebar
 */
export const ProjectDetails = (props) => {
  const {
    client,
    collaborators,
    date,
    category,
    githubStargazers,
    githubOpenIssues,
  } = props;

  return (
    <Row padding="none">
      <SidebarDetail
        label="Made For"
        data={client}
      />
      <SidebarDetail
        label="Collaborated With"
        data={collaborators}
      />
      <SidebarDetail
        label="Shipped In"
        data={date}
      />
      <SidebarDetail
        label="Type of Work"
        data={category}
      />
      <SidebarDetail
        label="Stars on Github"
        data={githubStargazers}
        formatData={(data) => {
          let hundredth;
          const thousandth = Math.round((data / 1000), 1);

          if (thousandth) {
            hundredth = Math.round(((data % 1000) / 100), 1);

            return `${thousandth}.${hundredth}k`;
          }
          hundredth = Math.round((data / 100), 1);

          return hundredth;
        }}
      />
      <SidebarDetail
        label="Open Issues on Github"
        data={githubOpenIssues}
      />
    </Row>
  );
};

ProjectDetails.propTypes = {
  client: PropTypes.string.isRequired,
  collaborators: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  githubStargazers: PropTypes.number.isRequired,
  githubOpenIssues: PropTypes.number.isRequired,
};

/*
 * Function: ProjectTemplate
 * Description: Renders the template for a project
 */
function ProjectTemplate({ data, ...restProps }) {
  const { page, site } = data;

  return (
    <Page.Container
      pageTitle={page.frontmatter.title}
      siteTitle={site.metadata.title}
      pageUrl={page.fields.slug}
      siteUrl={site.metadata.url}
      backLinkTo={restProps.history.goBack}
      description={page.frontmatter.description}
      keywords={page.frontmatter.keywords}
    >
      <Page.Sidebar className="project-page__sidebar-left" flexOrderSmall={0} flexOrderLarge={0}>
        <ProjectSummary
          title={page.frontmatter.title}
          description={page.frontmatter.description}
          externalLink={page.frontmatter.externalLink}
          externalLinkDescription={page.frontmatter.externalLinkDescription}
        />
      </Page.Sidebar>
      <Page.Content newsletter className="project-page__content" flexOrderSmall={2} flexOrderLarge={1}>
        {page.html}
      </Page.Content>
      <Page.Sidebar className="project-page__sidebar-right" flexOrderSmall={1} flexOrderLarge={2}>
        <ProjectDetails
          client={page.frontmatter.client}
          collaborators={page.frontmatter.collaborators}
          date={page.frontmatter.date}
          category={page.frontmatter.category}
          githubStargazers={page.frontmatter.githubStargazers}
          githubOpenIssues={page.frontmatter.githubOpenIssues}
        />
      </Page.Sidebar>
    </Page.Container>
  );
}

ProjectTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      metadata: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
      }),
    }),
    page: PropTypes.shape({
      id: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        client: PropTypes.string,
        collaborators: PropTypes.arrayOf(PropTypes.string),
        keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
        externalLink: PropTypes.string,
        externalLinkDescription: PropTypes.string,
        date: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default ProjectTemplate;

export const pageQuery = graphql`
  query ProjectTemplate($id: String!) {
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
        githubStargazers
        githubOpenIssues
      }
      frontmatter {
        title
        description
        category
        keywords
        client
        externalLink
        externalLinkDescription
        date(formatString: "YYYY")
      }
    }
  }
`;
