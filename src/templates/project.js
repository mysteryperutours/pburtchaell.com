import React, {Fragment, Component} from 'react'
import PropTypes from 'prop-types'
import Row from '../components/Row'
import Column from '../components/Column'
import Text, {types as textTypes} from '../components/text'

/*
 * Class: FixedPosition
 * Description:
 */
class FixedPosition extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fixed: false,
      top: 0,
      left: 0,
      width: 0,
    }
  }

  componentDidMount() {
    const position = this.element.getBoundingClientRect()
    const width = this.element.offsetWidth

    this.setState({
      fixed: true,
      top: position.top,
      left: position.left,
      width,
    })
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

function ProjectDetail({label, value}) {
  if (value) {
    return (
      <Fragment>
        <Text type={textTypes.SMALL}>{label}</Text>
        <Text>{value}</Text>
      </Fragment>
    )
  }

  return null
}

/*
 * Function: ProjectLayout
 * Description:
 */
function ProjectLayout({data}) {
  const {project, site} = data

  return (
    <Fragment>
      <Row paddingSize="large" rowSize="large" flexBox={true}>
        <Column largeSize={3} smallSize={12} flexOrder={0}>
          <FixedPosition className="project--left-column">
            <Text type={textTypes.HEADER_1}>
              {project.frontmatter.title}
            </Text>
            <Text>
              {project.frontmatter.description}
            </Text>
            <a
              className="a--arrow-upright"
              target="_blank"
              href={project.frontmatter.externalLink}
            >
              {project.frontmatter.externalLinkDescription}
            </a>
          </FixedPosition>
        </Column>
        <Column largeSize={6} smallSize={12} flexOrder={1}>
          <div
            className="project--main-column"
            dangerouslySetInnerHTML={{__html: project.html}}
          />
        </Column>
        <Column largeSize={3} smallSize={12} flexOrder={2}>
          <FixedPosition className="project--right-column">
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
    </Fragment>
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
      }),
    }),
  }),
}

export default ProjectLayout

export const projectQuery = graphql`
  query ProjectById($id: String!) {
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
      frontmatter {
        title
        description
        category
        client
        externalLink
        externalLinkDescription
        date(formatString: "YYYY")
      }
    }
  }
`
