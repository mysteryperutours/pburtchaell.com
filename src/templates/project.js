import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Page from '../components/Page';
import Sidebar from '../components/Sidebar';
import Text, { types as textTypes } from '../components/Text';
import './project.css';

/*
 * Function: ProjectExternalLink
 * Description: Renders the external link for a project if it exists
 */
const ProjectExternalLink = ({ linkTo, description }) => linkTo && (
  <a
    className="project--external-link a--arrow-upright"
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
 * Function: ProjectHomeLink
 * Description: Renders the back to home link
 */
const ProjectHomeLink = () => (
  <Link
    className="project--home-link a--arrow-right"
    to="/"
  >
    Back to Home
  </Link>
);

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
      <ProjectHomeLink />
      <Text type={textTypes.HEADER_1} className="project--title">
        {title}
      </Text>
      <Text className="project--description">
        {description}
      </Text>
      <ProjectExternalLink
        linkTo={externalLink}
        description={externalLinkDescription}
      />
    </Fragment>
  )
}

ProjectSummary.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  externalLink: PropTypes.string.isRequired,
  externalLinkDescription: PropTypes.string.isRequired,
}

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
    <Fragment>
      <Sidebar.Detail
        label="Made For"
        data={client}
      />
      <Sidebar.Detail
        label="Collaborated With"
        data={collaborators}
      />
      <Sidebar.Detail
        label="Shipped In"
        data={date}
      />
      <Sidebar.Detail
        label="Type of Work"
        data={category}
      />
      <Sidebar.Detail
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
      <Sidebar.Detail
        label="Open Issues on Github"
        data={githubOpenIssues}
      />
    </Fragment>
  )
}

ProjectDetails.propTypes = {
  client: PropTypes.string.isRequired,
  collaborators: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  githubStargazers: PropTypes.number.isRequired,
  githubOpenIssues: PropTypes.number.isRequired,
}

/*
 * Function: ProjectTemplate
 * Description: Renders the template for a project (e.g., case study)
 */
function ProjectTemplate({ data }) {
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
      <Sidebar.Container flexOrder={0} className="project--column-0">
        <ProjectSummary
          title={page.frontmatter.title}
          description={page.frontmatter.description}
          externalLink={page.frontmatter.externalLink}
          externalLinkDescription={page.frontmatter.externalLinkDescription}
        />
      </Sidebar.Container>
      <Page.Content flexOrder={1} className="project--column-1">
        {page.html}
      </Page.Content>
      <Sidebar.Container flexOrder={2} className="project--column-2">
        <ProjectDetails
          client={page.frontmatter.client}
          collaborators={page.frontmatter.collaborators}
          date={page.frontmatter.date}
          category={page.frontmatter.category}
          githubStargazers={page.frontmatter.githubStargazers}
          githubOpenIssues={page.frontmatter.githubOpenIssues}
        />
      </Sidebar.Container>
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
