import React, {Fragment, Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import PageContainer from '../components/PageContainer'
import Row from '../components/Row'
import Column from '../components/Column'
import Text, {types as textTypes} from '../components/Text'
import './project.css'

/*
 * Class: FixedPosition
 * Description: Gets the x,y position of of a child element and fixes it in
 * position on the screen.
 */
class FixedPosition extends Component {
  constructor(props) {
    super(props)

    this.INITIAL_STATE = {
      fixed: false,
      set: false,
      top: 0,
      left: 0,
      width: 0,
    }

    this.state = this.INITIAL_STATE

    this.setFixedPosition = this.setFixedPosition.bind(this)
    this.handleViewportChange = this.handleViewportChange.bind(this)
  }

  componentDidMount() {
    this.setFixedPosition()

    window.addEventListener('resize', this.handleViewportChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleViewportChange)
  }

  setFixedPosition() {
    const {set} = this.state
    const {disableOnSmall} = this.props

    // If we are on a small screen, don't fix the position
    if (disableOnSmall && screen.width <= 600) {
      return this.setState({
        ...this.INITIAL_STATE,
        set: true,
      })
    }

    const position = this.element.getBoundingClientRect()
    const width = this.element.offsetWidth

    return this.setState({
      fixed: true,
      set: true,
      top: position.top,
      left: position.left,
      width,
    })
  }

  handleViewportChange() {
    this.setFixedPosition()
  }

  render() {
    const {children, className} = this.props
    const {fixed, top, left, width} = this.state

    let styles

    if (fixed) {
      styles = {
        top,
        left,
        width,
        position: 'fixed',
      }
    }

    return (
      <div
        style={styles}
        className={className}
        ref={(element) => {
          this.element = element
        }}
      >
        {children}
      </div>
    )
  }
}

FixedPosition.propTypes = {
  disableOnSmall: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

FixedPosition.defaultProps = {
  disableOnSmall: false,
}

function ProjectDetail({label, value}) {
  if (value) {
    return (
      <Fragment>
        <Text>
          <Text type={textTypes.SMALL}>{label}</Text>
        </Text>
        <Text>{value}</Text>
      </Fragment>
    )
  }

  return null
}

ProjectDetail.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

/*
 * Function: ProjectExternalLink
 * Description: Renders the external link for a project if it exists
 */
const ProjectExternalLink = ({linkTo, description}) => linkTo && (
  <a
    className="project--external-link a--arrow-upright"
    target="_blank"
    href={linkTo}
  >
    {description}
  </a>
)

ProjectExternalLink.propTypes = {
  linkTo: PropTypes.string,
  description: PropTypes.string,
}

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
)

/*
 * Function: ProjectLayout
 * Description:
 */
function ProjectLayout({data}) {
  const {project, site} = data

  return (
    <PageContainer
      pageTitle={project.frontmatter.title}
      siteTitle={site.metadata.title}
      siteUrl={site.metadata.url}
      pageUrl={project.fields.slug}
      description={project.frontmatter.description}
      keywords={project.frontmatter.keywords}
    >
      <Row paddingSize="large" rowSize="large" flexBox={true}>
        <Column largeSize={3} smallSize={12} flexOrder={0}>
          <FixedPosition className="project--column-0" disableOnSmall>
            <ProjectHomeLink />
            <Text type={textTypes.HEADER_1}>
              {project.frontmatter.title}
            </Text>
            <Text>
              {project.frontmatter.description}
            </Text>
            <ProjectExternalLink
              linkTo={project.frontmatter.externalLink}
              description={project.frontmatter.externalLinkDescription}
            />
          </FixedPosition>
        </Column>
        <Column largeSize={6} smallSize={12} flexOrder={1}>
          <div
            className="project--column-1"
            dangerouslySetInnerHTML={{__html: project.html}}
          />
        </Column>
        <Column largeSize={3} smallSize={12} flexOrder={2} hideOnSmall>
          <FixedPosition className="project--column-2" disableOnSmall>
            <ProjectDetail
              label="Made For"
              value={project.frontmatter.client}
            />
            <ProjectDetail
              label="Shipped In"
              value={project.frontmatter.date}
            />
            <ProjectDetail
              label="Type of Work"
              value={project.frontmatter.category}
            />
          </FixedPosition>
        </Column>
      </Row>
    </PageContainer>
  )
}

ProjectLayout.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      metadata: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.string.isRequired,
      }),
    }),
    project: PropTypes.shape({
      id: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        client: PropTypes.string.isRequired,
        keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
        externalLink: PropTypes.string,
        externalLinkDescription: PropTypes.string,
        date: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default ProjectLayout

export const projectQuery = graphql`
  query ProjectTemplate($id: String!) {
    site {
      metadata: siteMetadata {
        url
        title
        description
        keywords
      }
    }
    project: markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
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
`
